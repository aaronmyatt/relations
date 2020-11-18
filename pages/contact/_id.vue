<template>
  <div v-if="contact" class="container">
    <h1 class="is-size-1">Relation</h1>
    <div class="container mt-6 columns">
      <div class="column is-one-third">
        <h2 class="is-size-2">Contact</h2>
        <ContactCard :contact="contact"/>
      </div>
      <div class="column is-one-third">
        <h2 class="is-size-2">Encounters</h2>
        <div v-for="encounter in encounters" :key="encounter.id">
          <EncounterCard :encounter="encounter" />
        </div>
      </div>
      <div class="column is-one-third">
        <h2 class="is-size-2">Plans</h2>
        <div v-for="plan in plans" :key="plan.id">
          <PlanCard :plan="plan" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { services } from '@aaronmyatt/relations-data-model';

export default {
  data(){
    return {
      contact: null,
      encounters: [],
      plans: []
    }
  },
  async created(){
    this.load()
  },
  methods: {
    async load(){
      const contactId = this.$route.params.id;
      this.contact = await services.contactService.fetchOne(Number(contactId));
      this.encounters = await services.encounterService.fetchFor(this.contact).toArray();
      this.plans = await services.planService.fetchFor(this.contact).toArray();
    }
  }
};
</script>