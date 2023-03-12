<script setup>
import { ref,computed } from 'vue'
import { useQuasar } from 'quasar'


const multiSelect = ref(false)

let cardData = [
  {
    value: 200000,
    icon: "🏆"
  },
  {
    value: 5000,
    icon: "$"
  },
  {
    value: 'Loteria de Boyaca-Sabado',
    icon: "🏦"
  },
  {
    value: '5/5/2023',
    icon: "🗓️"
  }
]

let buttonData = [
  {
    value: 'Listar Tus Voletas',
    icon: "las la-filter"
  },
  {
    value: 'Personalizar Talonario Web',
    icon: "las la-magic"

  },
  {
    value: 'Generar Archivo De Datos',
    icon: "las la-download"
  }
]




const selectedButtons = ref([])
    const reservationName = ref('')
    const showReservationDialog = ref(false)

    const buttons = computed(() => {
      const buttons = []
      for (let i = 0; i <= 100; i++) {
        buttons.push(i.toString())
      }
      return buttons
    })


    const isSelected = (button) => {
      return selectedButtons.value.includes(button)
    }

    const selectButton = (button) => {
      if (!multiSelect.value) {
        selectedButtons.value = [button]
      } else if (isSelected(button)) {
        selectedButtons.value = selectedButtons.value.filter(b => b !== button)
      } else {
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
      <!-- Header -->
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="home" class="q-mr-sm" />
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-toolbar-title>Quasar Framework</q-toolbar-title>

          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>
      </q-header>

      <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>
      </q-footer>



      <!-- Contenido de la pagina -->
      <q-page-container>
        <q-page class="row q-pt-sm q-pq-none q-ma-none">

          <div class="col-12">

            <!-- Arnulfo -->
            <div class="row justify-around">
              <div class="col-5">
                <q-card class="my-card">
                  <q-card-section class="" style="padding: 3px;">
                    <q-list  v-for="element in cardData" :key="element">
                      <q-item class=" q-pa-none q-ma-none item" dense>
                        <q-item-section avatar class="bg-blue" >
                          <q-icon :name="element.icon" />
                        </q-item-section>

                        <q-item-section class="bg-red ">
                          <p v-text="element.value"></p>
                        </q-item-section>
                      </q-item>

                    </q-list>
                    <q-btn dense label="Editar" size="sm" color="primary"  push>
                      <q-icon name="edit" class="q-pl-xs" size="10px" />
                    </q-btn>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-4">
                <q-card class="my-card">
                  <q-card-section>
                    <div class="row">
                      <div class="col-10">
                        <div class="row">
                          <q-btn label="Estado" color="primary" rounded />
                        </div>
                        
                        <template v-for="element in buttonData" :key="element">
                          <q-btn color="primary" rounded class="">
                            <div class="row icono">
                              <div class="col-3 bg-red">
                                <q-icon :name="element.icon" />
                              </div>
                              <div class="col-9">
                                {{ element.value }}
                              </div>
                            </div>

                            <q-tooltip v-text="element.value" />
                          </q-btn>
                        </template>
                      </div>
                    </div>
                    
                  </q-card-section>
                </q-card>
              </div>
            </div>





            <!-- Jorge -->
            <div class="row justify-center flex q-mt-lg">
              <div class="col-8">
                <div class="row ">
                  <div class="col-12 text-center text-subtitle1 text-weight-bolder">
                    Toca las boletas
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 justify-end flex q-my-sm">
                    <div class="bg-blue-2 q-pr-md q-pl-sm rounded-borders">
                      <q-checkbox keep-color color="orange" v-model="multiSelect" label="Selección múltiple" />
                    </div>
                  </div>
                </div>
                <div class="row justify-center flex ">
                  <div class="col-10 ">
                    <q-card-section class="d-flex ">
                      <div class="row ">
                        <div class="col-12 ">
                          <div class="flex justify-center container-botones q-py-xs">
                            <q-btn size="12px" v-for="button in buttons" :key="button" class="q-mr-xs q-mb-xs btnBalotas" :label="button > 9 ? button : '0' + button"  round @click="selectButton(button)"  :class="isSelected(button) ? 'btn-active' : ''">
                              <q-badge v-if="isSelected(button)" color="green" dense floating rounded >
                                <q-icon name="check" size="10px" />
                              </q-badge>
                            </q-btn>
                          </div>
                        </div>
                      </div>
                    </q-card-section>

                  </div>



                </div>
              </div>
            </div>



          </div>


        </q-page>
      </q-page-container>


      <q-dialog v-model="showReservationDialog">
      <q-card>
        <q-card-section>
          <q-input v-model="reservationName" label="Nombre de la reserva" />
        </q-card-section>
        <q-card-actions >
          <q-btn color="primary" label="Reservar" @click="reserveButtons" />
          <q-btn color="negative" label="Cancelar" @click="showReservationDialog = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>



      <!-- Dialogo -->
      <q-dialog v-model="card">
      <q-card class="my-card">
        <q-card-section>


          <div class="row no-wrap items-center">
            <div class="col-12 text-center text-h6 ellipsis">
              Reservar boleta
            </div>
          </div>

        </q-card-section>

        <q-card-section class="q-pt-none">
            <q-input bottom-slots v-model="text" label="Label"  :dense="dense">
              <template v-slot:before>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                </q-avatar>
              </template>

              <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                Field hint
              </template>

      
          </q-input>



          <q-input filled bottom-slots v-model="text" label="Label" counter :dense="dense">
            <template v-slot:prepend>
              <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar5.jpg">
              </q-avatar>
            </template>

          </q-input>
          <q-input
            filled
            v-model="phone"
            label="Phone"
            mask="(###) ### - ####"
          />
          <q-input v-model="date" filled type="date" hint="Native date" />
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Cerrar" />
          <q-btn v-close-popup flat color="primary" label="Guardar" />
        </q-card-actions>
      </q-card>
    </q-dialog>



    </q-layout>
  </div>
</template>


<style scoped>
.item{
  border: 1px solid #ccc;
}
.icono{
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-botones{
  background: #e4e4e4;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0.1px rgba(0, 0, 0, 0.363);
}
.btnBalotas{
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgb(216, 240, 255) 12%,rgba(220, 241, 255, 0.753) 85%, rgba(232,234,235,1) 100%);
  color: rgb(255, 93, 93) !important;



}
.btnBalotas:hover{
  transition: 0.3s;
  animation: 0.3s;
  background: rgb(205, 245, 255) !important;
  color: rgb(255, 93, 93) !important;
  animation: girar 2s infinite;
}
.btn-active{
  background: blue !important;
  color: rgb(255, 93, 93) !important;
}




</style>