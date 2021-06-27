import Vue from "vue";
import Vuex from "vuex";
import films from '../assets/MOCK_DATA.json';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        input: '',
        disp: '',
        films
    },
    getters: {
        getInput(state) {
            return state.input
        },
        getDisp(state) {
            return state.disp
        },
        getFilms(state) {
            switch (state.disp) {
                case "available":
                    return state.films.filter(film =>
                            film.title
                            .toLowerCase()
                            .includes(state.input.toLowerCase())
                        )
                        .filter(film => film.available)
                case "notAvailable":
                    return state.films.filter(film =>
                            film.title
                            .toLowerCase()
                            .includes(state.input.toLowerCase())
                        )
                        .filter(film => !film.available)
                case "all":
                    return state.films.filter(film =>
                        film.title
                        .toLowerCase()
                        .includes(state.input.toLowerCase()))
                default:
                    return state.films.filter(film =>
                        film.title
                        .toLowerCase()
                        .includes(state.input.toLowerCase()))
            }
        },
    },
    mutations: {
        checkInput(state, input2) {
            state.input = input2;
        },
        changeAv(state, available) {
            state.disp = available
        },
    },
});

export default store