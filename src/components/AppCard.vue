<script>
import { store } from '../data/store';
export default {
    name: 'AppCard',
    props: {
        card: Object,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <img
        :src="'https://image.tmdb.org/t/p/original/' + this.card.poster_path"
        :alt="this.card.title || this.card.name"
    />
    <div class="text">
        <p class="title">{{ this.card.title || this.card.name }}</p>

        <div v-if="this.card.overview" class="overview">{{ this.card.overview }}</div>

        <div class="star">
            <p v-for="(x, index) in Math.ceil(this.card.vote_average / 2)" :key="index">
                <i class="fa-solid fa-star"></i>
            </p>
        </div>

        <p class="original-title">{{ this.card.original_title || this.card.original_name }}</p>
        <div class="flag">
            <span v-if="this.card.original_language === 'en'" class="fi fi-us"></span>
            <span v-else-if="this.card.original_language === 'ja'" class="fi fi-jp"></span>
            <span
                v-else-if="this.card.original_language"
                :class="'fi fi-' + this.card.original_language"
            ></span>
            <span v-else class="fi fi-xx"></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms-card:hover {
    img {
        opacity: 0.5;
    }

    .text {
        padding: 10px;
        visibility: visible;
        color: white;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(13.8px);
        -webkit-backdrop-filter: blur(13.8px);

        .title {
            font-size: 0.8rem;
            font-weight: bold;
            margin-bottom: 10px;
            max-height: 30%;
            overflow: auto;
        }

        .overview {
            max-height: 50%;
            overflow: auto;
            font-size: 0.7rem;
        }

        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-thumb {
            background: white;
        }

        .original-title {
            position: absolute;
            bottom: 0;
            font-size: 0.7rem;
        }

        i {
            margin-right: 5px;
            font-size: 0.7rem;
        }
    }

    .flag {
        position: absolute;
        bottom: 15px;
        right: 15px;
    }

    .star {
        p {
            display: inline-block;
        }
    }
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.text {
    visibility: hidden;
    position: absolute;
    bottom: 0;
}
</style>
