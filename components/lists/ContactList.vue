<template>
    <div>
      <b-autocomplete
          rounded
          v-model="query"
          :data="searchContacts"
          placeholder="e.g. aaron"
          icon="magnify"
          field="fullName"
          clearable
          open-on-focus
          @select="option => searchItemClicked(option)">
          <template slot="empty">No results found</template>
          <template slot-scope="props">
              <div class="media">
                  <div class="media-left">
                      <img width="32" src="https://picsum.photos/32">
                  </div>
                  <div class="media-content">
                      <div class="is-capitalized">{{ props.option.fullName }}</div>
                      <small>
                          Email: {{ props.option.email }}
                      </small>
                  </div>
              </div>
          </template>
      </b-autocomplete>
      <ul>
        <li class="mt-4" v-for="contact in contacts" :key="contact.id">
          <ContactCard :contact="contact" />
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data(){
    return {
      query: "",
    }
  },
  created() {
    if(this.contact){
      
    } else {
      this.$store.dispatch('contacts/load');
    }
  },
  computed: {
    contacts() {
      return this.$store.state.contacts.all;
    },
    searchContacts(){
      return this.contacts.filter(contact => {
        return contact.firstName.toLowerCase().startsWith(this.query);
      })
    }
  },
  methods: {
    searchItemClicked(contact){
      this.$router.push({
        name: "contact-id",
        params: {
          id: contact.id
        }
      })
    }
  }
};
</script>