<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="success">
                <ion-buttons slot="start">
                <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
            </ion-buttons>
            <ion-title>{{ pageTitle }}</ion-title>
            <ion-buttons slot="end">
                <slot name="actions-end"></slot>
            </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot></slot>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage,IonHeader,IonTitle,IonContent,IonToolbar,IonBackButton,IonButtons } from '@ionic/vue';
export default {
    props: [ 'pageTitle' ],

    components:{
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonBackButton,
    IonButtons
    }
}
</script>

<style>
</style>