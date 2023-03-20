<script setup>
import {ref,defineProps} from 'vue'
import {useQuasar} from 'quasar'

const props = defineProps({
    buttonData: Array,
})
const $q = useQuasar()


function share () {
      $q.bottomSheet({
        message: 'Bottom Sheet message',
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
            label: 'Calendar',
            img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png',
            id: 'calendar'
          },
          {},
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

    <q-card class="my-card col-10 q-mx-md">
                  <q-card-section>
                    <div class="row justify-center">
                      <div class="col-12 col-md-8   justify-center flex">
                        <div class="row flex q-mt-xs full-width">
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
                        <div class="row flex q-my-xs full-width justify-center flex">
                          <div class="col-4 justify-center flex">
                            <q-btn round color="blue-10" icon="query_stats" size="16px"  @click="share()"/>
                
                          </div>
                          <div class="col-4 justify-center flex">
                            <q-btn round color="blue-10" icon="share" size="16px"  @click="share()"/>
                          </div>
                        </div>

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