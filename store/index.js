import Vuex from 'vuex'
import firebase from '~/utils/firebase';

const createStore = () => {
    return new Vuex.Store({
        strict: process.env.NODE_ENV !== 'production',
        state: () => ({
            auth: {},
            todoList: {
                todo: [{content: 'ばなな'},{content: 'なす'}],
                wip: [{content: 'すいか'},{content: 'かぼちゃ'}],
                done: [{content: 'ちゃ'},{content: 'ちゃばしら'}]
            }
    
        }),
        mutations: {
            setAuth(state, payload){
                state.auth = {
                    uid: payload.uid,
                    userName: payload.userName
                }
            },
            setTodoList(state,payload){
                state.todoList = payload;
            }
        },
        actions: {

            setAuth(store, payload){
                store.commit(`setAuth`,payload);
            },
            setTodoList(store, payload){
                store.commit('setTodoList', payload);
            }
        }
    })
}

export default createStore;