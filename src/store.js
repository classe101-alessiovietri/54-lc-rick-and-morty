import { reactive } from 'vue'

export const store = reactive({
    searchText: "",
    searchStatus: "",
    characters: [],
    loading: true
});