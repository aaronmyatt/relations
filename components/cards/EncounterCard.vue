<template>
  <div>
    <div class="card">
      <div class="card-content">
        <div class="content is-medium">
          <p class="is-clipped">
            {{ encounter.details | truncate(200) }}
          </p>
        </div>
        <div>
          <p>How: {{ encounter.how }}</p>
          <p>When: {{ new Date(encounter.when).toLocaleDateString() }}</p>
        </div>
      </div>
      <footer class="card-footer">
        <b-button
          @click="editEncounter(encounter)"
          class="card-footer-item is-primary is-light"
        >
          Edit
        </b-button>
      </footer>
    </div>
  </div>
</template>

<script>
import EditEncounterForm from '@/components/forms/EditEncounterForm';
import { models } from "@aaronmyatt/relations-data-model";

export default {
  props: {
    encounter: {
      type: Object,
      validator: function (value) {
        return value instanceof models.Encounter;
      },
    },
  },
  methods: {
    editEncounter(encounter) {
      this.$buefy.modal.open({
        parent: this,
        component: EditEncounterForm,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
        scroll: "keep",
        fullScreen: true,
        props: {
          encounter,
        },
      });
    },
  },
};
</script>

<style>
</style>