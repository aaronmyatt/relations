<template>
  <div>
    <div class="card">
      <header class="card-header">
        <div class="card-header-title is-capitalized">
          {{ humanReadableWhen }} 
          <span 
            v-if="contact" 
            class="ml-2"
          > 
            With: {{ contact.firstName }}
          </span>
        </div>
      </header>
      <footer class="card-footer">
        <b-button
          @click="editPlan(plan)"
          class="card-footer-item is-primary is-light"
        >
          Edit
        </b-button>
      </footer>
    </div>
  </div>
</template>

<script>
import EditPlanForm from '@/components/forms/EditPlanForm';
import { models } from "@aaronmyatt/relations-data-model";

export default {
  props: {
    plan: {
      type: Object,
      validator: function (value) {
        return value instanceof models.Plan;
      },
    },
  },
  data(){
    return {
      contact: {},
    }
  },
  async created(){
    this.contact = await this.$services.contactService.fetchOne(this.plan.contactId);
  },
  computed: {
    humanReadableWhen(){
      return new Date(this.plan.when).toLocaleDateString()
    }
  },
  methods: {
    editPlan(plan) {
      this.$buefy.modal.open({
        parent: this,
        component: EditPlanForm,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
        scroll: "keep",
        fullScreen: true,
        props: {
          plan,
        },
      });
    },
  },
};
</script>

<style>
</style>