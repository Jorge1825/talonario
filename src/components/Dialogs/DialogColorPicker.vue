<script setup>

import { ref,defineProps } from 'vue'

const props = defineProps({ 
  actualColor: Object, 
  saveColor: Function,
})

const colorFondo = ref(props.actualColor.colorFondo)
const colorTitleInformacion = ref(props.actualColor.color_title_talonario.color1)
const colorTitleBoletas = ref(props.actualColor.color_title_talonario.color2)
const colorTitleAcciones = ref(props.actualColor.color_title_talonario.color3)

const colorBalotaSelect = ref(props.actualColor.colorBalota.select)
const colorBalotaPagada = ref(props.actualColor.colorBalota.pagada)
const colorBalotaApartada = ref(props.actualColor.colorBalota.apartada)
const colorBalotaGanadora = ref(props.actualColor.colorBalota.ganadora)

console.log(props.actualColor)

const colorBase = ref('#285de0')

const guardarColor = () => {
  const data = ref({
    colorFondo: colorFondo.value,
    color_title_talonario: {
      color1: colorTitleInformacion.value,
      color2: colorTitleBoletas.value,
      color3: colorTitleAcciones.value
    }
  })

  props.saveColor(data.value)
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
              v-model="colorFondo"
              :rules="['anyColor']"
              error-message="Color no valido"
              class="my-input"
              label="Color Fondo"
            >  
              <template v-slot:prepend>
                <q-icon name="format_color_fill" :style="{color: colorFondo}" />
              </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorFondo" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            
            <q-input
              filled
              v-model="colorTitleInformacion"
              :rules="['anyColor']"
              error-message="Color no valido"
              class="my-input"
              label="Color Titulo Informacion"
            >  
              <template v-slot:prepend>
                <q-icon name="format_color_fill" :style="{color: colorTitleInformacion}" />
              </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorTitleInformacion" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              filled
              v-model="colorTitleBoletas"
              :rules="['anyColor']"
              error-message="Color no valido"
              class="my-input"
              label="Color Titulo Boleta"
            >  
              <template v-slot:prepend>
                <q-icon name="format_color_fill" :style="{color: colorTitleBoletas}" />
              </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorTitleBoletas" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              filled
              v-model="colorTitleAcciones"
              :rules="['anyColor']"
              error-message="Color no valido"
              class="my-input"
              label="Color Titulo Acciones"
            >  
              <template v-slot:prepend>
                <q-icon name="format_color_fill" :style="{color: colorTitleAcciones}" />
              </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorTitleAcciones" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
          
              filled
              v-model="colorBase"
              :rules="['anyColor'] "
              error-message="Color no valido"
              class="my-input"
              label="Color base"
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
              :rules="['anyColor']"
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
              :rules="['anyColor']"
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
            <q-btn color="red-8" dense glossy label="Colores por defecto" type="button" />
          </div>

        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn v-close-popup label="Guardar" type="submit" color="primary" @click="guardarColor" />
      </q-card-actions>

      </q-form>

      <!-- <q-separator />

      <q-card-actions align="center">
        <q-btn v-close-popup  rounded color="primary"  label="Guardar" />
      </q-card-actions> -->
    </q-card>

</template>


