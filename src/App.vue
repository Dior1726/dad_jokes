<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <v-toolbar-title>Dad Jokes</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :to="{name: 'Home'}" class="mr-5" exact>
        Home
      </v-btn>

      <v-btn :to="{name: 'Favourite'}">
        Favourite Jokes
      </v-btn>
    </v-app-bar>

    <v-main >
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  mounted() {
    this.get_jokes()
  },
  methods: {
    ...mapActions(['get_jokes'])
  }
};
</script>

<style lang="scss">
main {
  background-color: rgb(66, 92, 90);
}
</style>
