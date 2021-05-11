import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../Constant'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todolist: [
            { id: 1, todo: '영화보기', done: false },
            { id: 2, todo: '주말산책', done: true },
            { id: 3, todo: 'ES6공부', done: false },
            { id: 4, todo: '야구경기보기', done: false },
        ]
    },
    mutations: {
        [Constant.ADD_TODO]: (state, payload) => {
            if (payload.todo !== "") {
                state.todolist.push({ id: new Date().getTime(), todo: payload.todo, done: false })
            }
        },
        [Constant.DONE_TOGGLE]: (state, payload) => {
            var index = state.todolist.findIndex((item) => item.id === payload.id)
            state.todolist[index].done = !state.todolist[index].done
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            var index = state.todolist.findIndex((item) => item.id === payload.id)
            state.todolist.splice(index, 1)
        }
    },
    actions: {
        [Constant.ADD_TODO]: ({ commit }, payload) => {
            console.log("###addTodo", payload)
            commit(Constant.ADD_TODO, payload)
        },
        [Constant.DELETE_TODO]: ({ commit }, payload) => {
            console.log("###deleteTodo", payload)
            commit(Constant.DELETE_TODO, payload)
        },
        [Constant.DONE_TOGGLE]: ({ commit }, payload) => {
            console.log("###doneToggle", payload)
            commit(Constant.DONE_TOGGLE, payload)
        }
    }
})

export default store