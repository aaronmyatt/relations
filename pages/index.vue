<template>
  <div class="container">
    <div class="container mt-2 columns">
      <div class="column is-one-third">
        <h2 class="is-size-2">Contacts</h2>
        <b-button
          icon-left="account-plus"
          class="is-success mb-2"
          expanded
          @click="openContactFormModal"
        >
          Add
        </b-button>
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
import AddContactModal from "@/mixins/AddContactModal";

export default {
  mixins: [AddContactModal],
  async created() {
    const firstTimeLogin = await services.settingService.table
      .where("name")
      .equals("firstTimeLogin")
      .first();

    if (firstTimeLogin.value) {
      this.firstTimeAlert();
      firstTimeLogin.value = false;
      services.settingService.updateOne(firstTimeLogin);
    }
  },
  methods: {
    firstTimeAlert() {
      this.$buefy.dialog.alert({
        type: "is-info",
        size: "is-large",
        title: "Welcome to Relations!",
        message:
          "The intentionally simple network management app. <br /> <br /> Add contacts, plan encounters, take notes. <br /> <br /> Build better Relations.",
        confirmText: "Get Started!",
      });
    },
  },
};
</script>