<script setup>

import { ref,defineProps } from 'vue';

const props = defineProps({ 
  actualColor: Object, 
  saveColor: Function,
  colorDefault: Object,
});

const objectData =ref([
  {item: props.actualColor.color_fondo, label: 'color fondo'},
  {item: props.actualColor.color_fondo_header, label: 'color fondo header y footer'},

  {item: props.actualColor.color_btn, label: 'color botons'},

  {item: props.actualColor.color_title_talonario, label: 'color titles talonario'},

  {item: props.actualColor.color_card, label: 'color cards'},

  {item: props.actualColor.color_balota.pagada, label: 'color balota pagada'},
  {item: props.actualColor.color_balota.apartada, label: 'color balota apartada'},
  {item: props.actualColor.color_balota.select, label: 'color balota select'},
  {item: props.actualColor.color_balota.normal, label: 'color balota normal'}
  // {item: props.actualColor.color_balota.ganadora, label: 'color balota ganadora'},


]);

const resetColor = () => {

  objectData.value[0].item = props.colorDefault.color_fondo;
  objectData.value[1].item = props.colorDefault.color_fondo_header;
  objectData.value[2].item = props.colorDefault.color_btn;
  objectData.value[3].item = props.colorDefault.color_title_talonario;
  objectData.value[4].item = props.colorDefault.color_card;
  objectData.value[5].item = props.colorDefault.color_balota.pagada;
  objectData.value[6].item = props.colorDefault.color_balota.apartada;
  objectData.value[7].item = props.colorDefault.color_balota.select;
  objectData.value[8].item = props.colorDefault.color_balota.normal
  // objectData.value[8].item = props.colorDefault.color_balota.ganadora;


};

const guardarColor = () => {

  const data = ref({
    color_fondo: objectData.value[0].item,
    color_fondo_header: objectData.value[1].item,
    
    color_btn: objectData.value[2].item,
    
    color_title_talonario: objectData.value[3].item,
    
    color_card: objectData.value[4].item,
    
    color_balota: {
      pagada: objectData.value[5].item,
      apartada: objectData.value[6].item,
      select: objectData.value[7].item,
      normal: objectData.value[8].item,
      // ganadora: objectData.value[8].item,
    },
  });

  props.saveColor(data.value);
};
</script>

<template>
  <q-card class="my-card" style="width: 700px; max-width: 80vw;">
    <q-card-section class="q-ma-none q-pa-none">
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis text-center colorHeader text-uppercase q-py-sm full-width">
          <strong>Paleta de colores</strong>
          <!-- <q-separator /> -->
        </div>
      </div>
    </q-card-section>

    <q-form @submit="guardarColor" @reset="resetColor" >
      <q-card-section class="q-pt-none q-mt-sm">
        <div class="row  justify-center flex" >
          <div class="col-4 q-px-sm " v-for="(element,index) in objectData" :key="index" >
            <q-input
              filled
              v-model="objectData[index].item"
              :rules="['anyColor']"
              error-message="Color no valido"
              class="my-input"
              :label="element.label"
            >  
              <template v-slot:prepend>
                <q-icon name="format_color_fill" :style="{color: objectData[index].item}" />
              </template>
              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="objectData[index].item" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

          </div>
        </div>
        
        <div class="col-12 justify-center flex">
          <q-btn color="red-8" dense glossy   label="Colores por defecto" type="reset" />
        </div>
      </q-card-section>
      
      <q-separator />

      <q-card-actions class="justify-center flex">
        <q-btn v-close-popup class="colorBtn text-white" label="Guardar" type="submit" @click="guardarColor" />
      </q-card-actions>

    </q-form>
</q-card>

</template>

<style>
  .colorHeader{
    background-color: v-bind("actualColor.color_fondo_header");
    color: v-bind("actualColor.color_title_talonario")
  }

  .colorBtn{
    color: v-bind("actualColor.color_title_talonario") ;
    background-color: v-bind("actualColor.color_fondo_header") !important;
  }
</style>