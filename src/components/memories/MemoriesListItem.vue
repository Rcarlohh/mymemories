<template>
    <ion-item :router-link="`/memories/${m.id}`">
        <ion-thumbnail slot="start">
            <ion-img :src="m.image" :alt="m.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
            {{ m.title }}
        </ion-label>
    </ion-item>
</template>

<script>
import { IonItem, IonImg, IonLabel, IonThumbnail } from '@ionic/vue';

export default {
    props: ["m"],
    components: {
        IonItem,
        IonImg,
        IonLabel,
        IonThumbnail
    }
};
</script>