<template lang="pug">
    .error-tool-text {{errorText}}    
</template>

<script>
export default {
    props: {
        errorText: {
            type: String,
            default: "Ошибка"
        }
    }
};

</script>

<style lang="pcss">

</style>