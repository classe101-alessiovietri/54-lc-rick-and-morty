<script>
import CharacterCard from './CharacterCard.vue';
import { store } from '../store.js';

export default {
    name: "MainComponent",
    data() {
        return {
            store
        }
    },
    components: {
        CharacterCard
    }
}
</script>

<template>
    <main>
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