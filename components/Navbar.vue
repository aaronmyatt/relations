<template>
  <b-navbar class="has-background-light" shadow>
        <template slot="start">
            <b-navbar-item href="/">
                Home
            </b-navbar-item>
            <b-navbar-item>
                <b-button @click="openContactFormModal">Add Contact</b-button>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item>
                <b-button @click="clearDatabase">Clear Database</b-button>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
    methods: {
        openContactFormModal(){
            this.$buefy.modal.open({
                parent: this,
                component: ContactForm,
                customClass: 'custom-class custom-class-2',
                trapFocus: true
            })
        },
        async clearDatabase() {
            await this.$database.delete();
            location.reload();
        },
    }
}
</script>