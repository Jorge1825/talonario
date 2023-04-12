<script setup>
import { computed } from 'vue'

//componentes
import HeaderPage from './components/Header.vue'
import FooterPage from './components/Footerpage.vue'
import SiderBar from './components/Sidebar.vue'

//composables
import { useUi } from "./composables/useUI.js";

        

const { getUserAuth, changeUserAuth } = useUi()

const userAuth = computed(() => getUserAuth.value)


    


</script>

<template>

    <template v-if="userAuth">
        <SiderBar />


        <section class="home ">
            <div class="">
                <div class="navPage">
                    <HeaderPage />
                </div>

                <div class="main bg-transparent">
                    <div class="ms-3">
                        <router-view />
                    </div>
                </div>

                <div class="piePagina">
                    <FooterPage />
                </div>
            </div>
        </section>
    </template>
    <template v-else>
        <router-view />
    </template>

        


    
    
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


