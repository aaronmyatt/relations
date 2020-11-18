<template>
    <div class="container has-background-white p-4">
        <h3 class="is-size-3">New Contact</h3>
        <p>Add the details for a new contact below</p>
        <div class="mt-4">
            <b-field label="First Name">
                <b-input required v-model="contact.firstName"></b-input>
            </b-field>
            <b-field label="last Name">
                <b-input v-model="contact.lastName"></b-input>
            </b-field>
            <b-field label="Email Address">
                <b-input type="email" v-model="contact.email"></b-input>
            </b-field>
            <b-field label="Telephone Number">
                <b-input type="tel" v-model="contact.telephone"></b-input>
            </b-field>

            <b-field label="Birthday">
                <b-datepicker 
                    inline
                    v-model="contact.birthday" 
                />
            </b-field>

            <b-button 
                @click="saveContact"
                class="has-background-success-light"
                expanded 
                outlined
            >
                Save
            </b-button>
        </div>
    </div>
</template>

<script>
import EnterPressedMixin from '@/mixins/EnterPressed';

export default {
    mixins: [EnterPressedMixin],
    data(){
        return {
            contact: {}
        }
    },
    methods: {
        saveContact(){
            this.$store.dispatch('contacts/save', this.contact);
            this.$emit('close');
        },
        enterPressedCallback(){
            this.saveContact();
        }
    }
}
</script>