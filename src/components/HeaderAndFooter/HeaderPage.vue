

<template>
    <q-header elevated class="colorHeader">
        <q-toolbar>
          <div class="row full-width q-py-sm justify-center flex">
            <div class="col-11 text-center ">
              <q-toolbar-title class="text-h3 retro">TALONARIO</q-toolbar-title>
            </div>
          </div>
  
        </q-toolbar>
      </q-header>
</template>

<style>
.colorHeader{
    background-color: #2578cf;
    color: #fff;
}

.retro{
    background:linear-gradient( #0a2472 0%, #0e6ba8 50%, #a6e1fa 100%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 600;
    -webkit-text-stroke: 1px rgb(255, 255, 255);
    animation: sombra 4s infinite;
    -webkit-animation: sombra 4s infinite;
    }
    
    @keyframes sombra {
        0% {
            filter: drop-shadow(5px 5px 10px rgb(0, 0, 0));
            -webkit-filter: drop-shadow(5px 5px 10px rgb(0, 0, 0));
        }
    
        50% {
            filter: drop-shadow(5px 5px 10px #a6e1fa);
            -webkit-filter: drop-shadow(5px 5px 10px #a6e1fa);
}
    
        100% {
            filter: drop-shadow(5px 5px 10px rgb(0, 0, 0));
            -webkit-filter: drop-shadow(5px 5px 10px rgb(0, 0, 0));
        }
    }

</style> 