<template>
  <div>
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        {{ contact.id }} | {{ contact.firstName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async created() {
    await this.$models.Contact.generateMock();
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