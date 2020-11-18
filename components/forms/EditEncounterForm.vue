<template>
    <div class="container has-background-white p-4">
        <h3 class="is-size-3">Edit Encounter</h3>
        <p>Edit the details for an encounter</p>
        <div class="mt-4">
            <b-field label="Details">
                <b-input type="textarea" required v-model="encounter.details"></b-input>
            </b-field>
            <b-field label="When">
                <b-datepicker 
                    inline
                    v-model="encounter.when" 
                />
            </b-field>
            <b-field label="How">
                <b-input v-model="encounter.how"></b-input>
            </b-field>

            <b-button 
                @click="editEncounter"
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
import { models } from '@aaronmyatt/relations-data-model';

export default {
    mixins: [EnterPressedMixin],
    props: {
        encounter: {
            type: Object,
            validator: function(value) {
                return value instanceof models.Encounter;
            }
        }
    },
    methods: {
        editEncounter(){
            this.$store.dispatch('encounters/edit', this.encounter);
            this.$emit('close');
        },
        enterPressedCallback(){
            this.editEncounter();
        }
    }
}
</script>