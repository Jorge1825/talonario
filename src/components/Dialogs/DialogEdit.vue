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
        // console.log(optionSelect.value.includes(addLoteria.value))
        // if(!optionSelect.value.includes(addLoteria.value)){
        //   optionSelect.value.unshift(addLoteria.value)
        //   console.log(optionSelect.value)
        // }
        loteriaValue.value = addLoteria.value
      }
      
      props.saveData([premioValue.value,boletaValue.value,loteriaValue.value,fechaValue.value],false)
    }
</script>

<template>

  <q-card class="my-card" style="width: 400px; max-width: 80vw;">
      <q-card-section class="q-ma-none q-pa-none">
        <div class="row no-wrap items-center">
          <div class="col-12 text-center text-h6 text-uppercase bg-primary q-py-sm text-white">
            <strong>Editar Sorteo</strong>
  
          </div>
        </div>

      </q-card-section>

      <q-card-section class="q-pt-none row full-width  justify-center flex">
        <q-form @submit="onSubmit" class="col-10 q-py-sm">
        <q-card-section class="q-pt-none row full-width  justify-center flex">
          <q-input outlined class="full-width q-mt-md" lazy-rules :rules="[
              premioValue => premioValue && premioValue.trim() !== '' || 'Por favor ingrese Premio',
              premioValue => premioValue && parseInt(premioValue) > 0 || 'Por favor ingrese Premio'
          ]" type="text" v-model="premioValue"  :label="cardData[0].label" />
          
          <q-input outlined class="full-width"  lazy-rules  :rules="[
              boletaValue => boletaValue && parseInt(boletaValue) > 0 || 'Por favor ingrese Valor Boleta'
          ]" type="number" v-model="boletaValue"  :label="cardData[1].label" />
          
          <q-select  outlined class="full-width" v-model="loteriaValue" :options="optionSelect" :label="cardData[2].label" />
          
          <q-input outlined class="full-width q-mt-md"  lazy-rules :rules="[
              addLoteria => addLoteria && addLoteria.trim() !== '' || 'Por favor ingrese loteria'
          ]" v-if="loteriaValue == 'otra'" v-model="addLoteria" type="text" label="Otra Loteria"  />
          
        
    <q-input  outlined class="full-width q-mt-md" v-model="fechaValue" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="fechaValue">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>


          
        </q-card-section>
        <q-card-actions class="justify-center">
          <q-btn class="q-mx-sm" v-close-popup  color="red" label="Cerrar" />
          <q-btn label="guardar" type="submit" color="primary"/>
        </q-card-actions>
      </q-form>
    </q-card-section>
  </q-card>
</template>