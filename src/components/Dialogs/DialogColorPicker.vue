<script setup>

import { ref,defineProps } from 'vue';

const props = defineProps({ 
  actualColor: Object, 
  saveColor: Function,
  colorDefault: Object,
});

const objectData =ref([
  {item: props.actualColor.color_fondo, label: 'color fondo'},
  {item: props.actualColor.primary, label: 'color boton adquirir'},
  {item: props.actualColor.color_title_talonario.color1, label: 'color title talonario'},
  {item: props.actualColor.color_title_talonario.color2, label: 'color title informacion'},
  {item: props.actualColor.color_title_talonario.color3, label: 'color title acciones'},
  {item: props.actualColor.color_balota.select, label: 'color balota select'},
  {item: props.actualColor.color_balota.pagada, label: 'color balota pagada'},
  {item: props.actualColor.color_balota.apartada, label: 'color balota apartada'},
  {item: props.actualColor.color_balota.ganadora, label: 'color balota ganadora'},
  {item: props.actualColor.btn_circle, label: 'btn1'},
  {item: props.actualColor.btn_special, label: 'btn2'},
  {item: props.actualColor.color_card},
]);

// const colorFondo = ref(props.actualColor.color_fondo);
// const colorBase = ref('#285de0');

const resetColor = () => {
  console.log(objectData.value);
  objectData.value[0].item = props.colorDefault.color_fondo;
  objectData.value[1].item = props.colorDefault.primary;
  objectData.value[2].item = props.colorDefault.color_title_talonario.color1;
  objectData.value[3].item = props.colorDefault.color_title_talonario.color2;
  objectData.value[4].item = props.colorDefault.color_title_talonario.color3;
  objectData.value[5].item = props.colorDefault.color_balota.select;
  objectData.value[6].item = props.colorDefault.color_balota.pagada;
  objectData.value[7].item = props.colorDefault.color_balota.apartada;
  objectData.value[8].item = props.colorDefault.color_balota.ganadora;
  objectData.value[9].item = props.colorDefault.btn_circle;
  objectData.value[10].item = props.colorDefault.btn_special;
  objectData.value[11].item = props.colorDefault.color_card;
  console.log('colores por defecto');
};

const guardarColor = () => {
  console.log(objectData.value);
  const data = ref({
    // color_fondo: colorFondo.value,
    color_fondo: objectData.value[0].item,
    primary: objectData.value[1].item,
    color_title_talonario: {
      color1: objectData.value[2].item,
      color2: objectData.value[3].item,
      color3: objectData.value[4].item,
    },
    color_balota: {
      select: objectData.value[5].item,
      pagada: objectData.value[6].item,
      apartada: objectData.value[7].item,
      ganadora: objectData.value[8].item,
    },
    btn_circle: objectData.value[9].item,
    btn_special: objectData.value[10].item,
    color_card: objectData.value[11].item,
  });

  props.saveColor(data.value);
};
</script>

<template>
  <q-card class="my-card text-white" style="width: 500px; max-width: 80vw;">
    <q-card-section class="q-ma-none q-pa-none">
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis text-center bg-primary text-uppercase q-py-sm full-width">
          Paleta de colores
          <q-separator />
        </div>
      </div>
    </q-card-section>

    <q-form @submit="guardarColor" @reset="resetColor" >
      <q-card-section class="q-pt-none q-mt-sm">
        <div class="row justify-center flex" v-for="(element,index) in objectData" :key="index" >
          <div class="col-6 q-px-sm ">
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

      <q-card-actions>
        <q-btn v-close-popup label="Guardar" type="submit" color="primary" @click="guardarColor" />
      </q-card-actions>

    </q-form>
</q-card>

</template>


