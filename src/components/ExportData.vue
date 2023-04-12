<script setup>
import { computed, ref,defineProps } from "vue";
import { dataBoletas } from "../temp/data.js";


const props=defineProps({
  configTalonario:Object,
  actualColor:Object,
})




const columns = [
  {
    name: "desc",
    label: "NOMBRE",
    align: "center",
    field: "name",
    classes: "q-pa-none q-ma-none",
    headerClasses: "q-pa-none q-ma-none",
    headerStyle: `font-size: 12px; background-color: ${ props.actualColor.color_fondo_header } !important; color: ${ props.actualColor.color_title_talonario } !important;`,
  },
  {
    name: "telefono",
    align: "center",
    label: "TELEFONO",
    field: "telefono",
    classes: "q-pa-none q-ma-none",
    headerClasses: "q-pa-none q-ma-none",
    headerStyle: `font-size: 12px; background-color: ${ props.actualColor.color_fondo_header } !important; color: ${ props.actualColor.color_title_talonario } !important;`,
  },
  {
    name: "direccion",
    align: "center",
    label: "DIRECCIÓN",
    field: "direccion",
    classes: "q-pa-none q-ma-none",
    headerClasses: "q-pa-none q-ma-none",
    headerStyle: `font-size: 12px; background-color: ${ props.actualColor.color_fondo_header } !important; color: ${ props.actualColor.color_title_talonario } !important;`,
  },
  {
    name: "boletasPagas",
    align: "center",
    label: "BOLETAS PAGAS",
    field: (row) => {
      return row.boletas
        .filter((boleta) => boleta.estado === "0")
        .map((boleta) => boleta.numero)
        .join(" - ");  
    },
    classes: "q-pa-none q-ma-none",
    headerClasses: "q-pa-none q-ma-none",
    headerStyle: `font-size: 12px; background-color: ${ props.actualColor.color_fondo_header } !important; color: ${ props.actualColor.color_title_talonario } !important;`,
  },
  {
    name: "boletasNoPagas",
    align: "center",
    label: "BOLETAS NO PAGAS",
    field: (row) => {
      return row.boletas
        .filter((boleta) => boleta.estado === "1")
        .map((boleta) => boleta.numero)
        .join(" - ");
    },
    classes: "q-pa-none q-ma-none",
    headerClasses: "q-pa-none q-ma-none",
    headerStyle: `font-size: 12px; background-color: ${ props.actualColor.color_fondo_header } !important; color: ${ props.actualColor.color_title_talonario } !important;`,
  },
  {
    name: "TotalPagado",
    align: "center",
    label: "TOTAL PAGADO",
    field: (row) => {
      return (
        row.boletas.filter((boleta) => boleta.estado === "0").length * props.configTalonario.valorBoleta
      );
    },
    classes: "q-pa-none q-ma-none",
    headerClasses: "q-pa-none q-ma-none",
    headerStyle: `font-size: 12px; background-color: ${ props.actualColor.color_fondo_header } !important; color: ${ props.actualColor.color_title_talonario } !important;`,
  },
  {
    name: "TotalNoPagado",
    align: "center",
    label: "DEUDA",
    field: (row) => {
      return (
        row.boletas.filter((boleta) => boleta.estado === "1").length * props.configTalonario.valorBoleta
      );
    },
    classes: "q-pa-none q-ma-none",
    headerClasses: "q-pa-none q-ma-none",
    headerStyle: `font-size: 12px; background-color: ${ props.actualColor.color_fondo_header } !important; color: ${ props.actualColor.color_title_talonario } !important;`,
  },
];

const totalPagadas = computed(() => {
  const boletas = dataBoletas.value.map((item) => item.boletas);
  const numBoletas = boletas.reduce((accumulator, current) => {
    //filtrar las boletas con estado 0 y contar cuantos son para luego pasar la cantidad al acumulador
    return accumulator + current.filter((item) => item.estado === "0").length;
  }, 0);

  return numBoletas * props.configTalonario.valorBoleta;
});


const totalNoPagadas = computed(() => {
  const boletas = dataBoletas.value.map((item) => item.boletas);
  const numBoletas = boletas.reduce((accumulator, current) => {
    //filtrar las boletas con estado 0 y contar cuantos son para luego pasar la cantidad al acumulador
    return accumulator + current.filter((item) => item.estado === "1").length;
  }, 0);

  return numBoletas * props.configTalonario.valorBoleta;
});




</script>

<template>
  <div class="q-pa-md">
    <div class="row">
      <q-toolbar-title class="col-12 justify-center flex titleTable"
        >TALONARIO</q-toolbar-title
      >
    </div>

    <div class="row">
      <div class="col-12 q-mb-lg q-mt-sm">
        
        <div class="row text-subtitle2">
          <div class="col-6 justify-center flex">
            <div class="row">
              <div class="col-12"><strong>Fecha del sorteo : {{ configTalonario.fechaSorteo }} </strong></div>
              <div class="col-12"><strong>Loteria : {{ configTalonario.loteria }}</strong></div>
             
          </div>
        </div>
        <div class="col-6 justify-center flex">
            <div class="row">
              <div class="col-12"><strong>Ganador : {{ configTalonario.boletaGanadora || '?'}} </strong></div>
              <div class="col-12"><strong>Premio : {{ configTalonario.premio }}</strong></div>
             
          </div>
        </div>
        </div>
      </div>
      <div class="col-12">
        <q-table
          :rows="dataBoletas"
          :columns="columns"
          separator="cell"
          no-data-label="No hay datos"
          class="tableExport"
        >
          <template v-slot:bottom>
            <div class="row  full-width justify-center flex">
              <div class="col-6 text-center">
                <strong>Saldo recaudado ${{ totalPagadas }}</strong>
                
              </div>
              <div class="col-6 text-center" >
                <strong>Saldo Pendiente${{ totalNoPagadas }}</strong>
                
              </div>
            </div>

          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<style scoped>


.titleTable {
  color: v-bind("actualColor.color_fondo_header") !important;
  font-size: 45px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px #000000;
}


.q-table__middle tbody tr td {
  white-space: normal;
  overflow: visible;
  text-overflow: initial;
  /* text-overflow: ellipsis; para cortar el texto */
}
</style>
