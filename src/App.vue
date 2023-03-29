<script setup>

import { ref, computed, watch, onBeforeMount } from 'vue'
import { format, useQuasar } from 'quasar'
import html2pdf from 'html2pdf.js'

//data
import {dataBoletas} from '../src/temp/data.js'
import { colorDefault } from './temp/colors'


//importar componenetes 
import HeaderPage from './components/HeaderAndFooter/HeaderPage.vue'
import FooterPage from './components/HeaderAndFooter/FooterPage.vue'
import OpcionesBtn from './components/OpcionesBtn.vue'
import InfoTolanario from './components/InfoTolanario.vue'
import Boletas from './components/Boletas.vue'
import DialogColor from './components/Dialogs/DialogColorPicker.vue'
import DialogEdit from './components/Dialogs/DialogEdit.vue'
import DialogReservarBoleta from './components/Dialogs/DialogReserva.vue'
import DialogAdquirir from './components/Dialogs/DialogAdquirir.vue'
import DialogConfig from './components/Dialogs/DialogConfigInitial.vue'
import ListarBoletas from './components/Dialogs/ListBoletas.vue'
import ExportData from './components/ExportData.vue'

const $q = useQuasar()

const fecha = new Date().toISOString().slice(0, 10)
    //reemplazar los - por /
    const fechaFormateada = fecha.replace(/-/g, "/")

const configTalonario = ref({
  balotas: 0,
  premio: "0",
  valorBoleta: 0,
  loteria: '?',
  fechaSorteo: fechaFormateada,
  boletaGanadora: null,
})

const showDialogConfig = ref(false)

//mostrar el dialogo de editar antes de montar el componente
onBeforeMount(() => {
  showDialogConfig.value = true


})

const saveConfig = (data) =>{
  console.log(data)
  //numBoletas = '0 - 99'

  const numberoletas = parseInt(data.numBoletas.split('-')[1])
  console.log(numberoletas)


  configTalonario.value = {
    balotas: numberoletas,
    premio: data.premio,
    valorBoleta: data.valorBoleta,
    loteria: data.loteria,
    fechaSorteo: data.fecha,
    boletaGanadora: null,
  }

  console.log(configTalonario.value)
 
  cardData.value[0].value = data.premio
  cardData.value[1].value = data.valorBoleta
  cardData.value[2].value = data.loteria
  cardData.value[3].value = data.fecha

showDialogConfig.value = false


}


const cardData = ref([
  {
    label: 'Premio',
    value: configTalonario.value.premio,
    icon: "🏆",
  },
  {
    label: 'Valor Boleta',
    value: configTalonario.value.valorBoleta,
    icon: "$"
  },
  {
    label: 'Loteria',
    value: configTalonario.value.loteria,
    icon: "🏦",
  },
  {
    label: 'Fecha de Sorteo',
    value: configTalonario.value.fechaSorteo,
    icon: "🗓️",
  }
]
)








//Dialog list boletas
const listBolestasDialog = ref(false)


//botones de acciones
let buttonData = [
  {
    value: 'Listar tus Boletas',
    icon: "las la-filter",
    click: () => {
      listBolestasDialog.value = true

    }
  },
  {
    value: 'Personalizar Talonario Web',
    icon: "las la-magic",
    click: () => {
      displayColorDialog.value = true

    }

  },
  {
    value: 'Generar Archivo de Datos',
    icon: "las la-download",
    click: () => {
      generateFile()
  
    }
  }
]



//Dialog Editar
let showDialogEdit = ref(false)

function openDialog(activar) {
  showDialogEdit.value = activar
}

//guardar los datos del dialog editar
function saveData(data,value){

  showDialogEdit.value = value
  cardData.value[0].value = data[0]
  cardData.value[1].value = data[1]
  cardData.value[2].value = data[2]
  cardData.value[3].value = data[3]

  configTalonario.value.premio = data[0]
  configTalonario.value.valorBoleta = data[1]
  configTalonario.value.loteria = data[2]
  configTalonario.value.fechaSorteo = data[3]


}


//Dialog color
const displayColorDialog = ref(false)


const actual = ref(colorDefault.value)
const actualColor = ref(colorDefault.value)

const colorUser = ref({})

//funcion que guarda el color seleccionados por el usuario
function saveColor(data){

  colorUser.value = data
  actualColor.value = data
  actual.value = data



  displayColorDialog.value = false
}


