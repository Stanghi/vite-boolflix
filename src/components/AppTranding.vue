<script>
import { store } from '../data/store';
import AppLoading from './AppLoading.vue';
export default {
    name: 'AppTranding',
    components: {
        AppLoading,
    },
    data() {
        return {
            store,
            counter: 0,
        };
    },
    methods: {
        autoCarousel() {
            this.autoPlay = setInterval(() => {
                this.sliderNextPrev(true);
            }, 5000);
        },

        stopIntervall() {
            clearInterval(this.autoPlay);
        },

        sliderNextPrev(isNext) {
            !isNext ? this.counter-- : this.counter++;

            if (this.counter === 20) this.counter = 0;
            else if (this.counter < 0) this.counter = 20 - 1;
        },
    },
    mounted() {
        this.autoCarousel();
    },
};
</script>

<template>
    <div v-if="store.isLoaded">
        <div v-for="(el, index) in store.resultsTranding" :key="index">
            <div class="carousel-inner">
                <div class="carousel-item" :class="index === this.counter && 'active'">
                    <img
                        class="d-block w-100"
                        :src="'https://image.tmdb.org/t/p/original/' + el.backdrop_path"
                        :alt="el.title || el.name"
                    />
                    <h2 class="title">{{ el.title || el.name }}</h2>
                    <p>{{ index + 1 }}° in trending now</p>
                </div>
            </div>
        </div>
        <div
            class="circle prev"
            @click="sliderNextPrev(false)"
            @mouseover="stopIntervall()"
            @mouseleave="autoCarousel()"
        >
            <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div
            class="circle next"
            @click="sliderNextPrev(true)"
            @mouseover="stopIntervall()"
            @mouseleave="autoCarousel()"
        >
            <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
    <AppLoading v-else />
</template>

<style lang="scss" scoped>
.carousel-inner {
    .carousel-item {
        height: 100vh;
        width: 100vw;

        img {
            object-fit: contain;
        }

        .title {
            position: absolute;
            bottom: 100px;
            left: 100px;
            font-size: 3rem;
            color: white;
            text-transform: uppercase;
            font-weight: bold;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
            z-index: 998;
        }

        p {
            z-index: 998;
            position: absolute;
            bottom: 50px;
            left: 100px;
            color: white;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
    }

    .carousel-item::after {
        box-shadow: inset -0px -150px 200px 0px rgba(0, 0, 0, 0.9);
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        width: 100%;
    }
}

.circle {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    width: 45px;
    height: 45px;
    transform: translate(0, -50%);
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgba(58, 56, 56, 0.3);
    backdrop-filter: blur(13.8px);
    -webkit-backdrop-filter: blur(13.8px);
}

.circle.next {
    color: white;
    right: 100px;
}
.circle.prev {
    color: white;
    left: 100px;
}

.circle:hover {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
