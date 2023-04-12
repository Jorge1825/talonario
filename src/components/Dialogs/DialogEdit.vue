<script setup>
    import {ref,defineProps, computed} from 'vue'
    import { colorDefault } from '../../temp/colors.js'

    const props = defineProps({
        cardData: Array,
        saveData: Function ,
        actualColor: Object,
    })
    const optionSelect = ref(['Loteria Santander', 'Loteria Nueva', 'otra'])

    const data = props.cardData


    const fecha = new Date().toISOString().slice(0, 10)
    //reemplazar los - por /
    const fechaFormateada = fecha.replace(/-/g, "/")




    
    const premioValue = ref(props.cardData[0].value)
    const boletaValue = ref(props.cardData[1].value)
    const loteriaValue = ref(props.cardData[2].value)
    const fechaValue = ref(props.cardData[3].value)
    const addLoteria = ref('')


    function onSubmit(){

      if(addLoteria.value){
    
        loteriaValue.value = addLoteria.value
      }
      
      props.saveData([premioValue.value,boletaValue.value,loteriaValue.value,fechaValue.value],false)
    }
</script>

<template>

  <q-card class="my-card " style="width: 400px; max-width: 80vw;">
    <!-- <p v-bind="$attrs">prueba</p> -->
      <q-card-section class="q-ma-none q-pa-none">
        <div class="row no-wrap items-center">
          <div class="col-12 text-center text-h6 text-uppercase color-title  color-header q-py-sm ">
            <strong >Editar Sorteo</strong>
  
          </div>
        </div>

      </q-card-section>

      <q-card-section class="q-pt-none row full-width  justify-center flex">
        <q-form @submit.prevent.stop="onSubmit" class="col-10 q-py-sm" novalidate>
        <q-card-section class="q-pt-none row full-width  justify-center flex">
          <q-input 
          outlined 
          class="full-width q-mt-md" 
          lazy-rules 
          :rules="[ val => val.length >0|| 'Por favor ingrese Premio']"

          v-model="premioValue"  
          :label="cardData[0].label" />

          <q-input outlined class="full-width"  lazy-rules  :rules="[
              val => val && parseInt(val) > 0 || 'Por favor ingrese Valor Boleta'
          ]" type="number" v-model="boletaValue"  :label="cardData[1].label" />
          
          <q-select  outlined class="full-width" v-model="loteriaValue" :options="optionSelect" :label="cardData[2].label" 
          :rules="[
              (val) => (val && val.trim() != '') || 'Ingrese la loteria',
            ]"
          />
          
          <q-input outlined class="full-width q-mt-md"  lazy-rules :rules="[
              val => val && (val.trim()) != '' || 'Por favor ingrese loteria'
          ]" v-if="loteriaValue == 'otra'" v-model="addLoteria" type="text" label="Otra Loteria"  />
          
        
          


    <q-input  outlined class="full-width " v-model="fechaValue" mask="date" 
  
    :rules="['date']" >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="fechaValue"

            :options="date => date > fechaFormateada "
            

            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>


          
        </q-card-section>
        <q-card-actions class="justify-center ">
          <q-btn class="q-mx-sm" v-close-popup  color="red" label="Cerrar"/> 
          <q-btn class="color-btn" label="guardar" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card-section>
  </q-card>
</template>



<style scoped>

.color-test{
  background-color: v-bind("colorDefault.test");
}

.color-title{
  color: v-bind("actualColor.color_title_talonario")
}

.color-header{
  background-color: v-bind("actualColor.color_fondo_header")
}


.color-btn{
  background-color: v-bind("actualColor.color_btn");
  color: white;
}

.q-select__dialog {
  max-width: 350px !important;
}
</style>