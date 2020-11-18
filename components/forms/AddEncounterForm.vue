<template>
    <div 
        class="container has-background-white p-4"
    >
        <h3 class="is-size-3">New Encounter</h3>
        <p>Add the details for a new encounter below</p>
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
                @click="saveEncounter"
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
        contact: {
            type: Object,
            validator: function(value) {
                return value instanceof models.Contact;
            }
        }
    },
    data(){
        return {
            encounter: {
                when: new Date()
            }
        }
    },
    computed: {
        newEncounterDetails(){
            return {
                contactId: this.contact.id,
                ...this.encounter
            }
        }
    },
    methods: {
        saveEncounter(){
            this.$store.dispatch('encounters/save', this.newEncounterDetails);
            this.nextPlanPrompt();
            this.$emit('close');
        },
        enterPressedCallback(){
            this.saveEncounter();
        },
        nextPlanPrompt(){
            this.$buefy.dialog.confirm({
                    title: 'Schedule next encounter?',
                    message: 'Book another encounter with your contact.',
                    confirmText: 'Add Plan',
                    type: 'is-success',
                    hasIcon: true,
                    onConfirm: () => {
                        this.addPlanPrompt();
                    }
                })
        },
        addPlanPrompt(){
            this.$buefy.dialog.confirm({
                    title: 'Would you like the next meeting sooner or later?',
                    message: 'For your convenience, we\'ll either double the time between meetings (later) or half the time (sooner).',
                    confirmText: 'Sooner',
                    cancelText: 'Later',
                    type: 'is-info',
                    hasIcon: true,
                    onConfirm: () => {
                        this.scheduleNextPlanSooner();
                    },
                    onCancel: () => {
                        this.scheduleNextPlanLater();
                    }
                })
        },
        scheduleNextPlanSooner(){
            this.$store.dispatch('plans/addSoonerFor', { contact: this.contact });
        },
        scheduleNextPlanLater(){
            this.$store.dispatch('plans/addLaterFor', { contact: this.contact });
        }
    }
}
</script>