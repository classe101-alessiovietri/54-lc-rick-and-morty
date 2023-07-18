<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import axios from "axios";
import { store } from './store.js';

export default {
    name: "App",
    components: {
        HeaderComponent,
        MainComponent,
        FooterComponent,
    },
    data() {
        return {
            store
        };
    },
    methods: {
        getResults() {
            axios
                .get('https://rickandmortyapi.com/api/character', {
                    params: {
                        name: this.store.searchText,
                        status: this.store.searchStatus
                    }
                })
                .then(response => {
                    console.log(response.data.results);
                    this.store.characters = response.data.results;
                })
                .catch(error => {
                    console.log('Errore nella chiamata');
                    this.store.characters = [];
                });
        },
        performSearch() {
            console.log('Intercettato evento search');
            this.getResults();
        }     
    },
    created() {
        this.getResults();
    }
};
</script>

<template>
    <HeaderComponent @search="performSearch()" />

    <MainComponent />

    <FooterComponent />
</template>

<style lang="scss">
@use "assets/scss/main";
</style>
