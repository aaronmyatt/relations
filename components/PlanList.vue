<template>
  <div>
    <ul>
      <li class="mt-4" v-for="plan in plans" :key="plan.id">
        <div>
          <div class="card">
            <header class="card-header">
              <div class="card-header-title is-capitalized">
                {{ plan.when }}
              </div>
            </header>
            <div class="card-content">
              <div v-for="key in ['sooner', 'later']" :key="key" class="columns">
                <div class="column is-capitalized has-text-weight-bold is-hidden-"> {{ key }}</div>
                <div class="column">{{ encounter[key] }}</div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async created() {
    this.plans = await this.$services.planService.fetchAll();
  },
  data() {
    return {
      plans: [],
    };
  },
};
</script>

<style>
</style>