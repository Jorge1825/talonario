<script setup>

import { ref,defineProps } from 'vue'

const props = defineProps({ 
  actualColor: Object, 
  saveColor: Function,
  colorDefault: Object,
})

const objectData =ref([
  {item: props.actualColor.color_fondo, label: 'color fondo'},

])

const colorFondo = ref(props.actualColor.color_fondo)

const colorTitleInformacion = ref(props.actualColor.color_title_talonario.color1)
const colorTitleBoletas = ref(props.actualColor.color_title_talonario.color2)
const colorTitleAcciones = ref(props.actualColor.color_title_talonario.color3)

const colorBalotaSelect = ref(props.actualColor.color_balota.select)
const colorBalotaPagada = ref(props.actualColor.color_balota.pagada)
const colorBalotaApartada = ref(props.actualColor.color_balota.apartada)
const colorBalotaGanadora = ref(props.actualColor.color_balota.ganadora)

const colorPrimary = ref(props.actualColor.primary)

const colorBtnCircle = ref(props.actualColor.btn_circle)
const colorBtnSpecial = ref(props.actualColor.btn_special)

const colorCard = ref(props.actualColor.color_card)

console.log(props.actualColor,props.colorDefault)

// const colorBase = ref('#285de0')

const resetColor = () => {
  console.log(objectData.value)
  objectData.value[0].item = props.colorDefault.color_fondo

  colorFondo.value = props.colorDefault.color_fondo
  colorPrimary.value = props.colorDefault.primary
  colorTitleInformacion.value = props.colorDefault.color_title_talonario.color1
  colorTitleBoletas.value = props.colorDefault.color_title_talonario.color2
  colorTitleAcciones.value = props.colorDefault.color_title_talonario.color3
  colorBalotaSelect.value = props.colorDefault.color_balota.select
  colorBalotaPagada.value = props.colorDefault.color_balota.pagada
  colorBalotaApartada.value = props.colorDefault.color_balota.apartada
  colorBalotaGanadora.value = props.colorDefault.color_balota.ganadora
  colorBtnCircle.value = props.colorDefault.btn_circle
  colorBtnSpecial.value = props.colorDefault.btn_special
  colorCard.value = props.colorDefault.color_card
  console.log('colores por defecto')
}

const guardarColor = () => {
  const data = ref({
    color_fondo: colorFondo.value,
    primary: colorPrimary.value,
    color_title_talonario: {
      color1: colorTitleInformacion.value,
      color2: colorTitleBoletas.value,
      color3: colorTitleAcciones.value,
    },
    color_balota: {
      select: colorBalotaSelect.value,
      pagada: colorBalotaPagada.value,
      apartada: colorBalotaApartada.value,
      ganadora: colorBalotaGanadora.value,
    },
    btn_circle: colorBtnCircle.value,
    btn_special: colorBtnSpecial.value,
    color_card: colorCard.value,

  })

  props.saveColor(data.value)
}
</script>



<template>

<q-card class="my-card text-white" style="width: 500px; max-width: 80vw;">
      <q-card-section class="q-ma-none q-pa-none">
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis text-center bg-primary text-uppercase q-py-sm full-width">
            Paleta de colores
            <q-separator />
          </div>
        </div>
      </q-card-section>

      <q-form @submit="guardarColor" @reset="resetColor" >
       <!-- use v-for ??? -->
      <q-card-section class="q-pt-none q-mt-sm">

          <div class="row justify-center flex" v-for="(element,index) in objectData" :key="index" >
            
            <div class="col-6 q-px-sm ">
              <q-input
                filled
                v-model="objectData[index].item"
                :rules="['anyColor']"
                error-message="Color no valido"
                class="my-input"
                :label="element.label"
              >  
                <template v-slot:prepend>
                  <q-icon name="format_color_fill" :style="{color: objectData[0].item}" />
                </template>
  
                <template v-slot:append>
                  <q-icon name="colorize" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-color v-model="objectData[index].item" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>

            </div>

            <div class="col-6 q-px-sm ">
              
              <q-input
                filled
                v-model="objectData[index].item"
                :rules="['anyColor']"
                error-message="Color no valido"
                class="my-input"
                :label="element.label"
              >  
                <template v-slot:prepend>
                  <q-icon name="format_color_fill" :style="{color: objectData[0].item}" />
                </template>
  
                <template v-slot:append>
                  <q-icon name="colorize" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-color v-model="objectData[index].item" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            

<!--             
            <div class="row flex justify-center">
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
            </div>



            <q-input
              filled
              v-model="colorBalotaSelect"
              :rules="['anyColor']"
              error-message="Color no valido"
              class="my-input"
              label="Color Seleccion Balota"
            >  
              <template v-slot:prepend>
                <q-icon name="format_color_fill" :style="{color: colorBalotaSelect}" />
              </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorBalotaSelect" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              filled
              v-model="colorBalotaPagada"
              :rules="['anyColor']"
              error-message="Color no valido"
              class="my-input"
              label="Color Balota Pagada"
            >  
              <template v-slot:prepend>
                <q-icon name="format_color_fill" :style="{color: colorBalotaPagada}" />
              </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorBalotaPagada" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              filled
              v-model="colorBalotaApartada"
              :rules="['anyColor']"
              error-message="Color no valido"
              class="my-input"
              label="Color Balota Apartada"
            >  
              <template v-slot:prepend>
                <q-icon name="format_color_fill" :style="{color: colorBalotaApartada}" />
              </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorBalotaApartada" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              filled
              v-model="colorBalotaGanadora"
              :rules="['anyColor']"
              error-message="Color no valido"
              class="my-input"
              label="Color Balota Ganadora"
            >  
              <template v-slot:prepend>
                <q-icon name="format_color_fill" :style="{color: colorBalotaGanadora}" />
              </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorBalotaGanadora" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>


            <q-input
              filled
              v-model="colorPrimary"
              :rules="['anyColor']"
              error-message="Color no valido"
              class="my-input"
              label="Color Boton Adquirir"
            >  
              <template v-slot:prepend>
                <q-icon name="format_color_fill" :style="{color: colorPrimary}" />
              </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorPrimary" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              filled
              v-model="colorBtnCircle"
              :rules="['anyColor']"
              error-message="Color no valido"
              class="my-input"
              label="Color Boton sin asignar"
            >  
              <template v-slot:prepend>
                <q-icon name="format_color_fill" :style="{color: colorBtnCircle}" />
              </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorBtnCircle" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              filled
              v-model="colorBtnSpecial"
              :rules="['anyColor']"
              error-message="Color no valido"
              class="my-input"
              label="Color Boton sin asignar"
            >  
              <template v-slot:prepend>
                <q-icon name="format_color_fill" :style="{color: colorBtnSpecial}" />
              </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorBtnSpecial" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              filled
              v-model="colorCard"
              :rules="['anyColor']"
              error-message="Color no valido"
              class="my-input"
              label="Color Card"
            >  
              <template v-slot:prepend>
                <q-icon name="format_color_fill" :style="{color: colorCard}" />
              </template>

              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-color v-model="colorCard" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input> -->

            <!-- <q-input
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
            </q-input> -->
          </div>

          <div class="col-12 justify-center flex">
            <q-btn color="red-8" dense glossy   label="Colores por defecto" type="reset" />
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


