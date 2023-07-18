<script>
import CharacterCard from './CharacterCard.vue';
import { store } from '../store.js';

export default {
    name: "MainComponent",
    data() {
        return {
            store,
            message: 'Ciao',
            numUno: 2,
            numDue: 3
        }
    },
    components: {
        CharacterCard
    },
    methods: {
        sumMethod() {
            console.log('METHOD');
            return this.numUno + this.numDue;
        }
    },
    computed: {
        sumComputed() {
            console.log('COMPUTED');
            return this.numUno + this.numDue;
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <input type="text" v-model="message">
                    <div>
                        {{ message }}
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex">
                        <input type="number" v-model="numUno">
                        <input type="number" v-model="numDue">
                    </div>
                    <div>
                        METHOD: {{ sumMethod() }}
                    </div>
                    <div>
                        COMPUTED: {{ sumComputed }}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <main>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3>
                        Stai cercando per nome: {{ store.searchText }}
                    </h3>
                    <h3>
                        Stai cercando per stato: {{ store.searchStatus }}
                    </h3>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3"
                    v-for="(character, i) in store.characters" :key="i">
                    <CharacterCard :character="character" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>