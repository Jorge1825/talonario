<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  saveConfig: Function,
  actualColor: Object,
});


let optionSelect = ref(["Loteria Santander", "Loteria Nueva", "otra"]);

const dataConfig = ref({
  premio: "",
  valorBoleta: "",
  loteria: "",
  fecha: "",
});

const fecha = new Date().toISOString().slice(0, 10);
//reemplazar los - por /
const fechaFormateada = fecha.replace(/-/g, "/");

const enviarData = () => {
  props.saveConfig(dataConfig.value)
};

const optionBoletas = ref(["0-99", "0-999", "0-9999"]);
</script>

<template>
  <q-card class="my-card" style="width: 400px; max-width: 80vw">
    <q-card-section class="q-ma-none q-pa-none">
      <div class="row no-wrap items-center">
        <div class="col-12 text-center text-h6 text-uppercase color q-py-sm"
>
          <strong>Configura tu talonario</strong>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none row full-width justify-center flex">
      <q-form @submit.prevent.stop="enviarData" class="col-10 q-pt-sm">
        <q-card-section class="q-pt-none row full-width justify-center flex">
          <q-input
            outlined
            class="full-width q-mt-md"
            lazy-rules
            :rules="[(val) => val.length > 0 || 'Por favor ingrese Premio']"
            label="Premio"
            v-model="dataConfig.premio"
          />

          <q-input
            outlined
            class="full-width"
            lazy-rules
            :rules="[
              (val) =>
                (val && parseInt(val) > 0) || 'Por favor ingrese Valor Boleta',
            ]"
            type="number"
            v-model.number="dataConfig.valorBoleta"
            label="Valor Boleta"
          />

          <q-select
            outlined
            class="full-width"
            v-model="dataConfig.loteria"
            :options="optionSelect"
            label="Loteria"
            :rules="[
              (val) => (val && val.trim() != '') || 'Ingrese la loteria',
            ]"
          />

          <q-input
            outlined
            class="full-width q-mt-md"
            lazy-rules
            :rules="[
              (val) => (val && val.trim() != '') || 'Por favor ingrese loteria',
            ]"
            v-if="dataConfig.loteria == 'otra'"
            v-model="addLoteria"
            type="text"
            label="Otra Loteria"
          />

          <q-select
            outlined
            class="full-width "
            v-model="dataConfig.numBoletas"
            :options="optionBoletas"
            label="Numero de boletas"
            :rules="[
              (val) => (val && val.trim() != '') || 'Ingrese el numero de boletas a generar',
            ]"
          />

          <q-input
            outlined
            class="full-width "
            v-model="dataConfig.fecha"
            mask="date"
            label="Fecha del sorteo"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    v-model="dataConfig.fecha"
                    :options="(date) => date > fechaFormateada"
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
        <q-card-actions class="justify-center">
          <q-btn class="color"  label="guardar" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<style>
.q-select__dialog {
  max-width: 350px !important;
}
.color{
  background-color: #004bad;
  color: white;
}
</style>
