<script setup>
import { ref } from 'vue'


//componentes
import HeaderPage from './components/Header.vue'
import FooterPage from './components/Footerpage.vue'
import SiderBar from './components/Sidebar.vue'


</script>

<template>
    
        <SiderBar />


    <section class="home ">
        <div class="">
            <div class="navPage">
                <HeaderPage />
            </div>

            <div class="main">
                
            </div>

            <div class="piePagina">
                <FooterPage />
            </div>
        </div>
    </section>
</template>


<style scoped>
.navPage {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
}

.main {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
}

.piePagina {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

</style>


