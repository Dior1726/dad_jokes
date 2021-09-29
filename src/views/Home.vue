<template>
  <div class="home d-flex justify-center align-center">
    
    <div class="home__box my-10">
      <v-card
        class="mx-auto mb-5"
        color="rgba(255, 255, 255, .1)"
        dark
        max-width="400"
        elevation="3"
        v-for="joke in jokes"
        :key="joke.id"
      >
        <v-card-title class="justify-end text-subtitle-2 grey--text text--lighten-1">
          {{joke.id}}
        </v-card-title>
        <v-card-text class="text-body-1 white--text">
          "{{joke.joke}}"
        </v-card-text>

        <v-card-actions>
          <v-btn icon @click="addFavouriteJoke(joke)">
            <v-icon :class="{'red--text': joke.isFavourite}" >mdi-heart</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      
      <div class="d-flex justify-center">
        <v-btn 
          @click="getJokes()" 
          dark
          color="teal"
          large
        >
          Загрузить ещё
        </v-btn>
      </div>
    </div>

  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data: () => ({}),
  mounted() {},
  components: {},
  methods: {
    ...mapActions(['get_jokes', 'add_favourite_jokes']),
    getJokes() {
      this.get_jokes()
    },
    addFavouriteJoke(joke) {
      this.add_favourite_jokes(joke)
      this.$forceUpdate()
    }
  },
  computed: {
    ...mapGetters(['jokes']),
  }
}


</script>

<style lang="scss">
.home {
  height: 100%;

  &__btn {
    position: fixed;
    right: 3rem;
    bottom: 3rem;
  }
}
</style>
