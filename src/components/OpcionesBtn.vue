<script setup>
import {ref,defineProps} from 'vue'

const props = defineProps({
    buttonData: Array,
})

</script>

<template>

    <q-card class="my-card col-10 q-mx-md">
                  <q-card-section>
                    <div class="row justify-center">
                      <div class="col-12 col-md-8   justify-center flex">
                        <div class="row flex q-my-xs full-width">
                          <q-btn class="full-width btnsOpciones" label="Estado" color="green"  />
                        </div>

                        <template v-for="element in buttonData" :key="element">
                          <q-btn color="primary"  class="full-width btnsOpciones"
                            @click="element.click">
                            <div class="row icono  full-width items-center">
                              <div class="col-2 justify-center flex q-pl-sm full-height">
                                <q-icon :name="element.icon" />
                              </div>
                              <div class="col-10  q-pa-none q-ma-none">
                                {{ element.value }}
                              </div>
                            </div>
                          </q-btn>
                        </template>
                      </div>
                    </div>

                  </q-card-section>
                </q-card>
     
</template>

<style>
.btnsOpciones{
    border-radius: 50px;
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 5px;
    color: white;
}

.icono {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>