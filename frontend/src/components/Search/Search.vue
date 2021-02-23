<template>
    <div class="search">
        <form class="search__form" @submit.prevent="search">
            <input
                type="text"
                class="search__field"
                placeholder="Поиск..."
                v-model="params.q"
                @input="search"
            >
            <button type="submit">Отправить</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'search',
    data () {
        return {
            params: {
                q: ''
            }
        }
    },
    methods: {
        search () {
            this.$emit('search', this.params)
        }
    }
}
</script>

<style lang="scss">
</style>
