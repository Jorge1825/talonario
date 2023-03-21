
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
                      <q-item class=" q-pa-none q-ma-none q-mt-md" dense>
                        <q-item-section class="col-2 text-h5 text-center justify-center flex items-center ">
                          <q-icon :name="element.icon" />
                        </q-item-section>
                        <q-item-section class=" row flex">
                          <div class="col-12  items-center flex">
                            <span class="text-subtitle2">{{ element.value }}</span>
                          </div>
                        </q-item-section>
                      </q-item>

                    </q-list>
                    <div class="row">
                      <div class="col-12 justify-center flex q-mt-md q-mb-sm ">
                        <q-btn class="q-mr-md"  @click="openDialog(true)" label="Editar" size="md" color="primary" push>
                          <q-icon name="edit" class="q-pl-xs" size="10px" />
                        </q-btn>
                      </div>
                    </div>

                  </q-card-section>
                </q-card>
</template>