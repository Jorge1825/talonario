<script setup>

import {ref, defineProps} from "vue";

const props = defineProps({
    buttons: Array,
    isSelected: Function,
    selectButton: Function,
});

const displayColorDialog = ref(false)

</script>


<template>
    <q-card-section class="row  d-flex q-pa-none" >
                        <div class="col-12 ">
                          <div class="row  boxPelotas justify-center q-mx-lg">
                            <template v-for="(fila,index) in buttons" :key="index" >
                              <div class="col-12 justify-center flex">
                                  <q-btn  v-for="button in fila" :key="button"  class="btnBalotas"
                                    :label="button > 9 ? button : '0' + button" round @click="selectButton(button)"
                                    :class="isSelected(button) ? 'btn-active' : ''">
                                    <q-badge v-if="isSelected(button)" color="green" dense floating rounded>
                                      <q-icon name="check" size="10px" />
                                    </q-badge>
                                  </q-btn>
                                </div>
                            </template>
                          </div>
                        </div>
              
                    </q-card-section>
</template>


<style>


.btn-active {
  background: rgb(0, 140, 255) !important;
  color: rgb(255, 255, 255) !important;
}

.boxPelotas {

max-height: calc(100vh/1.48);
width: auto;
overflow: auto;
/*Estilos estándar experimentales (Principalmente Firefox)*/
scrollbar-color: rgba(0, 0, 0, .5) rgba(0, 0, 0, 0);
scrollbar-width: thin;
border-radius: 10px;
background-color: #ecf5ff;
}

/* Estilos para motores Webkit y blink (Chrome, Safari, Opera... )*/

.boxPelotas::-webkit-scrollbar {
-webkit-appearance: none;
}

.boxPelotas::-webkit-scrollbar:vertical {
width: 6px;
}

.boxPelotas::-webkit-scrollbar-button:increment,
.boxPelotas::-webkit-scrollbar-button {
display: none;
}

.boxPelotas::-webkit-scrollbar:horizontal {
height: 10px;
}

.boxPelotas::-webkit-scrollbar-thumb {
background-color: #027bec;
border-radius: 20px;
border: 1px solid #0051ff;
}

.boxPelotas::-webkit-scrollbar-track {
border-radius: 10px;
}


.btnBalotas {
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 21%, rgba(253,254,255,1) 24%, rgb(150, 208, 255) 100%);
  color: rgb(0, 0, 0) !important;
  border: 1px solid rgb(255, 255, 255) !important;
  width: 3rem;
  height: 1rem !important;
  margin: 0.08rem 0.3rem;

}

.btnBalotas:hover {
  transition: 0.3s;
  animation: 0.3s;
  background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 21%, rgba(253,254,255,1) 24%, rgb(113, 191, 255) 100%);

  color: rgb(0, 0, 0) !important;
  animation: girar 2s infinite;
}

</style>