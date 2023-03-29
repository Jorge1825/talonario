<script setup>
   
import {ref,defineProps, onMounted} from 'vue'
    import {dataBoletas} from '../../temp/data.js'

    const props = defineProps({
      boletaSelect: Array,
      actualColor: Object,
    })

//buscar la info de la boleta seleccionada
const participante = ref([])
const boleta = ref([])

const infoBoleta = () => {
  dataBoletas.value.filter((cliente) => {
    cliente.boletas.filter((item) => {
      if (item.numero == props.boletaSelect[0]) {
        participante.value = cliente
        boleta.value = item
      }
    })
  })
}


const designItems =ref()



onMounted(() => {
  infoBoleta()
  designItems.value = [
  {
  label : 'NOMBRE',
  color_icon : 'amber-10',
  icon : 'account_circle',
  desc : participante.value.name,
  },
  {
  label : 'TELEFONO',
  color_icon : 'red',
  icon : 'phone_iphone',
  desc : participante.value.telefono,
  },
  {
  label : 'DIRECCIÓN',
  color_icon : 'green-6',
  icon : 'home',
  desc : participante.value.direccion,
  },
  {
  label : 'FECHA',
  color_icon : 'light-green-8',
  icon : 'event',
  desc : boleta.value.fecha,
  },
  {
  label : 'ESTADO',
  color_icon : 'indigo-9',
  icon : 'checklist',
  desc : boleta.value.estado == '0' ? 'POR PAGAR' : 'PAGADA',
  },

]
})




</script>

<template>

<q-card class="row my-card justify-center q-pb-lg" style="width: 500px; margin: auto;">
    <q-card-section class="bg-primary full-width text-center text-white  text-h6 q-py-md q-mb-lg">

      <strong>PARTICIPANTE</strong>
      <!-- boton de x para cerrar el dialog -->
      <q-btn
        class="absolute-top-right q-pa-md" 
        round
        dense
        v-close-popup    
        flat
        icon="close"
        color="white"
       style="padding: 10px 12px;"
      />
    
    </q-card-section>
    <div class="col-sm-6 col-12 " v-for="(item, index) in designItems" :key="index">
      <q-item class="q-mx-md ">
          <q-item-section avatar>
            <q-icon :color="item.color_icon" :name="item.icon" size="md"/>
          </q-item-section>

          <q-item-section>
            <q-item-label >{{ item.label }}</q-item-label>
            <q-item-label caption> {{ item.desc }}</q-item-label>
          </q-item-section>
        </q-item>
    </div>

     
    </q-card>
</template>

<style>

</style>