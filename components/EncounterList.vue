<template>
  <div>
    <ul>
      <li class="mt-4" v-for="encounter in encounters" :key="encounter.id">
        <div>
          <div class="card">
            <header class="card-header">
              <div class="card-header-title is-capitalized">
                {{ encounter.when }}
              </div>
            </header>
            <div class="card-content">
              <div v-for="key in ['details', 'how']" :key="key" class="columns">
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
    this.encounters = await this.$services.encounterService.fetchAll();
  },
  data() {
    return {
      encounters: [],
    };
  },
};
</script>

<style>
</style>