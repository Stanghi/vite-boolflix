<script>
export default {
    name: 'AppSearchError',
};
</script>

<template>
    <div>
        <h2>There seems to have been a problem with the search.</h2>
        <h3>Please try again or <span @click="$emit('reset')">go back to home</span></h3>
    </div>
</template>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    width: 100vw;

    h2 {
        color: #dc1a28;
    }

    h3 {
        color: rgba(58, 56, 56, 0.5);

        span {
            text-decoration: underline;
            cursor: pointer;
            &:hover {
                color: rgba(58, 56, 56, 1);
            }
        }
    }
}
</style>
