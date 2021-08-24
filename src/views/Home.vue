<template>
  <div class="ma-10">
  <h1>BookShelf Database</h1>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="mt-6"
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Search"
      required
    ></v-text-field>

    <v-btn
      color="success"
      class="mr-4"
      @click="search"
    >
      Search
    </v-btn>

  </v-form>
  </div>
</template>