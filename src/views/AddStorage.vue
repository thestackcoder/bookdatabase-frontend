<template>
  <div class="ma-10">
  <h2>Add New Storage</h2>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="mt-6"
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Storage Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="type"
      :rules="nameRules"
      label="Storage Type"
      required
    ></v-text-field>

    <v-btn
      class="mr-3"
      to="/storages"
    >< Go Back</v-btn> 

    <v-btn
      color="success"
      class="mr-4"
      @click="addStorage(name, type)"
    >
      Add Storage
    </v-btn>

  </v-form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {

    data: () => ({
        first_name: first_name,
        last_name: last_name,
    }),

    methods: {
      addStorage(name, type) {
        const url = "http://localhost:8000/storages/";
        try {
            axios.post(url, {
                name: name,
                storage_type: type,
            })
            .then(function (response) {
                console.log(response);
                if(response.statusText == 'Created'){
                    alert('New Storage is created!');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      },
    },

  }
</script>