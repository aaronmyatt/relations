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
            <div class="is-flex is-full">
                <b-button 
                    @click="editPlan"
                    class="has-background-success-light"
                    expanded 
                    outlined
                >
                    Save
                </b-button>
                <b-button
                    @click="deletePlan"
                    icon-left="trash-can-outline"
                    class="has-background-danger-light"
                    outlined
                >
                </b-button>
            </div>
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
        },
        deletePlan() {
            this.$buefy.dialog.confirm({
                title: 'Are you sure?',
                message: 'This plan will be deleted permenantly.',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: () => {
                this.$store.dispatch("plans/delete", this.plan);
                this.$emit("close");  
                }
            })
        },
    }
}
</script>