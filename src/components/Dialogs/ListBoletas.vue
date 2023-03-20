<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  dataBoletas: Array,
});

const pagination = ref({
        rowsPerPage: 6,
      })

const filter = ref("");


const columns = [
  {
    name: "name",
    required: true,
    label: "Nombre",
    align: "left",
    field: (row) => row.name,
    sortable: true,
    style: "margin : 0; padding: 0",
  },
  {
    name: "telefono",
    required: true,
    label: "Telefono",
    align: "left",
    field: (row) => row.telefono,
    sortable: true,
    style: "margin : 0; padding: 0",
  },
  {
    name: "direcion",
    required: true,
    label: "Direcion",
    align: "left",
    field: (row) => row.direcion,
    sortable: true,
    style: "margin : 0; padding: 0",
  },
  {
    name: "boletas",
    required: true,
    label: "Boletas",
    align: "left",
    //mostrar todos los numeros de las boletas almacenados en el array y concatenado un - para separarlos
    field: (row) => row.boletas.map((item) => item.numero).join(" - "),
    sortable: true,
    style: "margin : 0; padding: 0",
  },
];


</script>

<template>
  <q-card class="my-card " style="width: 700px; max-width: 80vw">
    <q-card-section style="padding: 0px;">
      <div >
        <q-table
          grid
          title="LISTADO DE BOLETAS"
          :rows="dataBoletas"
          :columns="columns"
          row-key="name"
          :filter="filter"
          hide-header
          v-model:pagination="pagination"
          :rows-per-page-options="[0]"
          no-data-label="No hay datos para mostrar"
          no-results-label="El cliente no existe"
        >

          <template v-slot:top-right>
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              rounded outlined
              label="Buscar"
              bg-color="white"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>
      </div>
    </q-card-section>


    <q-separator />

    <q-card-actions align="center" >
      <q-btn v-close-popup rounded  color="primary" label="Cerrar" />
    </q-card-actions>
  </q-card>
</template>


<style>
.q-table__top,
  thead tr:first-child th{
    /* bg color is important for th; just specify one */
    background-color: rgb(4, 155, 255);
    color: rgb(255, 255, 255);
  }


</style>