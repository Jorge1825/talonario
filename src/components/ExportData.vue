<script setup>
import { computed, ref } from "vue";
import { dataBoletas } from "../temp/data.js";

const columns = [
  {
    name: "desc",
    label: "NOMBRE",
    align: "center",
    field: "name",
    classes: "q-pa-none q-ma-none",
    headerClasses: "q-pa-none q-ma-none",
  },
  {
    name: "telefono",
    align: "center",
    label: "TELEFONO",
    field: "telefono",
    classes: "q-pa-none q-ma-none",
    headerClasses: "q-pa-none q-ma-none",
  },
  {
    name: "direccion",
    align: "center",
    label: "DIRECCIÓN",
    field: "direccion",
    classes: "q-pa-none q-ma-none",
    headerClasses: "q-pa-none q-ma-none",
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
  },
  {
    name: "TotalPagado",
    align: "center",
    label: "TOTAL PAGADO",
    field: (row) => {
      return (
        row.boletas.filter((boleta) => boleta.estado === "0").length * 10000
      );
    },
    classes: "q-pa-none q-ma-none",
    headerClasses: "q-pa-none q-ma-none",
  },
  {
    name: "TotalNoPagado",
    align: "center",
    label: "DEUDA",
    field: (row) => {
      return (
        row.boletas.filter((boleta) => boleta.estado === "1").length * 10000
      );
    },
    classes: "q-pa-none q-ma-none",
    headerClasses: "q-pa-none q-ma-none",
  },
];

const totalPagadas = computed(() => {
  const boletas = dataBoletas.value.map((item) => item.boletas);
  const numBoletas = boletas.reduce((accumulator, current) => {
    //filtrar las boletas con estado 0 y contar cuantos son para luego pasar la cantidad al acumulador
    return accumulator + current.filter((item) => item.estado === "0").length;
  }, 0);

  return numBoletas * 10000;
});


const totalNoPagadas = computed(() => {
  const boletas = dataBoletas.value.map((item) => item.boletas);
  const numBoletas = boletas.reduce((accumulator, current) => {
    //filtrar las boletas con estado 0 y contar cuantos son para luego pasar la cantidad al acumulador
    return accumulator + current.filter((item) => item.estado === "1").length;
  }, 0);

  return numBoletas * 10000;
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
              <div class="col-12">Fecha del sorteo :</div>
              <div class="col-12">Loteria :</div>
             
          </div>
        </div>
        <div class="col-6 justify-center flex">
            <div class="row">
              <div class="col-12">Ganador :</div>
              <div class="col-12">Premio :</div>
             
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

<style>
.titleTable {
  color: #1380fd;
  font-size: 45px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px #000000;
}

.q-table__top,
thead tr:first-child th {
  /* bg color is important for th; just specify one */
  background-color: #55c1ff;
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 12px;
}
.q-table__middle tbody tr td {
  white-space: normal;
  overflow: visible;
  text-overflow: initial;
  /* text-overflow: ellipsis; para cortar el texto */
}
</style>
