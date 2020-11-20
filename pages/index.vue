<template>
  <div class="container">
    <h1 class="is-size-1">Relations</h1> 
    <div class="container mt-6 columns">
      <div class="column is-one-third">
        <div class="level pr-4">
          <h2 class="is-size-2">Contacts</h2>
          <b-button 
            icon-left="account-plus"
            class="is-success"
            @click="openContactFormModal">
              Add
          </b-button>
        </div>
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
import AddContactModal from '@/mixins/AddContactModal';

export default {
  mixins: [AddContactModal],
  async created(){
    const firstTimeLogin = await services.settingService.table
      .where("name")
      .equals("firstTimeLogin")
      .first();
    
    if(firstTimeLogin.value){
      this.firstTimeAlert();
      firstTimeLogin.value = false;
      services.settingService.updateOne(firstTimeLogin)
    }
  },
  methods: {
    firstTimeAlert() {
      this.$buefy.dialog.alert({
          type: "is-info",
          size: "is-large",
          title: 'Welcome to Relations!',
          message: 'The intentionally simple network management app. <br /> <br /> Add contacts, plan encounters, take notes. <br /> <br /> Build better Relations.',
          confirmText: 'Get Started!'
      })
    },
  }
};
</script>