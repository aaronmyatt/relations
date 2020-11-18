<template>
    <div class="container has-background-white p-4">
        <h3 class="is-size-3">Update Contact</h3>
        <p>Update the details for a new contact below</p>
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
                @click="updateContact"
                class="has-background-success-light"
                expanded 
                outlined
            >
                Update
            </b-button>
        </div>
    </div>
</template>

<script>
import EnterPressedMixin from '@/mixins/EnterPressed';
import { models } from '@aaronmyatt/relations-data-model';

export default {
    mixins: [EnterPressedMixin],
    props: {
        contact: {
            type: Object,
            validator: function(value) {
                return value instanceof models.Contact;
            }
        }
    },
    methods: {
        updateContact(){
            this.$store.dispatch('contacts/edit', this.contact);
            this.$emit('close');
        },
        enterPressedCallback(){
            this.updateContact();
        }
    }
}
</script>