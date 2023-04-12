<template>
    <nav :class="['sidebar', !showSidebar ? 'close' : '']">
   <header>
            <div class="image-text">
                <span class="image">
                    <img src="logo1.png" alt="">
                </span>

                <div class="text logo-text">
                    <span class="name text-uppercase">Inventario</span>
                </div>
            </div>

            <i class='bx bx-chevron-right toggle' @click="showSidebar = !showSidebar"></i>
        </header>

        <div class="menu-bar ">
            <div class="menu">

                <template v-for="(link, index) in links" :key="index">
                    <li class="nav-link" @click="navigateTo(link.url)">
                      <router-link :to="link.url" class="router-link" :class="{'active': getLinkActive === link.url}">
                            <i :class="link.icon"></i>
                            <span class="text nav-text">{{link.name}}</span>
                        </router-link>
                    </li>
                </template>


                

            </div>

            <div class="bottom-content">
                <li class="">
                    <router-link class="router-link " to="/" >
                        <i class='bx bx-log-out icon'></i>
                        <span class="text nav-text">Salir</span>
                    </router-link>
                </li>

                <li class="mode">
                    <div class="sun-moon">
                        <i class='bx bx-moon icon moon'></i>
                        <i class='bx bx-sun icon sun'></i>
                    </div>
                    <span class="mode-text text">{{bodyClass ? 'Oscuro' : 'Claro'}}</span>

                    <div class="toggle-switch" @click="toggleBodyClass">
                        <span class="switch"></span>
                    </div>
                </li>

            </div>
        </div>
    </nav>

</template>


<script setup>
import { ref, computed, onBeforeMount } from 'vue'

import { links } from '../linksRouter.js';

//composables
import { useUi } from "../composables/useUI.js";

        

    const { getBodyClass, changeBodyClass, getLinkActive, changeLinkActive } = useUi()
    let showSidebar = ref(false)
    const bodyClass = computed(() => getBodyClass.value)

    const navigateTo = (link) => {
        changeLinkActive(link)
    }


    onBeforeMount(() => {
        const newClass = bodyClass.value === '' ? '' : 'dark'
        changeBodyClass(newClass)
    })


    function toggleBodyClass() {

    console.log(bodyClass.value)
      const newClass = bodyClass.value === '' ? 'dark' : ''
        changeBodyClass(newClass)
    }

</script>


<style>

/* ===== Sidebar ===== */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 240px;
    padding: 10px 14px;
    background: var(--sidebar-color);
    transition: var(--tran-05);
    z-index: 100;
}

.sidebar.close {
    width: 88px;
}

/* ===== Reusable code - Here ===== */
.sidebar li {
    height: 45px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.sidebar header .image,
.sidebar .icon {
    min-width: 60px;
    border-radius: 6px;
}

.sidebar .icon {
    min-width: 60px;
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.sidebar .text,
.sidebar .icon {
    color: var(--text-color);
    transition: var(--tran-03);
}

.sidebar .text {
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 1;
}

.sidebar.close .text {
    opacity: 0;
}

/* =========================== */

.sidebar header {
    position: relative;
}

.sidebar header .image-text {
    display: flex;
    align-items: center;
}

.sidebar header .logo-text {
    display: flex;
    flex-direction: column;
}

header .image-text .name {
    margin-top: 2px;
    font-size: 18px;
    font-weight: 600;
}


.sidebar header .image {
    display: flex;
    align-items: center;
    justify-content: center;
}

.sidebar header .image img {
    width: 40px;
    border-radius: 6px;
}

.sidebar header .toggle {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    background-color: var(--primary-color);
    color: var(--sidebar-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition: var(--tran-05);
}

body.dark .sidebar header .toggle {
    color: var(--toggle-color);
}

.sidebar.close .toggle {
    transform: translateY(-50%) rotate(0deg);
}

.sidebar .menu {
    margin-top: 40px;
}

.sidebar li .router-link {
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: var(--tran-03);
}

.sidebar li .router-link.active {
    /* mover o trasladar un poco el elemento a la derecha */
    transform: translateX(20px);
    background-color: var(--hover-color);
}

/* mover el elemento i y span a la izquierda */
.sidebar li .router-link.active i{
    transform: translateX(-10px);
}

.sidebar li .router-link:hover {
    background-color: var(--hover-color);
}

.sidebar li .router-link:hover .icon,
.sidebar li .router-link:hover .text {
    color: var(--sidebar-color);
}

.sidebar li .router-link.active .icon,
.sidebar li .router-link.active .text {
    color: var(--text-color-light);
}



body.dark .sidebar li .router-link:hover .icon,
body.dark .sidebar li .router-link:hover .text {
    color: var(--text-color);
}


.sidebar .menu-bar {
    height: calc(100% - 55px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
}

.menu-bar::-webkit-scrollbar {
    display: none;
}

.sidebar .menu-bar .mode {
    border-radius: 6px;
    background-color: var(--primary-color-light);
    position: relative;
    transition: var(--tran-05);
}

.menu-bar .mode .sun-moon {
    height: 50px;
    width: 60px;
}

.mode .sun-moon i {
    position: absolute;
}

.mode .sun-moon i.sun {
    opacity: 0;
}

body.dark .mode .sun-moon i.sun {
    opacity: 1;
}

body.dark .mode .sun-moon i.moon {
    opacity: 0;
}

.menu-bar .bottom-content .toggle-switch {
    position: absolute;
    right: 0;
    height: 100%;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
}

.toggle-switch .switch {
    position: relative;
    height: 22px;
    width: 40px;
    border-radius: 25px;
    background-color: var(--toggle-color);
    transition: var(--tran-05);
}

.switch::before {
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background-color: var(--sidebar-color);
    transition: var(--tran-04);
}

body.dark .switch::before {
    left: 20px;
}

.home {
    position: absolute;
    top: 0;
    left: 240px;
    height: 100vh;
    width: calc(100% - 240px);
    background-color: var(--body-color);
    transition: var(--tran-05);
}

.home .text {
    font-size: 30px;
    font-weight: 500;
    color: var(--text-color);
    padding: 12px 60px;
    transition: var(--tran-05);
}

.sidebar.close~.home {
    left: 78px;
    height: 100vh;
    width: calc(100% - 78px);
}

body.dark .home .text {
    color: var(--text-color);
}</style>