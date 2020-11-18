<template>
    <div class="container has-background-white p-4">
        <h3 class="is-size-3">Add Plan</h3>
        <p>Enter the date for your next meeting</p>
        <div class="mt-4">
            <b-field label="When">
                <b-datepicker 
                    inline
                    v-model="plan.when" 
                />
            </b-field>
            <b-button 
                @click="editPlan"
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
    data(){
        return {
            plan: {}
        }
    },
    props: {
        contact: {
            type: Object,
            validator: function(value) {
                return value instanceof models.contact;
            }
        }
    },
    methods: {
        addPlan(){
            this.plan.contactId = this.contact.id;
            this.$store.dispatch('plans/add', this.plan);
            this.$emit('close');
        },
        enterPressedCallback(){
            this.addPlan();
        }
    }
}
</script>