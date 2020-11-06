<template>
  <div class="container">
    <button @click="clearDatabase">Clear Database</button>
    <ContactList />
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