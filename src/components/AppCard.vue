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
        v-if="this.card.poster_path"
        :src="'https://image.tmdb.org/t/p/original/' + this.card.poster_path"
        :alt="this.card.title || this.card.name"
    />
    <div v-else class="title-no-img">
        <p>{{ this.card.title || this.card.name }}</p>
    </div>

    <div class="text">
        <p class="title">{{ this.card.title || this.card.name }}</p>

        <div v-if="this.card.overview" class="overview">
            <p class="original-title">
                {{ this.card.original_title || this.card.original_name }}
            </p>
            {{ this.card.overview }}
        </div>
        <div v-else class="overview">
            <p class="original-title">
                {{ this.card.original_title || this.card.original_name }}
            </p>
            No overview found
        </div>

        <div class="bottom-text">
            <div class="star">
                <p v-for="(x, index) in Math.ceil(this.card.vote_average / 2)" :key="index">
                    <i class="fa-solid fa-star"></i>
                </p>
            </div>

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
    </div>
</template>

<style lang="scss" scoped>
.title-no-img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 20px;
    text-align: center;
}

.ms-card:hover {
    img {
        opacity: 0.5;
    }

    .text {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        visibility: visible;
        padding: 10px;
        color: white;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(13.8px);
        -webkit-backdrop-filter: blur(13.8px);

        .title {
            font-size: 0.8rem;
            font-weight: bold;
            overflow: auto;
            max-height: 40%;
            margin-bottom: 0;
        }

        .overview {
            height: calc(100% - 40%);
            overflow: auto;
            font-size: 0.6rem;

            .original-title {
                font-size: 0.6rem;
                font-weight: bold;
                margin: 0;
            }
        }

        .bottom-text {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 10%;

            .star {
                display: flex;
                align-items: center;
                height: 100%;

                i {
                    transform: translate(0, 50%);
                    font-size: 0.6rem;
                    color: gold;
                }
            }
        }

        ::-webkit-scrollbar {
            width: 1px;
        }

        ::-webkit-scrollbar-thumb {
            background: white;
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
