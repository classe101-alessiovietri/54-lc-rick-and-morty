<script>
import { store } from '../store.js';

export default {
    name: "HeaderComponent",
    data() {
        return {
            store
        }
    },
    methods: {
        // testSottomissioneForm() {
        //     console.log('SI');
        // }
    }
}
</script>

<template>
    <header class="text-center py-5">
        <div class="container">
            <div class="row mb-4">
                <div class="col">
                    <h1>
                        Rick and Morty App
                    </h1>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <form action="" @submit.prevent="$emit('search')">
                        <div class="row justify-content-center">
                            <div class="col-auto">
                                <input v-model="store.searchText" type="text" class="form-control" id="character-name" placeholder="Search character by name...">
                            </div>
                            <div class="col-auto">
                                <select v-model="store.searchStatus" class="form-select" aria-label="Select a status">
                                    <option value="" selected>Select status...</option>
                                    <option value="alive">Alive</option>
                                    <option value="dead">Dead</option>
                                    <option value="unknown">Unknown</option>
                                </select>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary">
                                    Search
                                </button>
                            </div>
                            <div class="col-auto">
                                <button type="reset" class="btn btn-warning">
                                    Reset
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
</style>