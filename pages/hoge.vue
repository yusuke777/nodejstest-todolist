<template>
    <div>
        <h1>現在の数字 {{ counter }} </h1>
        <v-btn @click="push">ぽちっとな</v-btn>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    components: {

    },
    props: {
        hoge: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            
        };
    },
    computed: {
        ...mapState(['counter'])
    },
    methods: {
        push(){
            this.$store.dispatch('increment', {amount: 1});
        }
    }
}
</script>

<style scoped>
.app {
    width: 100%;
    height: 100%;
}
</style>