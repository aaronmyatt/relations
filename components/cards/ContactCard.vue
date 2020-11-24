<template>
  <div>
    <div class="card">
      <NuxtLink :to="{ name: 'contact-id', params: { id: contact.id } }">
        <header class="card-header">
          <div class="card-header-title is-capitalized">
            {{ contact.firstName }} {{ contact.lastName }}
          </div>
        </header>
        <div class="card-content">
          <div class="columns is-mobile is-gapless mb-1">
            <div
              class="column is-capitalized has-text-weight-bold is-hidden-mobile"
            >
              Email
            </div>
            <div class="column">{{ contact.email }}</div>
          </div>
          <div class="columns is-mobile is-gapless mb-1">
            <div
              class="column is-capitalized has-text-weight-bold is-hidden-mobile"
            >
              Phone
            </div>
            <div class="column">{{ contact.telephone }}</div>
          </div>
          <div class="columns is-mobile is-gapless mb-1">
            <div
              class="column is-capitalized has-text-weight-bold is-hidden-mobile"
            >
              Birthday
            </div>
            <div class="column">
              {{
                contact.birthday
                  ? new Date(contact.birthday).toLocaleDateString()
                  : ""
              }}
            </div>
          </div>
        </div>
      </NuxtLink>
      <footer class="card-footer">
        <b-button
          @click="editContact(contact)"
          class="card-footer-item is-primary is-light"
        >
          Edit
        </b-button>
        <b-button
          @click="addEncounter(contact)"
          class="card-footer-item is-info is-light"
        >
          Add Encounter
        </b-button>
        <b-button
          v-if="!futurePlans"
          @click="addPlan(contact)"
          class="card-footer-item is-text"
        >
          Add Plan
        </b-button>
      </footer>
    </div>
  </div>
</template>

<script>
import EditContactForm from "@/components/forms/EditContactForm";
import AddEncounterForm from "@/components/forms/AddEncounterForm";
import AddPlanForm from "@/components/forms/AddPlanForm";
import { models, services } from "@aaronmyatt/relations-data-model";

export default {
  props: {
    contact: {
      type: Object,
      validator: function (value) {
        return value instanceof models.Contact;
      },
    },
  },
  data() {
    return {
      futurePlans: null,
    };
  },
  async mounted() {
    this.futurePlans = await this.contactHasFuturePlans();
  },
  methods: {
    editContact(contact) {
      this.$buefy.modal.open({
        parent: this,
        component: EditContactForm,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
        scroll: "keep",
        fullScreen: true,
        props: {
          contact,
        },
      });
    },
    addEncounter(contact) {
      this.$buefy.modal.open({
        parent: this,
        component: AddEncounterForm,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
        scroll: "keep",
        fullScreen: true,
        props: {
          contact,
        },
      });
    },
    addPlan(contact) {
      const modal = this.$buefy.modal.open({
        parent: this,
        component: AddPlanForm,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
        scroll: "keep",
        fullScreen: true,
        props: {
          contact,
        },
        events: {
          close: async () => {
            this.futurePlans = await this.contactHasFuturePlans();
          },
        },
      });
    },
    contactHasFuturePlans() {
      return services.planService.fetchFutureFor(this.contact).first();
    },
  },
};
</script>