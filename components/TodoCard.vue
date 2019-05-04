<template>
    <div>
        <v-btn v-if="showDeleteFlag" depressed small color="red lighten-1" @click="remove">
            <v-icon>clear</v-icon>
        </v-btn>
        <v-textarea
            @change="update"
            v-model="item.content"
            hide-details
            solo
            auto-grow
            row-height=10
            @focus="setShowDeleteState(true)"
            @blur="setShowDeleteState(false)"

            />
    </div>
</template>

<script>

export default {
    components: {

    },
    props: {
        item: {
            type: Object,
            default: () => []
        },
        index: {
            type: Number
        }
    },
    data() {
        return {
            showDeleteFlag: false

        };
    },
    computed: {

    },
    methods: {
        setShowDeleteState(state){
            if(state){
                this.showDeleteFlag = true;
            }else{
                setTimeout(() => {
                    this.showDeleteFlag =false;
                }, 500);
            }
        },
        update(){
            this.$emit('update');
        },
        remove(){
            this.$emit('remove', this.index);
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