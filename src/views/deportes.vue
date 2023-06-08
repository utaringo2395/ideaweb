<script setup>
import navbar from '../components/navbar.vue'
import navend from '../components/navend.vue'
</script>

<template>
    <navbar />
    
    <header class="headerBg_1">
      <div class="imgWrapper">
        <img src="../assets/img/bgs/deportes.jpg" alt="">
      </div>
      <div class="bgGrafico"></div>
      
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
             <h1 class="tituloHeader">Deportes</h1>
          </div>
        </div>
      </div>
      <img src="../assets/img/divider/bottomRight.svg" alt="" class="bRightDivider">
    </header>
    
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-md-4 mb-5">
            <h3 class="titulo">A</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Aguas Abiertas</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Ajedrez</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Atletismo</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">B</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Bádminton</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Básquetbol</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Básquetbol 3x3</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Béisbol</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Béisbol 5</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Boliche</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Boxeo</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Breaking</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">C</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Charrería</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Ciclismo</router-link>
              </li>
            </ul>
          </div>
          <div class="col-12 d-none d-md-block mt-2 mb-5">
            <hr>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">E</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Escalada Deportiva</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Esgrima</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">F</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Frontón</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Fútbol Asociación</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">G</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Gimnasia Artística Femenil</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Gimnasia Artística Varonil</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Gimnasia Rítmica</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Gimnasia Trampolín</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Golf</router-link>
              </li>
            </ul>
          </div>
          <div class="col-12 d-none d-md-block mt-2 mb-5">
            <hr>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">H</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Handball</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Hockey sobre pasto</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">J</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Judo</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">K</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Karate</router-link>
              </li>
            </ul>
          </div>
          <div class="col-12 d-none d-md-block mt-2 mb-5">
            <hr>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">L</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Levantamiento de Pesa</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Luchas Asociadas</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">N</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Natación</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Natación Artística</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">P</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Patines sobre Ruedas</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Pentatlón Moderno</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Polo Acuático</router-link>
              </li>
            </ul>
          </div>
          <div class="col-12 d-none d-md-block mt-2 mb-5">
            <hr>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">R</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Raquetbol</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Rodeo</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Rugby Siete</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">S</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Softbol</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Squash</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">T</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Tae Kwon Do</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Tenis</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Tenis de Mesa</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Tiro con Arco</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Tiro Deportivo</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Triatlón</router-link>
              </li>
            </ul>
          </div>
          <div class="col-12 d-none d-md-block mt-2 mb-5">
            <hr>
          </div>
          <div class="col-md-4 mb-5">
            <h3 class="titulo">V</h3>
            <ul class="depList">
              <li class="depItem">
                <router-link class="depLink" to="/">Voleibol</router-link>
              </li>
              <li class="depItem">
                <router-link class="depLink" to="/">Voleibol de Playa</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  
    <navend />
  </template>
  
  <style scoped lang="scss">
  
  </style>
  