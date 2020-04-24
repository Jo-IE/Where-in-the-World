const state = {
    countries: [],
};

// getters
const getters = {
    AllCountries: (state) => {
        return state.countries;
    },
    Africa: (state) => {
        return state.countries.filter((country) => country.region === 'Africa');
    },
    America: (state) => {
        return state.countries.filter(
            (country) => (country.region = 'Americas')
        );
    },
    Asia: (state) => {
        return state.countries.filter((country) => country.region === 'Asia');
    },
    Europe: (state) => {
        return state.countries.filter((country) => country.region === 'Europe');
    },
    Oceania: (state) => {
        return state.countries.filter(
            (country) => country.region === 'Oceania'
        );
    },
};

// actions
const actions = {
    getCountries({ commit }) {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                commit('setCountries', data);
            });
    },
};

// mutations
const mutations = {
    setCountries(state, data) {
        state.countries = data;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
