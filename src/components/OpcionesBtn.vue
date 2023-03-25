<script setup>
import {ref,defineProps} from 'vue'
import {useQuasar} from 'quasar'

import DialogEstadisticas from './Dialogs/DialogEstadisticas.vue'



const props = defineProps({
    buttonData: Array,
})
const $q = useQuasar()

const showStadistics = ref(false)



function share () {
      $q.bottomSheet({
        message: 'Compartir con:',
        grid : true,
        actions: [
          {
            label: 'Drive',
            img: 'https://cdn.quasar.dev/img/logo_drive_128px.png',
            id: 'drive'
          },
          {
            label: 'Keep',
            img: 'https://cdn.quasar.dev/img/logo_keep_128px.png',
            id: 'keep'
          },
          {
            label: 'Google Hangouts',
            img: 'https://cdn.quasar.dev/img/logo_hangouts_128px.png',
            id: 'calendar'
          },

          {
            label: 'link',
            icon: 'link',
            id: 'link'
          },
          {
            label: 'Share',
            icon: 'share',
            id: 'share'
          },
          {
            label: 'Upload',
            icon: 'cloud_upload',
            color: 'primary',
            id: 'upload'
          },
          {
            label: 'Alex',
            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
            id: 'john'
          }
        ]
      }).onOk(action => {
        // console.log('Action chosen:', action.id)
      }).onCancel(() => {
        // console.log('Dismissed')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

</script>

<template>

    <q-card class="my-card col-10  q-mx-md q-py-xs">
                  <q-card-section>
                    <div class="row justify-center q-pb-xs">
                      <div class="col-12 col-md-12 col-lg-8   justify-center flex">
       
                          <div class="row flex q-mt-xs full-width">
                          <q-btn class="full-width btnEstado q-py-sm q-mb-sm " label="Estado" color="purple-7" />
                        </div>


                        <template v-for="element in buttonData" :key="element">
                          <q-btn  color="primary"  class="full-width btnsOpciones q-py-xs q-my-xs btnRedondo"
                            @click="element.click">
                            <div class="row icono  full-width items-center">
                              <div class="col-2 justify-center flex q-pl-sm full-height">
                                <q-icon :name="element.icon" size="lg" />
                              </div>
                              <div class="col-10  q-pa-none q-ma-none text-subtitle2">
                                {{ element.value }}
                              </div>
                            </div>
                          </q-btn>
                        </template>
                        <div class="row flex q-my-xs full-width justify-center flex q-mt-md">
                          <div class="col-5 col-lg-4 justify-center flex">
                            <q-btn round color="deep-purple-9" icon="query_stats" size="20px"  @click="showStadistics = true"/>
                
                          </div>
                          <div class="col-5 col-lg-4 justify-center flex">
                            <q-btn round color="deep-purple-9" icon="share" size="20px"  @click="share()"/>
                          </div>
                        </div>

                      </div>
                    </div>

                  </q-card-section>
                </q-card>


      <q-dialog v-model="showStadistics">
        <DialogEstadisticas />
      </q-dialog> 
</template>

<style>

.btnsOpciones{
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
}

.btnRedondo {
  border-radius: 10px;
}


.btnEstado{
  padding: 0px;
  font-size: 17px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
}

.icono {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>