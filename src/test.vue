<template>
  <q-card>
    <q-card-section>
      <div class="row q-gutter-x-md">
        <div class="col-auto">
          <q-checkbox v-model="multiSelect" label="Selección múltiple" />
        </div>
        <div class="col">

          <q-btn v-show="selectedButtons.length > 1" color="primary" label="Reservar"  @click="showReservationDialog = true" />
        </div>
      </div>
    </q-card-section>
    <q-card-section class="d-flex">
  <div class="row">
    <div class="col-12">
      <div class="d-flex flex-wrap justify-center">
        <q-btn v-for="button in buttons" :key="button" class="q-mr-xs q-mb-xs" :label="button > 9 ? button : '0' + button"  round @click="selectButton(button)"  :color="isSelected(button) ? 'primary' : 'orange'">
          <q-badge v-if="isSelected(button)" color="green" dense floating rounded >
            <q-icon name="check" size="10px" />
          </q-badge>
        </q-btn>
      </div>
    </div>
  </div>
</q-card-section>
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
  </q-card>
</template>

<script setup>
import { ref, computed } from 'vue'



    const selectedButtons = ref([])
    const multiSelect = ref(false)
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