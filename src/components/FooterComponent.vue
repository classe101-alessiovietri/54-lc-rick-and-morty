<script>
import { store } from '../store.js';

export default {
    name: "FooterComponent",
    data() {
        return {
            store,
        }
    },
    methods: {
        // statusNumber(status) {
        //     let count = 0;

        //     for (let i = 0; i < this.store.characters.length; i++) {
        //         const element = this.store.characters[i];
        //         if (element.status == status) {
        //             count++;
        //         }
        //     }

        //     return count;
        // },
        // deadNumber() {
        //     let count = 0;

        //     for (let i = 0; i < this.store.characters.length; i++) {
        //         const element = this.store.characters[i];
        //         if (element.status == 'Dead') {
        //             count++;
        //         }
        //     }

        //     return count;
        // },
        // unknownNumber() {
        //     let count = 0;

        //     for (let i = 0; i < this.store.characters.length; i++) {
        //         const element = this.store.characters[i];
        //         if (element.status == 'unknown') {
        //             count++;
        //         }
        //     }

        //     return count;
        // },
        // aliveNumber() {
        //     let count = 0;

        //     for (let i = 0; i < this.store.characters.length; i++) {
        //         const element = this.store.characters[i];
        //         if (element.status == 'Alive') {
        //             count++;
        //         }
        //     }

        //     return count;
        // }
        onlyStatusMethod() {
            console.log('onlyStatusMethod');
            const aliveCharacters = this.store.characters.filter(element => {
                if (element.status.toLowerCase() == this.store.searchStatus) {
                    return true;
                }
                else {
                    return false;
                }
            });
            return aliveCharacters;
        }
    },
    computed: {
        onlyStatusComputed() {
            console.log('onlyStatusComputed');
            const aliveCharacters = this.store.characters.filter(element => {
                if (element.status.toLowerCase() == this.store.searchStatus) {
                    return true;
                }
                else {
                    return false;
                }
            });
            return aliveCharacters;
        }
        // aliveNumberComputed() {
        //     let count = 0;

        //     for (let i = 0; i < this.store.characters.length; i++) {
        //         const element = this.store.characters[i];
        //         if (element.status == 'Alive') {
        //             count++;
        //         }
        //     }

        //     return count;
        // }
    }
}
</script>

<template>
    <footer class="pb-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    {{ store.searchText }}
                    <select v-model="store.searchStatus" class="form-select" aria-label="Select a status">
                        <option value="" selected>Select status...</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                <div class="col-6">
                    <h2>
                        METHOD
                    </h2>
                    <div v-for="(character, i) in onlyStatusMethod()" :key="i">
                        {{ character.name }}, 
                    </div>
                </div>
                <div class="col-6">
                    <h2>
                        COMPUTED
                    </h2>
                    <div v-for="(character, i) in onlyStatusComputed" :key="i">
                        {{ character.name }}, 
                    </div>
                </div>
            </div>
        </div>


        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <strong>
                        Found {{ store.characters.length }} characters
                    </strong>
                </div>
                <!-- <div class="col-4 text-center">
                    <strong>
                        Found {{ aliveNumberComputed }} characters alive
                    </strong>
                </div>
                <div class="col-4 text-center">
                    <strong>
                        Found {{ deadNumber() }} characters dead
                    </strong>
                </div>
                <div class="col-4 text-center">
                    <strong>
                        Found {{ unknownNumber() }} characters with status unknown
                    </strong>
                </div> -->
                <!-- <div class="col-4 text-center">
                    <strong>
                        Found {{ statusNumber('Alive') }} characters alive
                    </strong>
                </div>
                <div class="col-4 text-center">
                    <strong>
                        Found {{ statusNumber('Dead') }} characters dead
                    </strong>
                </div>
                <div class="col-4 text-center">
                    <strong>
                        Found {{ statusNumber('unknown') }} characters with status unknown
                    </strong>
                </div> -->
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
</style>