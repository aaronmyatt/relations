<template>
  <div class="container">
    <div class="container mt-2 columns">
      <div class="column is-one-third">
        <span
          @click="showContactList = !showContactList"
          class="is-flex is-align-items-center is-clickable"
        >
          <h2 class="is-size-2">Contacts</h2>
          <b-icon v-if="showContactList" size="is-large" icon="menu-down" />
          <b-icon v-else size="is-large" icon="menu-right" />
        </span>
        <div v-if="showContactList">
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
      </div>
      <div class="column is-one-third">
        <span
          @click="showEncounterList = !showEncounterList"
          class="is-flex is-align-items-center is-clickable"
        >
          <h2 class="is-size-2">Encounters</h2>
          <b-icon v-if="showEncounterList" size="is-large" icon="menu-down" />
          <b-icon v-else size="is-large" icon="menu-right" />
        </span>
        <div v-if="showEncounterList">
          <EncounterList />
        </div>
      </div>
      <div class="column is-one-third">
        <span
          @click="showPlanList = !showPlanList"
          class="is-flex is-align-items-center is-clickable"
        >
          <h2 class="is-size-2">Plans</h2>
          <b-icon v-if="showPlanList" size="is-large" icon="menu-down" />
          <b-icon v-else size="is-large" icon="menu-right" />
        </span>
        <div v-if="showPlanList">
          <PlanList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddContactModal from "@/mixins/AddContactModal";

export default {
  mixins: [AddContactModal],
  data() {
    return {
      showContactList: true,
      showEncounterList: true,
      showPlanList: true,
    };
  },
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