<script setup>

import { ref } from 'vue'

const colorBase = ref('#285de0')

const guardarColor = () => {
  console.log(colorBase.value)
}

</script>



<template>

<q-card class="my-card text-white" style="width: 400px; max-width: 80vw;">
      <q-card-section class="q-ma-none q-pa-none">
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis text-center bg-primary full-width">
            Paleta de colores
            <q-separator />
          </div>
        </div>
      </q-card-section>

      <q-form @submit="guardarColor" >
       
      <q-card-section class="q-pt-none q-mt-sm">
        <div class="row">
          <div class="col-12 justify-center flex">
            <q-input
          
              filled
              v-model="colorBase"
              :rules="['anyColor'] || 'Por favor ingrese Premio'"
              error-message="Color no valido"
              class="my-input"
            >
            <template v-slot:prepend>
              <q-icon name="format_color_fill" :style="{color: colorBase}" />
            </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorBase" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div class="col-12 justify-center flex">
            <q-input
          
              filled
              v-model="colorBase"
              :rules="['anyColor'] || 'Por favor ingrese Premio'"
              error-message="Color no valido"
              class="my-input"
            >
            <template v-slot:prepend>
              <q-icon name="format_color_fill" :style="{color: colorBase}" />
            </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorBase" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div class="col-12 justify-center flex">
            <q-input
          
              filled
              v-model="colorBase"
              :rules="['anyColor'] || 'Por favor ingrese Premio'"
              error-message="Color no valido"
              class="my-input"
            >
            <template v-slot:prepend>
              <q-icon name="format_color_fill" :style="{color: colorBase}" />
            </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorBase" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div class="col-12 justify-center flex">
            <q-btn color="primary" dense glossy label="Colores por defecto" type="button" />
          </div>

        </div>
      </q-card-section>
      </q-form>

      <q-separator />

      <q-card-actions align="center">
        <q-btn v-close-popup  rounded color="primary"  label="Guardar" />
      </q-card-actions>
    </q-card>

</template>


