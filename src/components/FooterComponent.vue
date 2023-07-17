<script>
import { store } from '../store.js';

export default {
    name: "FooterComponent",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <footer class="pb-5">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <strong>
                        Found {{ store.characters.length }} characters
                    </strong>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
</style>