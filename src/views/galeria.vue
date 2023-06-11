<script setup>
import navbar from '../components/navbar.vue'
import navend from '../components/navend.vue'
</script>

<template>
    <div>
        <navbar />
    
        <header class="headerBg_4">
            <div class="imgWrapper">
                <img src="../assets/img/bgs/galeria.jpg" alt="">
            </div>
            <div class="bgGrafico"></div>
            
            <div class="container">
                <div class="row">
                <div class="col-lg-12">
                    <h1 class="tituloHeader">Galería</h1>
                </div>
                </div>
            </div>
            <img src="../assets/img/divider/bottomRight.svg" alt="" class="bRightDivider" />
        </header>

        <main class="mExtra">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <p class="subtitulo">Selecciona un deporte</p>
                        <div class="scrollList">
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off">
                                <label class="btn depItem" for="option1">Radio</label>
                            </div>

                            
                        </div>
                    </div>
                    <div class="col-md-9">
                        
                    </div>
                </div>
            </div>
        </main>

        <navend />
    </div>
</template>