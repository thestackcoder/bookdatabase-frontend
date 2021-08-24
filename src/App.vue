<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          to="/"
        >
          <v-icon></v-icon> Home
        </v-tab>
        <v-tab
          to="/books"
        >
          Books
        </v-tab>
        <v-tab
          to="/authors"
        >
          Authors
        </v-tab>
        <v-tab
          to="/topics"
        >
          Topics
        </v-tab>
        <v-tab
          to="/storages"
        >
          Storages
        </v-tab>
      </v-tabs>

    </v-app-bar>

    <v-main class="grey lighten-3">
      <router-view></router-view>
      <v-container>
        <v-row>
            
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { mdiHome } from '@mdi/js';
  export default {
    data: () => ({
      icons: {
        mdiHome
      }
    }),
  }
</script>