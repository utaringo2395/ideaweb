<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import card from '../components/card.vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
</script>
<template>
    <div>
        <div class="container my-5">
            <div class="row">
                <div class="col-lg-12">
                    <swiper
                        :slidesPerView="3"
                        :spaceBetween="30"
                        :pagination="{
                        clickable: true,
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