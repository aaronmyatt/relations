<template>
  <div class="container">
    <h1 class="is-size-1">Relations</h1>
    <div class="container mt-6 columns">
      <div class="column is-one-third">
        <h2 class="is-size-2">Contacts</h2>
        <ContactList />
      </div>
      <div class="column is-one-third">
        <h2 class="is-size-2">Encounters</h2>
        <EncounterList />
      </div>
      <div class="column is-one-third">
        <h2 class="is-size-2">Plans</h2>
        <PlanList />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  },
};
</script>