<script setup></script>

<template>
  <q-card style="width: 350px">
    <q-card-section class="row items-center ">
      <div class="col-12 text-Boleta text-center">Boleta 06</div>
      <div class="col-12 justify-center flex items-center">
        <span class="text-subtitle2">Estado:</span>
        <span class="q-ml-md">Pendiente</span>
        <q-btn class="q-ml-md" round color="primary" size="xs" />
      </div>
      <div class="col-12 q-mt-md">
        <q-separator />
      </div>
    </q-card-section>

    <q-card-section class="row items-center q-my-none q-pt-none">
      <q-list class="full-width q-mt-none q-pt-none">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="visibility" />
          </q-item-section>

          <q-item-section>Ver datos del participante</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="restore" />
          </q-item-section>

          <q-item-section>Liberar boleta</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="verified" />
          </q-item-section>

          <q-item-section>Marcar como pagada</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="handshake" />
          </q-item-section>

          <q-item-section>Adquirir boleta</q-item-section>
        </q-item>

      </q-list>
    </q-card-section>
  </q-card>
</template>
<style scoped>
.text-Boleta {
  font-size: 20px;
  font-weight: bold;
}
</style>
