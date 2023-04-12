<template>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid  col-12">

    <a class="navbar-brand ps-3" href="#">
      <img src="../assets/vue.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      <span class="ms-4 navbar-text">SIDEBAR</span>
    </a>

    <a class="navbar-brand text-uppercase navbar-text" href="#">Navbar</a>

    <form class="d-none d-lg-flex" role="search">
      <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search">
      <button class="btn bg-success" type="submit">Search</button>
    </form>

  
  </div>
</nav>
</template>


<script setup>
import { ref } from 'vue'

//composables
import { useUi } from "../composables/useUI.js";

        

    const { getBodyClass, changeBodyClass, getLinkActive, changeLinkActive } = useUi()

</script>



<style>
.navbar{
        background-color: var(--nav-color);
    }

.navbar-text{
    color: var(--nav-color-text);
}
</style>