<script setup>
import navbar from '../components/navbar.vue'
import carruselHome from '../components/carruselHome.vue'
</script>

<template>
  <navbar />
  <header id="inicio">
    <div class="imgWrapper">
      <img src="../assets/img/bgInicio.jpg" alt="">
    </div>
    <div class="bgGrafico"></div>
    
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-sm-center text-end">
           <img src="../assets/img/titulo.png" alt="" class="d-none d-sm-block img-fluid tituloImg animate__animated animate__animate__slideInLeft">
           <img src="../assets/img/titulosm.png" alt="" class="d-sm-none img-fluid tituloImg ">
        </div>
      </div>
    </div>
    <img src="../assets/img/divider/bottomRight.svg" alt="" class="bRightDivider">
  </header>
  
  <main>
    <carruselHome />
  </main>
</template>

<style scoped lang="scss">

</style>
