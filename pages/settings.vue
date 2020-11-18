<template>
  <div class="container">
    <h1 class="is-size-1">Settings</h1>

    <div class="section">
      <h2 class="title is-size-2">App Settings</h2>
      <div>
        <b-field>
          <b-switch v-model="firstTimeLogin.value">First Time Visit?</b-switch>
        </b-field>
        <b-field label="Minimum days between plans">
          <b-numberinput v-model="minDaysBetweenPlans.value"></b-numberinput>
        </b-field>
        <b-field label="Maximum plans per day">
          <b-numberinput v-model="maxPlansPerDay.value"></b-numberinput>
        </b-field>
      </div>
    </div>

    <div class="section">
      <h2 class="title is-size-2">Manual Sync Settings</h2>
      <b-field>
        <b-input v-model="dbExportJsonUrl"></b-input>
      </b-field>
      <b-field>
        <b-input v-model="dbExportBlob" type="textarea"></b-input>
      </b-field>
    </div>

    <div class="section">
      <h2 class="title is-size-2">Sync Settings (TODO)</h2>
    </div>

    <div class="section has-background-danger-light">
      <h2 class="title is-size-2 is-danger">Danger Zone!</h2>
      <b-button class="is-danger" @click="clearDatabase">
        Clear Database
      </b-button>
    </div>
  </div>
</template>

<script>
import { services } from "@aaronmyatt/relations-data-model";

export default {
  data() {
    return {
      dbExportBlob: "",
      dbExportJsonUrl: "",
      firstTimeLogin: true,
      minDaysBetweenPlans: 0,
      maxPlansPerDay: 0,
    };
  },
  async created() {
    this.dbExportJsonUrl = await services.settingService.exportDB();
    this.dbExportBlob = await services.settingService.exportDBRaw();

    this.firstTimeLogin = await services.settingService.table
      .where("name")
      .equals("firstTimeLogin")
      .first();
    this.minDaysBetweenPlans = await services.settingService.table
      .where("name")
      .equals("minDaysBetweenPlans")
      .first();
    this.maxPlansPerDay = await services.settingService.table
      .where("name")
      .equals("maxPlansPerDay")
      .first();
  },
  methods: {
    clearDatabase() {
      this.$buefy.dialog.confirm({
        title: "Are you sure?",
        message:
          "This action will clear all data from your local (browser) database",
        type: "is-danger",
        hasIcon: true,
        onConfirm: async () => {
          await services.settingService.deleteDB();
          location.reload();
        },
      });
    },
  },
};
</script>

<style>
</style>