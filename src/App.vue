

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


//Dialog list boletas
const listBolestasDialog = ref(false)
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






//botones de acciones
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
      //validar si colorUser tiene datos
      console.log(Object.keys(colorUser.value).length)
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



//Dialog Editar
let showDialogEdit = ref(false)

function openDialog(activar) {
  showDialogEdit.value = activar
}

function saveData(data,value){
  console.log(data)
  showDialogEdit.value = value
  cardData.value[0].value = data[0]
  cardData.value[1].value = data[1]
  cardData.value[2].value = data[2]
  cardData.value[3].value = data[3]
}


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


//Dialog color
const displayColorDialog = ref(false)

const colorDefault = ref({
  primary: '#1976D2',
  text_light: '#FFFFFF',
  text_dark: '#000000',
  colorFondo: '#FFFFFF',

  color_title_talonario:{
    color1: '#000000',
    color2: '#000000',
    color3: '#000000',
  },

  colorBalota:{
    select: '#000000',
    pagada: '#000000',
    apartada: '#000000',
    ganadora: '#000000',

  },

  btnCircle: '#000000',
  btnSpecial: '#000000',
  colorCard: '#000000',
})

const colorUser = ref({})

function saveColor(data){
  console.log(data)

  colorUser.value = data
  console.log(colorUser.value)
  
  displayColorDialog.value = false
}


//dialog reservar
const reservationName = ref('')
const dialogReservar = ref(false)


//generar archivo
const generateFileDialog = ref(false)



const multiSelect = ref(false)
const selectedButtons = ref([])


// Función que genera los botones y sus filas
const buttons = computed(() => {
  const buttonsSimples = []
  for (let i = 0; i <= 99; i++) {
    buttonsSimples.push(i.toString())
  }

  const filas = [];
    for (let i = 0; i < buttonsSimples.length; i += 10) {
      filas.push(buttonsSimples.slice(i, i + 10));
    }

  

  return filas
})


// Función que comprueba si un botón está seleccionado
const isSelected = (button) => {
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


// Función para reservar las boletas
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

      <q-page-container >
        <q-page class="row q-pq-none q-ma-none colorFondo justify-center flex">

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

              <div class="col-md-6 col-8 ">
               
                <div class="row ">
                  <div class="col-12 text-center text-h5 text-weight-bolder textBoletas">
                    Toca las boletas
                  </div>
                </div>
                <div class="row justify-center flex">
                  <div class="col-5 justify-start flex">
                    
                    <q-btn icon="person_add" label="Adquirir" @click="dialogReservar = true"  :style="{'background-color': colorUser.primary || colorDefault.primary}" />
                  </div>
                  <div class="col-5 justify-end flex ">
                    <div class=" q-pr-md q-pl-sm rounded-borders" style="background-color: #eef6ff;">
                      <q-checkbox keep-color color="blue" v-model="multiSelect" label="Selección múltiple" @click="multiSelect === false ? selectedButtons = [] : ''" />
                    </div>
                  </div>

                </div>
                <div class="row justify-center " >
                  <div class="col-12 full-width q-pt-sm">
                    <Boletas :buttons="buttons" :isSelected="isSelected" :selectButton="selectButton" />

                  </div>

                </div>
              </div>
           
              <div class="col-md-3 col-4 flex items-center justify-center">
                <div class=" container-card full-width row justify-center items-center ">
                <div class="full-width ">
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




      <q-dialog v-model="showDialogEdit">
        <DialogEdit :cardData="cardData" :saveData="saveData" />  
      </q-dialog>

 
      <q-dialog v-model="listBolestasDialog">
          <ListarBoletas :dataBoletas="dataBoletas" />
      </q-dialog>


      
      <q-dialog v-model="displayColorDialog" persistent>
          <!-- <DialogColor :actualColor="actualColor" :saveColor="saveColor" /> -->
          <DialogColor :actualColor="colorDefault" :saveColor="saveColor" />
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
  height: auto;
  background-color: rgba(197, 197, 197, 0.329);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;


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