<template>
    <base-layout title="Agregar Recuerdo" page-default-back-link="/memories">
        <create-memory-page @save-memory="saveMemory"> </create-memory-page>

    </base-layout>
</template>
<script>
import BaseLayout from '../components/BaseLayout.vue';
import CreateMemoryPage from '../components/memories/CreateMemoryPage.vue';
export default {
    components: {
        BaseLayout,
        CreateMemoryPage
    },
    methods: {
        saveMemory(memoryData){
            this.$store.dispatch('addMemory', memoryData);
            this.$router.replace('/memories');
        },
    },
};
</script>