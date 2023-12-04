<template>
    <form class="ion-padding" @submit.prevent="SubmitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Titulo</ion-label>
                <ion-input type="text" required v-model="enteredTitle"></ion-input>

                <ion-label position="floating">Url de la Imagen</ion-label>
                <ion-input type="url" required v-model="enteredImagenUrl"></ion-input>

                <ion-label position="floating">Descripcion</ion-label>
                <ion-textarea rows="5" type="url" required v-model="enteredIDescription"></ion-textarea>
            </ion-item>
        </ion-list>
        <ion-button type="submit" expand="block" fill="outline">
            Guardar
        </ion-button>
    </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';

export default {
    emits:['save.memory'],
    components: {
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
        IonTextarea
    },
    data(){
        return{
            enteredTitle: '',
            enteredImagenUrl: '',
            enteredIDescription: ''
        }
    },
    methods: {
        SubmitForm(){
            const memoryData = {
                title: this.enteredTitle,
                imageUrl: this.enteredImagenUrl,
                description: this.enteredIDescription
            };
            this.$emit('save-memory',memoryData);
        }
    }

}
</script>