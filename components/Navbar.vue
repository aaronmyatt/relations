<template>
  <b-navbar class="has-background-light" shadow>
        <template slot="start">
            <b-navbar-item href="/">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Add Contact
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item>
                <b-button @click="clearDatabase">Clear Database</b-button>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>