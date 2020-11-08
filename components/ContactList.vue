<template>
  <div>
    <ul>
      <li class="mt-4" v-for="contact in contacts" :key="contact.id">
        <div>
          <div class="card">
            <header class="card-header">
              <div class="card-header-title is-capitalized">
                {{ contact.firstName }} {{ contact.lastName }}
              </div>
            </header>
            <div class="card-content">
              <div v-for="key in ['email', 'telephone']" :key="key" class="columns">
                <div class="column is-capitalized has-text-weight-bold is-hidden-"> {{ key }}</div>
                <div class="column">{{ contact[key] }}</div>
              </div>
              <div class="columns">
                <div class="column is-capitalized has-text-weight-bold is-hidden-"> Birthday </div>
                <div class="column">{{ contact.birthday ? new Date(contact.birthday).toLocaleDateString() : "" }}</div>
              </div>
            </div>
            <footer class="card-footer">
              <b-button class="card-footer-item is-primary is-light">Edit</b-button>
              <b-button class="card-footer-item is-info is-light">Add Encounter</b-button>
            </footer>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async created() {
    this.contacts = await this.$services.contactService.fetchAll();
  },
  data() {
    return {
      contacts: [],
    };
  },
};
</script>

<style>
</style>