// Función que genera los botones y sus filas
const buttons = computed(() => {
  const buttonsSimples = []
  for (let i = 0; i <= configTalonario.value.balotas; i++) {
    buttonsSimples.push(i.toString().padStart(2, '0')) //padStart rellena con ceros a la izquierda en caso de que el numero sea menor a 2 digitos
  }

  const filas = [];
    for (let i = 0; i < buttonsSimples.length; i += 10) {
      filas.push(buttonsSimples.slice(i, i + 10));
    }

  return filas
})


//dialog reservar
const reservationName = ref('')
const dialogReservar = ref(false)
const dialogReservarMulti = ref(false)
const multiSelect = ref(false)
const selectedButtons = ref([])


// Función que comprueba si un botón está seleccionado
const isSelected = (button) => {
  return selectedButtons.value.includes(button)
}


const selectButton = (button) => {
  if (!multiSelect.value) {
    //añaadir el boton a la lista de botones seleccionados si no está seleccionado el modo multiselección
    selectedButtons.value = [button]

    dialogReservar.value = true

  } else if (isSelected(button)) {
    // Eliminamos el botón de la lista de botones seleccionados
    selectedButtons.value = selectedButtons.value.filter(b => b !== button)

  } else {
    // Añadimos el botón a la lista de botones seleccionados
    selectedButtons.value.push(button)
  }
}


//escuhar los dialogos para limpiar los datos
watch(dialogReservar, (value) => {
  if(!value){
  selectedButtons.value = []
  reservationName.value = ''
  }
})


watch(dialogReservarMulti, (value) => {
  if(!value){
  selectedButtons.value = []
  reservationName.value = ''
  }
})



// Función para reservar las boletas
const reserveBoleta = (data) => {
 

  const {
    pagar,
    nombre,
    telefono,
    direccion,
    } = data

  //buscar en dataBoletas si el telefono ya existe y capturar el indice
  let indexExist = dataBoletas.value.findIndex((item) => item.telefono === telefono)

  //crear el objeto para cada uno de los botones selecionados 
  let boletas = selectedButtons.value.map((item) => {
    return {
      numero: item.toString(),
      estado: pagar.toString(),
      fecha: new Date().toLocaleString(),
    }
  })


  //si existe entonces añadir las nuevas boletas a las ya existentes
  if(indexExist !== -1){
    //añadir las boletas al array de boletas si el telefono ya existe
    dataBoletas.value[indexExist].boletas.push(...boletas) //con el ... se añaden los elementos del array y no el array completo
    let nameClient = dataBoletas.value[indexExist].name

    $q.notify({
          type: 'positive',
          message: 'Se agregaron las boletas a '+ nameClient,
          position: 'top',
        })

  }else{
    //si no existe entonces crear un nuevo objeto
    dataBoletas.value.push({
      name: nombre,
      telefono: telefono,
      direccion: direccion,
      boletas: boletas,
    })

    $q.notify({
          type: 'positive',
          message: 'Se reservaron las boletas',
          position: 'top',
        })

  }

  //limpiar los datos
  dialogReservar.value = false
  dialogReservarMulti.value = false
  multiSelect.value = false

}





//generar archivo
async function generateFile(){
  const notif = $q.notify({
          type: 'ongoing',
          message: 'Generando pdf...',
          position: 'top'
        })

  const tableExport = document.getElementById('exportFile');
  const options = {
    margin: 0.5,
    filename: 'talonario.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 3 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
  }
  
        
  await html2pdf().from(tableExport).set(options).save();

  notif({
        type: 'positive',
        message: 'Tu archivo se ha generado correctamente',
        timeout: 1000,
        position: 'top'
        })
        


}








</script>


