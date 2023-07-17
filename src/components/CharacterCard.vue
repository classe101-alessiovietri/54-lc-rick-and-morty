<script>
export default {
    props: {
        character: {
            type: Object,
            default: {
                image: '',
                name: '',
                status: '',
                species: '',
            }
        }
    }
}
</script>

<template>
    <div class="single-character text-center">
        <div>
            <img :src="character.image" :alt="character.name" class="rounded-circle img-fluid">
        </div>
        <div class="mb-4">
            <h2>
                {{ character.name }}
            </h2>
        </div>
        <div>
            <p class="mb-0">
                {{ character.status }}
            </p>
            <p>
                {{ character.species }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>