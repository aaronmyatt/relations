<template>
  <div>
    <div class="card">
      <NuxtLink :to="{ name: 'contact-id', params: { id: contact.id }}">
        <header class="card-header">
          <div class="card-header-title is-capitalized">
            {{ contact.firstName }} {{ contact.lastName }}
          </div>
        </header>
        <div class="card-content">
          <div v-for="key in ['email', 'telephone']" :key="key" class="columns">
            <div class="column is-capitalized has-text-weight-bold is-hidden-">
              {{ key }}
            </div>
            <div class="column">{{ contact[key] }}</div>
          </div>
          <div class="columns">
            <div class="column is-capitalized has-text-weight-bold is-hidden-">
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
      </footer>
    </div>
  </div>
</template>

<script>
import EditContactForm from "@/components/forms/EditContactForm";
import AddEncounterForm from "@/components/forms/AddEncounterForm";
import { models } from "@aaronmyatt/relations-data-model";

export default {
  props: {
    contact: {
      type: Object,
      validator: function (value) {
        return value instanceof models.Contact;
      },
    },
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
  },
};
</script>