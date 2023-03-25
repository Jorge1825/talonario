<script setup>

import { ref, defineProps } from "vue";

const modelCard = ref([
  {
    icon: "flag_circle",
    color: "red-7",
    data: 80,
    title: "TOTAL DE BALOTAS"
  },

  {
    icon: "flag_circle",
    color: "red-7",
    data: 80,
    title: "BALOTAS PAGADAS"
  },
  {
    icon: "flag_circle",
    color: "red-7",
    data: 80,
    title: "BALOTAS POR PAGAR"
  },
  {
    icon: "flag_circle",
    color: "red-7",
    data: 80,
    title: "bALOTAS POR VENDER"
  },
  {
    icon: "flag_circle",
    color: "red-7",
    data: 80,
    title: "GANANCIAS"
  },
  {
    icon: "flag_circle",
    color: "red-7",
    data: 80,
    title: "BALOTA GANADORA"
  }
])


</script>

<template>
  <q-card class="my-card text-white" style="width: 520px; max-width: 80vw">
    <q-card-section class="q-ma-none q-pa-none">
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis text-center bg-primary full-width q-py-md">
          ESTADISTICAS DEL SORTEO
     
        </div>
      </div>
    </q-card-section>
      <q-card-section class="row q-pt-none q-mt-sm text-dark justify-around">

        <div class="col-5 cardStadistics q-mb-sm" v-for="item,index in modelCard" :key="index">
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


<style scoped>

.cardStadistics{
  background: rgb(253, 253, 253);
  padding: 10px 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  
}

</style>