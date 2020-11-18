<template>
  <div>
    <ul>
      <li class="mt-4" v-for="encounter in encounters" :key="encounter.id">
        <EncounterCard :encounter="encounter" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('encounters/load');
  },
  computed: {
    encounters() {
      return this.$store.state.encounters.all;
    }
  },
};
</script>

<style>
</style>