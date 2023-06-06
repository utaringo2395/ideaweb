<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import card from '../components/card.vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper';
</script>
<template>
    <div>
        <div class="container mExtra">
            <div class="row">
                <div class="col-lg-12">
                    <swiper
                        :spaceBetween="30"
                        :breakpoints="{
                            '640': {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            '768': {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            '1024': {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }"
                        :modules="modules"
                        class="mySwiper"
                    >
                        <swiper-slide>
                            <card />
                        </swiper-slide>
                        <swiper-slide>
                            <card />
                        </swiper-slide>
                        <swiper-slide>
                            <card />
                        </swiper-slide>
                        <swiper-slide>
                            <card />
                        </swiper-slide>
                        <swiper-slide>
                            <card />
                        </swiper-slide>
                        <swiper-slide>
                            <card />
                        </swiper-slide>
                        <swiper-slide>
                            <card />
                        </swiper-slide>
                        <swiper-slide>
                            <card />
                        </swiper-slide>
                        <swiper-slide>
                            <card />
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
components: {
    Swiper,
    SwiperSlide,
},
setup() {
    return {
    modules: [Pagination],
    };
},
};
</script>

<style scoped lang="scss">
.swiper-slide {
    @media (max-width: 640px) {
        justify-content: center;
    }
}
</style>