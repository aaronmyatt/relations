<template>
  <div>
    <ul>
      <li class="mt-4" v-for="plan in plans" :key="plan.id">
        <PlanCard :plan="plan" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('plans/load');
  },
  computed: {
    plans() {
      return this.$store.state.plans.all;
    }
  }
};
</script>

<style>
</style>