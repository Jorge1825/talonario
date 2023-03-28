<script setup>

import { ref, defineProps, computed } from "vue";

//data
import { colorDefault } from '../../temp/colors.js'
import {dataBoletas} from '../../temp/data.js'
import {configTalonario} from '../../temp/data.js'

const balotasPay = computed(() => {
  
  const balotas = dataBoletas.value.reduce((acc, item) => {
    item.boletas.filter((item) => {
      if (item.estado == '1') {
        acc += 1
      }
    })
    return acc
  }, 0)

  return parseInt(balotas)
})



const balotasNoPay = computed(() => {
  
  const balotas = dataBoletas.value.reduce((acc, item) => {
    item.boletas.filter((item) => {
      if (item.estado == '0') {
        acc += 1
      }
    })
    return acc
  }, 0)

  return balotas
})





const modelCard = ref([
  {
    icon: "flag_circle",
    color: "blue-8",
    data: configTalonario.value.balotas +1,
    title: "TOTAL DE BALOTAS"
  },

  {
    icon: "flag_circle",
    color: "red-14",
    data: balotasPay,
    title: "BALOTAS PAGADAS"
  },
  {
    icon: "flag_circle",
    color: "blue-8",
    data: balotasNoPay,
    title: "BALOTAS POR PAGAR"
  },
  {
    icon: "flag_circle",
    color: "red-14",
    data: (configTalonario.value.balotas +1) - (balotasPay.value + balotasNoPay.value),
    title: "BALOTAS POR VENDER"
  },
  {
    icon: "flag_circle",
    color: "blue-8",
    data: `$ ${balotasPay.value * configTalonario.value.valorBoleta}`,
    title: "GANANCIAS"
  },
  {
    icon: "flag_circle",
    color: "red-14",
    data: configTalonario.value.boletaGanadora || "?",
    title: "BALOTA GANADORA"
  },
  {
    icon: "flag_circle",
    color: "purple-10",
    data: `$ ${((configTalonario.value.balotas +1) - (balotasPay.value + balotasNoPay.value))* configTalonario.value.valorBoleta}`,
    title: "DINERO POR RECAUDAR"
  },
])


</script>

<template>
  <q-card class="my-card text-white" style="width: 540px; max-width: 80vw">
    <q-card-section class="q-ma-none q-pa-none">
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis text-center headerDialog full-width q-py-md">
          
           <strong>ESTADISTICAS DEL SORTEO</strong>
     
        </div>
      </div>
    </q-card-section>
      <q-card-section class="row q-pt-none q-mt-sm text-dark justify-around">

        <div class="col-sm-5 col-10 cardStadistics q-mb-sm" v-for="item,index in modelCard" :key="index">
          <div class="row ">
            <div class="col-3 items-center flex">
              <q-icon :name="item.icon" size="xl" :color="item.color"/>
            </div>
            <div class="col-9 justify-end flex">
              <div class="row  justify-end flex">
                <div class="col-12 justify-end flex text-h6"><strong>{{ item.data }}</strong></div>
                <div class="col-12 justify-end flex text-caption text-uppercase">{{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
        
      </q-card-section>

      <q-separator />

      <q-card-actions class=" justify-center">
        <q-btn
          
          v-close-popup
          label="Cerrar"
          type="submit"
          color="primary"
        />
      </q-card-actions>
  </q-card>
</template>


<style>

.cardStadistics{
  background: rgb(253, 253, 253);
  padding: 10px 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  
}
.headerDialog{
  background: rgb(77, 171, 214);
}
</style>