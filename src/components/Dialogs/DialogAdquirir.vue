<script setup>

import { ref, defineProps } from "vue";

const props = defineProps({
    boletaSelect: Array,
  reserveBoleta: Function,
});

const nombre = ref("");
const telefono = ref("");
const direccion = ref("");

const infoUser = ref({
  pagar: 0,
});

const options = [
  { label: "SI", value: 1 },
  { label: "NO", value: 0 },

];


</script>

<template>
  <q-card class="my-card text-white" style="width: 400px; max-width: 80vw">
    <q-card-section class="q-ma-none q-pa-none">
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis text-center bg-primary full-width q-py-md">
          <strong>Diligencia la Informacion </strong>
     
        </div>
      </div>
    </q-card-section>

    <q-form @submit.prevent.stop="reserveBoleta(infoUser)">
      <q-card-section class="q-pt-none q-mt-sm">
        <div class="row justify-center flex">

            <div class="col-10 text-dark q-mt-sm q-mb-md text-subtitle2 text-center">
                <strong>Boletas a Adquirir :  {{ boletaSelect.map((item) => item).join(" - ") }}</strong>  
                
                </div>
          <div class="col-10 justify-center flex">
            <q-input
           
              outlined 
              class="full-width"
              v-model="infoUser.nombre"
              label="Nombre"
              :rules="[val => val && val.length > 0 || 'El nombre es requerido']"
            >
            <template v-slot:prepend>
          <q-icon name="face" color="primary" />
        </template>

            </q-input>

            <q-input
      
              outlined 
              class="full-width"
              v-model="infoUser.telefono"
              label="Telefono"
              mask="(###) ### - ####"
              unmasked-value
              lazy-rules
                :rules="[val => val && val.length > 0 || 'El telefono es requerido',
                val => val.length === 10 || 'El telefono debe tener 10 digitos'
                ]"
            >
            <template v-slot:prepend>
          <q-icon name="phone_iphone" color="primary" />
        </template>
            </q-input>

            <q-input
       
              outlined 
              class="full-width"
              v-model="infoUser.direccion"
              label="Direccion"
              autogrow
              :rules="[val => val && val.length > 0 || 'El nombre es requerido']"
            >
            <template v-slot:prepend>
          <q-icon name="location_on" color="primary" />
        </template>

            </q-input>

            <div class=" full-width rounded-borders text-dark q-pt-xs">
              Pagar ya:
              <q-option-group
                name="preferred_genre"
                v-model="infoUser.pagar"
                :options="options"
                color="primary"
                inline
              />
            </div>

          </div>


        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions class=" justify-center">
        <q-btn
          rounded
          label="Adquirir"
          type="submit"
          color="primary"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>
