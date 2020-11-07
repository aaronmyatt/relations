<template>
  <div class="container">
    <div class="container mt-6 columns">
      <div class="column is-one-third">
        <h1 class="is-size-1">Contacts</h1>
        <ContactList />
      </div>
      <div class="column is-one-third">
        <h1 class="is-size-1">Encounters</h1>
        <EncounterList />
      </div>
      <div class="column is-one-third">
        <h1 class="is-size-1">Plans</h1>
        <PlanList />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async clearDatabase() {
      await this.$database.delete();
      location.reload();
    },
  },
};
</script>