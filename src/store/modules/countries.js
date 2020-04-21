const state = {
    countries: [],

  }

  // getters
  const getters = {
    countries: state.countries
    },



  // actions
  const actions = {
    getCountries ({ commit, state }) {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => {
          return res.json()
      }).then((data) => {
          commit('setCountries', data)
      })
    },


  }

  // mutations
  const mutations = {
    setCountries (state, data) {
      state.countries = data
    },


  }

  export default {

    state,
    getters,
    actions,
    mutations
  }