<template>
    <q-layout view="lHh lpr lFf">

      <HeaderPage />

      <q-page-container >
        <q-page class="row q-pq-none q-ma-none color-fondo justify-center flex">

          <div class="col-12 ">
            <div class="row full-height ">
              <div class="col-md-3 col-sm-6 col-12 flex items-center justify-center q-px-md">
                <div class=" container-card full-width row justify-center">
                  <div class="full-width">
                    <template v-if=" $q.screen.lt.md">
                      <div class="text-center text-uppercase text-h5 text-dark q-pb-sm">Información</div>
                    </template>
                    <template v-if="$q.screen.gt.sm">
                      <div class="text-center text-uppercase text-h5 text-dark q-pb-md">Información</div>
                    </template>
                    <InfoTolanario :cardData="cardData" :openDialog="openDialog" />
                  </div>
                </div>
              </div>
              <!-- Mostrar si solo la pantalla es mayor a xs -->
              <template v-if=" $q.screen.lt.md">
                <div class="col-md-3 col-sm-6 col-12 flex items-center justify-center q-px-md">
                  <div class="container-card full-width row justify-center items-center ">
                    <div class="full-width ">
                      <div class="full-width ">
                        <div class="text-center text-uppercase text-dark text-h5 q-pb-sm">Acciones</div>
                      </div>
                      <OpcionesBtn :actualColor="actualColor" :buttonData="buttonData" :configTalonario="configTalonario"/>
                    </div>
                  </div>
                </div>
              </template>

              <div class="col-md-6 col-12  items-center  flex ">
                <div class="row ">
  
                  <div class="row justify-center  col-12 q-mb-sm">
                    <div class="col-5 justify-start flex items-center">
                      <q-btn class="color-btn text-white" v-if="selectedButtons.length > 1" icon="person_add" label="Adquirir" @click="dialogReservarMulti = true" />
                    </div>
                    <div class="col-5 justify-end flex items-center">
                      <div class=" q-pr-md q-pl-sm q-py-none color-fondo rounded-borders">
                        <q-checkbox size="lg"  keep-color color="purple-7" v-model="multiSelect" label="Selección múltiple" @click="multiSelect === false ? selectedButtons = [] : ''" />
                      </div>
                    </div>
                  </div>
                  <div class="row justify-center  items-center" >
                    <div class="col-12 flex full-width  ">
                      <Boletas :multiSelect="multiSelect" :buttons="buttons" :isSelected="isSelected" :selectButton="selectButton" :dataBoletas="dataBoletas" :colorUser="actualColor" />
                    </div>
                  </div>
                </div>
              </div>
           
              <div class="col-md-3 col-4 flex items-center justify-center q-px-md">
                <div class="container-card full-width row justify-center items-center ">
                  <template v-if="$q.screen.gt.sm">
                    <div class="full-width ">
                      <div class="full-width">
                        <div class="text-center text-uppercase text-h5 text-dark q-pb-sm">Acciones</div>
                      </div>
                
                      <OpcionesBtn :actualColor="actualColor" :buttonData="buttonData" :configTalonario="configTalonario"/>
                    </div>
                  </template>
                </div>

              </div>
            </div>

          </div>

        </q-page>
      </q-page-container>



      <!-- Editar info del talonario -->
      <q-dialog v-model="showDialogEdit">
        <DialogEdit :actualColor="actualColor" :cardData="cardData" :saveData="saveData" />  
      </q-dialog>

 
      <!-- Listar las boletas -->
      <q-dialog v-model="listBolestasDialog">
          <ListarBoletas  :actualColor="actualColor" :dataBoletas="dataBoletas" />
      </q-dialog>


      
      <q-dialog v-model="displayColorDialog" persistent>
        <DialogColor :actualColor="actualColor" :colorDefault="colorDefault" :saveColor="saveColor" />
      </q-dialog>


      <!-- Dialogo para reservar boletas -->
      <q-dialog v-model="dialogReservar" position="bottom">
          <DialogReservarBoleta v-if="!multiSelect" :dataBoletas="dataBoletas"  :boletaSelect="selectedButtons" :reserveBoleta="reserveBoleta"  :actualColor="actualColor" />
      </q-dialog>

      <!-- Dialogo para multples boletas -->
      <q-dialog v-model="dialogReservarMulti" position="standard">
          <DialogAdquirir v-if="multiSelect" :actualColor="actualColor" :boletaSelect="selectedButtons" :reserveBoleta="reserveBoleta" />
      </q-dialog>

      <!-- Dialogo de configuración inicial -->
      <q-dialog v-model="showDialogConfig" persistent>
        <DialogConfig :actualColor="actualColor" :saveConfig="saveConfig" />
      </q-dialog>


      <!-- Exportar el archivo -->
      <div hidden>
        <ExportData id="exportFile" :configTalonario="configTalonario" />
      </div>

      <FooterPage />

    </q-layout>
</template>


<style >


.container-card{
  height: auto;
  background-color: rgba(182, 182, 182, 0.329); 
  
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;
}


.color-fondo {

  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, v-bind("actualColor.color_fondo") 100%);
}

.color-title{
  color: v-bind("actualColor.color_title_talonario")
}

.color-header{
  background-color: v-bind("actualColor.color_fondo_header");
}

.color-btn{
  background-color: v-bind("actualColor.color_btn");
}

.color-balota{
  background: v-bind("actualColor.color_balota.normal");
}

.color-balota-select{
  background: v-bind("actualColor.color_balota.select")
}

.color-balota-pagada{
  background: v-bind("actualColor.color_balota.pagada")
}

.color-balota-apartada{
  background: v-bind("actualColor.color_balota.apartada")
}

/* .bg-card{
  background-color: v-bind("actualColor.color_card")
} */


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