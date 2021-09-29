<template>
  <div class="favourite d-flex align-start flex-column">
    <div class="search__area">
      <v-text-field
        label="Search..."
        color="white"
        class="white--text"
        dark
        hide-details="auto"
        v-model.trim="text"
        @input="filteredJokes()"
      ></v-text-field>
    </div>
    <div class="pa-5 favourite__box">
      <v-card
        width="300"
        class="mx-auto mb-5"
        color="rgba(255, 255, 255, .1)"
        dark
        max-width="400"
        elevation="3"
        v-for="joke in searchedJokes"
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
            <v-icon :class="{'red--text': joke.isFavourite}">mdi-heart</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'favourite',
  data: () => ({
    text: '',
    filterJokes: []
  }),
  mounted() {},
  methods: {
    ...mapActions(['add_favourite_jokes']),
    addFavouriteJoke(joke) {
      this.add_favourite_jokes(joke)
    },
    filteredJokes() {
      this.favourite_jokes.forEach( elem => {
        if (elem.joke.includes(this.text)) {
          if(!this.filterJokes.includes(elem)) {
            this.filterJokes.push(elem)
          } else {
            this.filterJokes = []
          }
        }
      })
    }
  },
  computed: {
    ...mapGetters(['favourite_jokes']),
    searchedJokes() {
      if (this.text) {
        return this.filterJokes
      } 
      return this.favourite_jokes
    }
  }
}


</script>

<style lang="scss" scoped>
.favourite {
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  &__box {
    width: 100%;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
  }
}

.search__area {
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
