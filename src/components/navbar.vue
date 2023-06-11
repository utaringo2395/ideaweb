<template>
    <div>
        <div class="container">
            <div class="col-lg-12">
                <nav class="navbar navbarRuta navbar-expand-lg fixed-top" ref="headRef">
                    <div class="container">
                        <router-link class="navbar-brand" to="/" ref="headRef">
                            <!--<img src="../assets/img/logoBlanco.svg" alt="logotipo soluciones" />-->
                        </router-link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item my-auto">
                                    <router-link class="nav-link active" to="/">Inicio</router-link>
                                </li>
                                <li class="nav-item my-auto">
                                    <router-link class="nav-link" to="/deportes">Deportes</router-link>
                                </li>
                                <li class="nav-item my-auto">
                                    <router-link class="nav-link" to="/">Deportes Adaptados</router-link>
                                </li>
                                <li class="nav-item my-auto">
                                    <router-link class="nav-link" to="/galeria">Galería</router-link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Eventos
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="my-2">
                                            <router-link class="dropdown-item" to="/">Nacionales</router-link>
                                        </li>
                                        <li class="my-2">
                                            <router-link class="dropdown-item" to="/">Internacionales</router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item my-auto">
                                    <a class="nav-link" href="#">Prensa</a>
                                </li>
                                <li class="nav-item my-auto">
                                    <a class="nav-link" href="#">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        
    </div>
</template>

<script>
  export default {
    methods: {
      vueOnScroll() {
        var prev = window.pageYOffset;
        const refs = this.$refs.headRef; // assign the reference in variable
        window.addEventListener("scroll", () => {
          var curr = window.pageYOffset;
          if (prev > curr) {
            refs.classList.add("scrolled");
            refs.classList.remove("scrollDown");
          } else {
            refs.classList.add("scrollDown");
            refs.classList.remove("scrolled");
          }
          if (curr === 0) {
            refs.classList.remove("scrollDown");
            refs.classList.remove("scrolled");
          }
            prev = curr;
        });
      },
    },
    mounted() {
      // run the function when the component's mount
      this.vueOnScroll();
    }
  }
</script>

<style scoped lang="scss">
.scrollDown, .scrolled {
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
    transition: all 0.35s;
    .navbar-brand {
        padding: 12px;
        background-image: url('/src/assets/img/logoColor.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 100px;
        width: 145px;

        @media (max-width: 575.98px) {
            height: 75px;
            width: 132px;
        }
        /*img {
            height: 100%;
            width: auto;
        }*/
    }
    button.navbar-toggler {
        background: #fff;
    }
    .navbar-collapse {
        .navbar-nav {
            font-family: 'Visby';
            font-weight: 700;
            font-size: 1rem;

            @media (max-width: 991.98px) {
                background: #fff;
                padding: 8px 0;
                border-radius: 4px;
                text-align: end;
            }

            li.nav-item {
                margin: 10px 16px;
                border-bottom: 2px solid transparent;

                &:hover {
                    border-bottom: 2px solid #270089;
                    //transition: all 0.15s;
                    @media (max-width: 991.98px) {
                        border-bottom: none;
                    }
                }
                @media (max-width: 991.98px) {
                    margin: 5px 0;
                    border-bottom: 2px solid transparent;
                }
                a.nav-link {
                    text-transform: uppercase;
                    color: #270089;
                    text-align: center;

                    &:hover {
                        color: #270089;
                    }

                    @media (max-width: 991.98px) {
                        color: #270089;
                        padding: 10px 18px;
                        text-align: right;

                        &:hover {
                            background: #D9D9D9;
                            color: #270089;
                        }
                    }
                }
            }
        }
    }
}
</style>