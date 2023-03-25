
<script setup>

import { ref, defineProps } from "vue";

const props = defineProps({
  cardData: Array,
  openDialog: Function,
});

</script>



<template>

<q-card class="my-card  col-12 q-mx-md">
                  <q-card-section style="padding: 3px;" >
                    <q-list v-for="element in cardData" :key="element" >
                      <q-item class=" q-pa-none q-ma-none q-my-lg" dense>
                        <q-item-section class="col-2 text-h4 text-center justify-center flex items-center ">
                          <q-icon :name="element.icon" />
                        </q-item-section>
                        <q-item-section class=" row flex">
                          <div class="col-12  items-center flex">
                            <span class="text-h6">{{ element.value }}</span>
                          </div>
                        </q-item-section>
                      </q-item>

                    </q-list>
                    <div class="row q-my-sm">
                      <div class="col-12 justify-center flex q-mt-md q-mb-sm">
                        <q-btn class="q-mr-md btnEditar"  @click="openDialog(true)" label="Editar"  color="primary" push>
                          <q-icon name="edit" class="q-pl-xs " size="15px" />
                        </q-btn>
                      </div>
                    </div>

                  </q-card-section>
                </q-card>
</template>

<style>
.btnEditar {
  padding: 0px 20px;
  font-size: 18px;
}

</style>