<script setup>
    import {ref,defineProps} from 'vue'
    const props = defineProps({
        cardData: Array,
        saveData: Function
        
    })
    let optionSelect = ref(['Loteria Santander', 'Loteria Nueva', 'otra'])
    
    let premioValue = ref(props.cardData[0].value)
    let boletaValue = ref(props.cardData[1].value)
    let loteriaValue = ref(props.cardData[2].value)
    let fechaValue = ref(props.cardData[3].value)
    let addLoteria = ref('')

    console.log(new Date(fechaValue.value), new Date().toISOString().slice(0,10))
    function onSubmit(){
      console.log('submit')
      if(addLoteria.value){
        loteriaValue.value =addLoteria.value 
      }
      
      props.saveData([premioValue.value,boletaValue.value,loteriaValue.value,fechaValue.value],false)
    }
</script>

<template>
  <q-card class="my-card" style="width: 400px; max-width: 80vw;">
      <q-card-section class="q-ma-none q-pa-none">
        <div class="row no-wrap items-center">
          <div class="col-12 text-center text-h6 ellipsis bg-primary q-py-sm text-white">
            Editar Sorteo
          </div>
        </div>

      </q-card-section>

      <q-card-section class="q-pt-none row full-width  justify-center flex">
        <q-form @submit="onSubmit" class="col-10 q-py-sm">
          <q-input  class="q-mt-md" lazy-rules :rules="[
              premioValue => premioValue && premioValue.trim() !== '' || 'Por favor ingrese Premio',
              premioValue => premioValue && parseInt(premioValue) > 0 || 'Por favor ingrese premio'
          ]" type="text" v-model="premioValue" dense :label="cardData[0].label" />
          
          <q-input lazy-rules  :rules="[
              boletaValue => boletaValue && parseInt(boletaValue) > 0 || 'Por favor ingrese Valor boleta'
          ]" type="number" v-model="boletaValue" dense :label="cardData[1].label" />
          
          <q-select v-model="loteriaValue" :options="optionSelect" :label="cardData[2].label" />
          
          <q-input class="q-mt-md"  lazy-rules :rules="[
              addLoteria => addLoteria && addLoteria.trim() !== '' || 'Por favor ingrese loteria'
          ]" v-if="loteriaValue == 'otra'" v-model="addLoteria" type="text" label="Otra Loteria" dense />
          
          <q-input lazy-rules  class="q-mt-md"  :rules="[
            fechaValue => fechaValue && fechaValue >= new Date().toISOString().slice(0,10) || 'Por favor ingrese Fecha sorteo'
          ]" type="date" v-model="fechaValue" :label="cardData[3].label" dense />
          


          <div class="flex justify-center" >
              <q-btn class="q-mx-sm" v-close-popup  color="red" label="Cerrar" />
              <q-btn label="guardar" type="submit" color="primary"/>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
</template>