<template lang="pug">
label(:class="{'error' : !!errorText}").title-about
    span(v-if="title" :class="iconClass").login-block__content-text {{title}}
    input(
        :type="icon"
        v-bind="$attrs"
        :value="value"
        @input="$emit('input', $event.target.value)"
    ).login-block__content-input
    .error-tool   
        error-tooltip(
            :errorText="errorText"
        ) 
</template>

<script>
export default {
    props: {
        title: String,
        errorText: {
            type: String,
            default: ""
        },
        value: String | Number,
        icon: {
            type: String,
            default: ""
        }
    },
    computed: {
        iconClass() {
            const iconName = this.icon;
            return iconName.length ? `login-block__content-text-${iconName}` : ""; 
        }
    },
    components: {
        errorTooltip: () => import ("./errortooltip.vue")
    }
}


</script>

<style lang="pcss">

</style>