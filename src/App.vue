

<script setup>
//importar componenetes 
import HeaderPage from './components/HeaderAndFooter/HeaderPage.vue'
import FooterPage from './components/HeaderAndFooter/FooterPage.vue'
import OpcionesBtn from './components/OpcionesBtn.vue'
import InfoTolanario from './components/InfoTolanario.vue'
import Boletas from './components/Boletas.vue'
import DialogColor from './components/Dialogs/DialogColorPicker.vue'
import DialogEdit from './components/Dialogs/DialogEdit.vue'
import DialogReservarBoleta from './components/Dialogs/DialogReserva.vue'

import ListarBoletas from './components/Dialogs/ListBoletas.vue'



import { ref, computed } from 'vue'
import { format, useQuasar } from 'quasar'



const multiSelect = ref(false)


//Tabla 
const dataBoletas = ref([

  {
    id: "1223sdgfsdf",
    name: "Andres Arnulfo",
    telefono: "300 000 0000",
    direcion: "Calle 1 # 2 - 3",
    boletas: [
      {
        numero: "1",
        estado: "0"
      },
      {
        numero: "2",
        estado: "1"
      }
    ]
  },

  {
    id: "1223sdgfsf",
    name: "Jorge Luis",
    telefono: "300 000 0001",
    direcion: "Calle 1 # 2 - 3",
    boletas: [
      {
        numero: "6",
        estado: "0"
      },
      {
        numero: "8",
        estado: "1"
      }
    ]
  },
  {
    id: "1223sdgfsf",
    name: "Michael Stiven",
    telefono: "300 000 0200",
    direcion: "Calle 1 # 1 - 1",
    boletas: [
      {
        numero: "13",
        estado: "0"
      },

    ]
  },
  {
    id: "1223sdgfsf",
    name: "Michael Stiven",
    telefono: "300 000 0200",
    direcion: "Calle 1 # 1 - 1",
    boletas: [
      {
        numero: "13",
        estado: "0"
      },

    ]
  },
  {
    id: "1223sdgfsf",
    name: "Michael Stiven",
    telefono: "300 000 0200",
    direcion: "Calle 1 # 1 - 1",
    boletas: [
      {
        numero: "13",
        estado: "0"
      },

    ]
  },
  {
    id: "1223sdgfsf",
    name: "Michael Stiven",
    telefono: "300 000 0200",
    direcion: "Calle 1 # 1 - 1",
    boletas: [
      {
        numero: "13",
        estado: "0"
      },

    ]
  },

])





let cardData = ref([
  {
    label: 'Premio',
    value: '20000',
    icon: "🏆",
  },
  {
    label: 'Valor Boleta',
    value: 500,
    icon: "$"
  },
  {
    label: 'Loteria',
    value: 'Loteria Nueva',
    icon: "🏦",
  },
  {
    label: 'Fecha de Sorteo',
    value: '2023-02-28',
    icon: "🗓️",
  }
]
)


let buttonData = [
  {
    value: 'Listar tus Boletas',
    icon: "las la-filter",
    click: () => {
      listBolestasDialog.value = true
      console.log('Listar tus boletas')
    }
  },
  {
    value: 'Personalizar Talonario Web',
    icon: "las la-magic",
    click: () => {
      displayColorDialog.value = true
      console.log('Personalizar Talonario Web')
    }

  },
  {
    value: 'Generar Archivo de Datos',
    icon: "las la-download",
    click: () => {
      generateFileDialog.value = true
      console.log('Generar Archivo De Datos')
    }
  }
]



/* En editar 
Modal con : 
- MODIFICAR EL VALOR 
- MODIFICAR EL ARTICULO 
- MODIFICAR LOTERIA "SELECT"
- MODIFICAR FECHA DE SORTEO 

*/
let showDialog = ref(false)

function openDialog(activar) {
  showDialog.value = activar
}

function saveData(data,value){
  console.log(data)
  showDialog.value = value
  cardData.value[0].value = data[0]
  cardData.value[1].value = data[1]
  cardData.value[2].value = data[2]
  cardData.value[3].value = data[3]
}



/* LISTAR BOLETAS 
USAR UN https://quasar.dev/vue-components/table#example--grid-style
*/





const selectedButtons = ref([])
const reservationName = ref('')
const listBolestasDialog = ref(false)
const generateFileDialog = ref(false)
const dialogReservar = ref(false)


