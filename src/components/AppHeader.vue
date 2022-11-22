<script>
import { store } from '../data/store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <header>
        <div class="ms-container">
            <div class="logo">
                <img src="/logo-boolflix.png" alt="logo" @click="$emit('reset')" />
            </div>
            <div>
                <input
                    v-model.trim="store.inputSearch"
                    @keyup.enter="$emit('startSearch')"
                    type="text"
                    placeholder="Search"
                />

                <button @click="$emit('startSearch')">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: fixed;
    z-index: 999;
    height: 80px;
    width: 100vw;

    .ms-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 90%;
        margin: 0 auto;
        z-index: 9999;

        .logo {
            img {
                width: 150px;
                cursor: pointer;
            }
        }

        input {
            width: 300px;
            padding-left: 20px;
            margin-right: 10px;
            outline: none;
        }

        button {
            width: 35px;
        }

        input::placeholder {
            color: white;
        }

        input,
        button {
            border: none;
            height: 35px;
            border-radius: 30px;
            color: white;
            background-color: rgba(58, 56, 56, 0.3);
            backdrop-filter: blur(13.8px);
            -webkit-backdrop-filter: blur(13.8px);
        }

        button:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
}
</style>
