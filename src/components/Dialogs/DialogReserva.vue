<script setup>

import { ref, computed, defineProps } from 'vue'
import { useQuasar } from 'quasar';

import DialogAdquirir from './DialogAdquirir.vue'
import DialogParticipante from './DialogParticipant.vue';

import {dataBoletas} from '../../temp/data.js'


const $q = useQuasar()

const estadoBoleta = ref("")
const showAdquirir = ref(false)
const showParticipante = ref(false)

const props = defineProps({
  dataBoletas: Array,
  boletaSelect:Array,
  reserveBoleta: Function,
})


 

 const boletaExist = computed(() => {
  props.dataBoletas.filter((item) => {
    item.boletas.filter((item) => {
      if (item.numero == props.boletaSelect[0]) {
        estadoBoleta.value = item.estado
      }
    
    })
  })
  return estadoBoleta.value
 })


 const addBoleta = (data) => {
  props.reserveBoleta(data)
  showAdquirir.value = false
 }


 //pagar boleta seleccionada
 const payBoleta = (boleta) => {
  dataBoletas.value.filter((item) => {
    item.boletas.filter((item) => {
      if (item.numero == boleta[0]) {
        item.estado = '1'
      }
    })
  })
 }


 //liberar boleta seleccionada
 const releaseBoleta = (boleta) => {
  //obtner la posicion del cliente y la boleta para eliminarla
  let people = ""
  let index = ""
    dataBoletas.value.filter((item,index) => {

      item.boletas.filter((item, i) => {

        if (item.numero == boleta) {
          people = index
          index = i

        }
      })
    })

    dataBoletas.value[people].boletas.splice(index, 1)

    $q.notify({
      message: `Boleta ${boleta} liberada`,
      color: 'positive',
      position: 'top',
    })
    

 }



</script>


<template>
  <q-card style="width: 350px">
    <q-card-section class="row items-center ">
      <div class="col-12 text-Boleta text-center">Boleta {{boletaSelect[0]}}</div>
      <div class="col-12 justify-center flex items-center">
        <span class="text-subtitle2">Estado:  {{ boletaExist === '1' ? 'Pagada' :boletaExist === '0' ? 'Reservada' : 'Disponible' }}</span>

        <q-btn class="q-ml-md" round color="primary" size="xs" />
      </div>
      <div class="col-12 q-mt-md">
        <q-separator />
      </div>
    </q-card-section>

    <q-card-section class="row items-center q-my-none q-pt-none">
      <q-list class="full-width q-mt-none q-pt-none">
        <q-item clickable v-ripple v-if="boletaExist === '0' || boletaExist === '1'" @click="showParticipante = true"> 
          <q-item-section avatar>
            <q-icon color="primary" name="visibility" />
          </q-item-section>

          <q-item-section>Ver datos del participante</q-item-section>
        </q-item>

        <q-item v-close-popup  clickable v-ripple v-if="boletaExist === '0'" @click="releaseBoleta(boletaSelect)">
          <q-item-section avatar>
            <q-icon color="primary" name="restore" />
          </q-item-section>

          <q-item-section>Liberar boleta</q-item-section>
        </q-item>

        <q-item clickable v-ripple v-if="boletaExist === '0'" @click="payBoleta(boletaSelect)">
          <q-item-section avatar>
            <q-icon color="primary" name="verified" />
          </q-item-section>

          <q-item-section>Marcar como pagada</q-item-section>
        </q-item>

        <q-item clickable v-ripple v-if="boletaExist !== '1' && boletaExist !== '0'">
          <q-item-section avatar>
            <q-icon color="primary" name="handshake" />
          </q-item-section>

          <q-item-section @click="showAdquirir = true">Adquirir boleta</q-item-section>
        </q-item>

      </q-list>
    </q-card-section>
  </q-card>


  <!--  Dialogo para adquirir boleta -->
  <q-dialog v-model="showAdquirir" >
    <DialogAdquirir :boletaSelect="boletaSelect" :reserveBoleta="addBoleta" />
    </q-dialog>

   <q-dialog v-model="showParticipante" >
    <DialogParticipante :boletaSelect="boletaSelect" />
    </q-dialog>


</template>
<style scoped>
.text-Boleta {
  font-size: 20px;
  font-weight: bold;
}
</style>
