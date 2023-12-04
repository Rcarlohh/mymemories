<template>
    <ion-list>
        <memories-list-item 
        v-for="m in memories" 
        :key="m.id" 
        :m="m">
        </memories-list-item>
    </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';

import MemoriesListItem from '../memories/MemoriesListItem.vue';
export default {
    props: ['memories'],
    components: {
        IonList,
        MemoriesListItem
    }

}
</script>