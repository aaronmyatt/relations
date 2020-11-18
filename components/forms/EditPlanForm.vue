<template>
    <div class="container has-background-white p-4">
        <h3 class="is-size-3">Edit Plan</h3>
        <p>Edit the details for a plan</p>
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
    props: {
        plan: {
            type: Object,
            validator: function(value) {
                return value instanceof models.Plan;
            }
        }
    },
    methods: {
        editPlan(){
            this.$store.dispatch('plans/edit', this.plan);
            this.$emit('close');
        },
        enterPressedCallback(){
            this.editPlan();
        }
    }
}
</script>