const buttons = computed(() => {
  const buttonsSimples = []
  for (let i = 0; i <= 99; i++) {
    buttonsSimples.push(i.toString())
    console.log(buttonsSimples)
  }

  const filas = [];
    for (let i = 0; i < buttonsSimples.length; i += 10) {
      filas.push(buttonsSimples.slice(i, i + 10));
      console.log(filas)
    }

  console.log(buttonsSimples)

  return filas
})

// Dividir los botones en filas de tamaño 10


const isSelected = (button) => {
  console.log(selectedButtons.value.includes(button))
  return selectedButtons.value.includes(button)
}

const selectButton = (button) => {
  if (!multiSelect.value) {
    //añaadir el boton a la lista de botones seleccionados si no está seleccionado el modo multiselección
    selectedButtons.value = [button]
    console.log(selectedButtons.value)

    dialogReservar.value = true

  } else if (isSelected(button)) {
    // Eliminamos el botón de la lista de botones seleccionados
    selectedButtons.value = selectedButtons.value.filter(b => b !== button)

  } else {
    // Añadimos el botón a la lista de botones seleccionados
    selectedButtons.value.push(button)
  }
}


const reserveButtons = () => {
  // Aquí puedes hacer lo que necesites con los botones reservados y el nombre de la reserva
  console.log('Botones reservados:', selectedButtons.value)
  console.log('Nombre de la reserva:', reservationName.value)

  // Reiniciamos los valores
  selectedButtons.value = []
  reservationName.value = ''
  showReservationDialog.value = false
}



</script>


<template>
  <div>
    <q-layout view="lHh lpr lFf">

      <HeaderPage />
      

      

 
      <q-page-container>
        <q-page class="row q-pt-sm q-pq-none q-ma-none colorFondo justify-center flex">

          <div class="col-12 q-mt-sm ">
            <div class="row full-height">
              <div class="col-md-3 col-12 flex items-center justify-center">
                <div class=" container-card full-width row justify-center">
                <div class="full-width">
                  <div class="text-center text-uppercase text-h6 q-py-sm">Información</div>
                
                  <InfoTolanario :cardData="cardData" :openDialog="openDialog" />

              </div>
              </div>
              </div>

              <div class="col-md-6 col-8">
               
                <div class="row ">
                  <div class="col-12 text-center text-h5 text-weight-bolder textBoletas">
                    Toca las boletas
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 justify-start flex">
                    
                    <q-btn color="primary" icon="person_add" label="Adquirir" @click="dialogReservar = true" />
                  </div>
                  <div class="col-6 justify-end flex ">
                    <div class=" q-pr-md q-pl-sm rounded-borders" style="background-color: #eef6ff;">
                      <q-checkbox keep-color color="blue" v-model="multiSelect" label="Selección múltiple" />
                    </div>
                  </div>

                </div>
                <div class="row justify-center flex ">
                  <div class="col-12 full-width">
                    <Boletas :buttons="buttons" :isSelected="isSelected" :selectButton="selectButton" />

                  </div>

                </div>
              </div>
           
              <div class="col-md-3 col-4 flex items-center justify-center">
                <div class=" container-card full-width row justify-center">
                <div class="full-width">
                  <div class="full-width">
                  <div class="text-center text-uppercase text-h6 q-py-sm">Acciones</div>
              

              </div>
                <OpcionesBtn :buttonData="buttonData" />
                </div>
                </div>

              </div>
            </div>

          </div>


        </q-page>
      </q-page-container>




      <q-dialog v-model="showDialog">
        <DialogEdit :cardData="cardData" :saveData="saveData" />  
      </q-dialog>

 
      <q-dialog v-model="listBolestasDialog">
          <ListarBoletas :dataBoletas="dataBoletas" />
      </q-dialog>


      <q-dialog v-model="displayColorDialog" persistent>
          <DialogColor />
      </q-dialog>


      <q-dialog v-model="dialogReservar" position="bottom">
          <DialogReservarBoleta />
      </q-dialog>
      



      <FooterPage />

    </q-layout>
  </div>
</template>


<style scoped>
.textBoletas {
  color: #007B84;
  text-shadow: 1px 1px 2px #738dff;
}
.container-card{
  height: 60%;
  background-color: rgba(197, 197, 197, 0.329);
  border-radius: 20px;
  justify-content: center;
  align-items: center;


}

.colorFondo {
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(213, 248, 255, 1) 100%);
}

.infoText {
  align-items: center;
  justify-content: right;
  background-color: #eef6ff;

}


.container-botones {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0.1px rgba(0, 0, 0, 0.363);

}



</style> 