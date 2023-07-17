import { reactive } from 'vue'

export const store = reactive({
    searchText: "",
    characters: [],
    loading: true,
});