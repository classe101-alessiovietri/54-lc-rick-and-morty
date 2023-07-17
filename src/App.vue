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
    methods: {},
    created() {
        axios
            .get('https://rickandmortyapi.com/api/character')
            .then(response => {
                console.log(response.data.results);
                this.store.characters = response.data.results;
            });
    }
};
</script>

<template>
    <HeaderComponent />

    <MainComponent />

    <FooterComponent />
</template>

<style lang="scss">
@use "assets/scss/main";
</style>
