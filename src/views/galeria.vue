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
                    <h1 class="tituloHeader">Ejemplo</h1>
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
                                <input type="radio" class="btn-check" name="options" id="aguasabiertas" autocomplete="off">
                                <label class="btn depItem" for="aguasabiertas">Aguas Abiertas</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="ajedrez" autocomplete="off">
                                <label class="btn depItem" for="ajedrez">Ajedrez</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="atletismo" autocomplete="off">
                                <label class="btn depItem" for="atletismo">Atletismo</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="badminton" autocomplete="off">
                                <label class="btn depItem" for="badminton">Bádminton</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="basquetbol" autocomplete="off">
                                <label class="btn depItem" for="basquetbol">Básquetbol</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="basquetbol3" autocomplete="off">
                                <label class="btn depItem" for="basquetbol3">Básquetbol 3x3</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="beisbol" autocomplete="off">
                                <label class="btn depItem" for="beisbol">Béisbol</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="beisbol5" autocomplete="off">
                                <label class="btn depItem" for="beisbol5">Béisbol 5</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="boliche" autocomplete="off">
                                <label class="btn depItem" for="boliche">Boliche</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="boxeo" autocomplete="off">
                                <label class="btn depItem" for="boxeo">Boxeo</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="breaking" autocomplete="off">
                                <label class="btn depItem" for="breaking">Breaking</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="charreria" autocomplete="off">
                                <label class="btn depItem" for="charreria">Charrería</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="ciclismo" autocomplete="off">
                                <label class="btn depItem" for="ciclismo">Ciclismo</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="escaladadep" autocomplete="off">
                                <label class="btn depItem" for="escaladadep">Escalada Deportiva</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="esgrima" autocomplete="off">
                                <label class="btn depItem" for="esgrima">Esgrima</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="fronton" autocomplete="off">
                                <label class="btn depItem" for="fronton">Frontón</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="futbolasoc" autocomplete="off">
                                <label class="btn depItem" for="futbolasoc">Fútbol Asociación</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="gimnasiafem" autocomplete="off">
                                <label class="btn depItem" for="gimnasiafem">Gimnasia Artística Femenil</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="gimnasiavar" autocomplete="off">
                                <label class="btn depItem" for="gimnasiavar">Gimnasia Artística Varonil</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="gimnasiaritmica" autocomplete="off">
                                <label class="btn depItem" for="gimnasiaritmica">Gimnasia Rítmica</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="gimnasiatrampolin" autocomplete="off">
                                <label class="btn depItem" for="gimnasiatrampolin">Gimnasia Trampolín</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="golf" autocomplete="off">
                                <label class="btn depItem" for="golf">Golf</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="handball" autocomplete="off">
                                <label class="btn depItem" for="handball">Handball</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="hockey" autocomplete="off">
                                <label class="btn depItem" for="hockey">Hockey sobre pasto</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="judo" autocomplete="off">
                                <label class="btn depItem" for="judo">Judo</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="karate" autocomplete="off">
                                <label class="btn depItem" for="karate">Karate</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="levantamientos" autocomplete="off">
                                <label class="btn depItem" for="levantamientos">Levantamientos de Pesa</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="luchasasoc" autocomplete="off">
                                <label class="btn depItem" for="luchasasoc">Luchas Asociadas</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="natacion" autocomplete="off">
                                <label class="btn depItem" for="natacion">Natación</label>
                            </div>
                            <div class="scrollItem">
                                <input type="radio" class="btn-check" name="options" id="natacionart" autocomplete="off">
                                <label class="btn depItem" for="natacionart">Natación Artística</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9 galeriaContent">
                        <div class="galeriaThumb">
                            <img src="../assets/img/bgs/galeria/bg.png" alt="" class="imgThumb" />
                            <div class="sheer"></div>
                            <div class="infoThumb">
                                <p class="text">Título corto</p>
                                <p class="fecha">dd/mm/aa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <navend />
    </div>
</template>