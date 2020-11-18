<template>
  <b-navbar class="has-background-light" shadow>
      <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <span class="icon is-size-3 has-text-weight-bold">R</span>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item>
                <b-button 
                    icon-left="account-plus"
                    class="is-success"
                    @click="openContactFormModal">
                    Add Contact
                </b-button>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/settings' }">
                Settings
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import AddContactModal from '@/mixins/AddContactModal';

export default {
    mixins: [AddContactModal]
}
</script>