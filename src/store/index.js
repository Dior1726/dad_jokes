import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jokes: [],
    favourite_jokes: []
  },
  mutations: {
    set_jokes(state, payload) {
      state.jokes.push(payload)
    },
    set_favourite_jokes(state, payload) {
      if (state.favourite_jokes.includes(payload)) {
        const index = state.favourite_jokes.indexOf(payload)
        state.favourite_jokes.splice(index, 1)
        payload.isFavourite = false
      } else {
        payload.isFavourite = true
        state.favourite_jokes.push(payload)
      }
    }
  },
  actions: {
    get_jokes({commit}) {
      axios.get('https://icanhazdadjoke.com/', {
        headers: {
          'content-type': 'application/JSON',
          'accept': 'application/json'
        }
      })
      .then(res => {
        commit('set_jokes', res.data)
      })
      .catch(e => console.log(e.message))
    },
    add_favourite_jokes({commit}, payload) {
      commit('set_favourite_jokes', payload)
    }
  },
  getters: {
    jokes: (state) => {
      return state.jokes
    },
    favourite_jokes: (state) => {
      return state.favourite_jokes
    }
  },
  modules: {
  }
})
