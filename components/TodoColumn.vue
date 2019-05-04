<template>
    <div class ="app">
        <v-sheet class='sheet' color="green lighten-5">
        <h2>{{ listName }}</h2>
        <Draggable group="all" ghost-class="ghost" class="area">
            <TodoCard class='card' v-for="(el, index) in list" :key="index" :item="el" :index="index" @remove="remove" @update="update"/>
        </Draggable>
        <v-btn fab dark small color="indigo" @click="add">
            <v-icon dark>add</v-icon>
        </v-btn>
        </v-sheet>
    </div>
</template>

<script>
import Draggable from 'vuedraggable'
import TodoCard from '~/components/TodoCard'

export default {
    components: {
        Draggable,
        TodoCard
    },
    props: {
        list: {
            type: Array,
            default: () => []
        },
        listName: {
            type: String,
            default: '未定義'
        }
    },
    data() {
        return {

        };
    },
    computed: {

    },
    methods: {
        add(){
            this.list.push({content:''});
            this.$emit('update');
        },

        remove(index){
            this.list.splice(index, 1);
            this.$emit('update');
        },

        update(){
            this.$emit('update');
        }



    }
}
</script>

<style scoped>
.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aquamarine;
    width: 100%;
    height: 100%;
}

.sheet {
    padding: 10px;
    margin: 5px;
    width: 270px;
}

.card {
    margin: 5px;
    min-height: 50px;
}

.ghost {
    visibility: hidden;
}

.area {
    display: flex;
    flex-direction: column;
    min-height: 20px;
}

</style>