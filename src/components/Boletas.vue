<script setup>

import {ref, defineProps} from "vue";

const props = defineProps({
    multiSelect: Boolean,
    buttons: Array,
    isSelected: Function,
    selectButton: Function,
    dataBoletas: Array,
});



const validateEstado= (btn) => {

  const estado = ref('')
    props.dataBoletas.filter((item) => {
        item.boletas.filter((item) => {
            if (item.numero == btn) {
                item.estado == "0" ? estado.value = '0' : item.estado == "1" ? estado.value = '1' : estado.value = ''
            }
        })
    })

    return estado.value
}




</script>


<template>
    <q-card-section class="row  d-flex q-pa-none" >
                        <div class="col-12 q-px-md boxBoxPelotas color-fondo">
                          <div class="row boxPelotas full-width justify-center ">
                            <template v-for="(fila,index) in buttons" :key="index" >
                              <div class="col-12 justify-between flex q-px-none paqueteBtns">
                                  <q-btn  v-for="button in fila" :key="button"  
                                  class="btnBalotas color-balota" 
                                    :label="button" 
                                    round 
                                    :disable="multiSelect && (validateEstado(button) == '1' || validateEstado(button) == '0')"
                                    @click="selectButton(button)"
                                    :class="{'color-balota-select': isSelected(button), 'color-balota-pagada': validateEstado(button) == '1', 'color-balota-apartada': validateEstado(button) == '0'}">
                                    
                                    <q-badge v-if="isSelected(button)" color="green" dense floating rounded>
                                      <q-icon name="check" size="10px" />
                                    </q-badge>
                                    <q-tooltip class="bg-red"  v-if="validateEstado(button) == '0'" anchor="top middle" self="bottom middle" :offset="[0, 10]">
                                      <div class="text-center">
                                        Por pagar
                                      </div>
                                    </q-tooltip>
                                  </q-btn>
                                </div>
                            </template>
                          </div>
                        </div>
                    
                    </q-card-section>
</template>


<style>
.paqueteBtns{
  padding: 0px 0px;
}

/* pnatallas superiores a 600px */
@media (min-width: 600px) {
  .paqueteBtns{
    padding: 0px 30px;
  }
}

/* .btn-active {
  background: rgb(55, 158, 255) !important;
  color: rgb(255, 255, 255) !important;
} */

.boxPelotas {

max-height: calc(100vh/1.36);
width: auto;
overflow: auto;

scrollbar-color: rgba(0, 0, 0, .5) rgba(0, 0, 0, 0);
scrollbar-width: thin;
border-radius: 10px;
/* background-color: #ecf5ff; */
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
  /* background: rgb(0, 9, 92);  */
  background: rgb(255,255,255);
  color: rgb(255, 255, 255) ;
  border: 1px solid rgb(255, 255, 255) ;
  width: 3.5vw !important;
  margin: 0.04rem 0.03rem;
  font-size: 107%;
}
/* 
.Pagas{
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgb(0, 52, 131) 20%, rgba(115,190,249,1) 100%);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255) ;
  width: 3.5vw !important;

} */

/* .Debe{
  background: rgb(255, 255, 255);
  background: rgb(247, 61, 61);
  color: white;
  border: 1px solid rgb(255, 255, 255) ;
  width: 3.5vw !important;

} */

/* Media  querys de pantallas inferiores a 500px */
 @media screen and (max-width: 500px) {
  .btnBalotas {
    width: 0.5vw !important; 
    margin: 0rem 0.05rem;
    font-size: 80%;
    
  }
  .boxBoxPelotas{
    padding: 0px 0px ;
  }
}

/* Media  querys de pantallas inferiores a 600px y superiores a 500px */
@media screen and (min-width: 500px) and (max-width: 1000px) {
  .btnBalotas {
    width: 7vw !important;
    height: 4vw ;
    margin: 0.04rem 0.03rem;
    font-size: 100%;
  }
  .boxBoxPelotas{
    padding: 0px 0px ;
  }
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