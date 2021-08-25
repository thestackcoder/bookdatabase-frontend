<template>
  <div class="ma-10">
  <h2>Add New Author</h2>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="mt-6"
  >
    <v-text-field
      v-model="first_name"
      :rules="nameRules"
      label="Author First Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="last_name"
      :rules="nameRules"
      label="Author Last Name"
      required
    ></v-text-field>

    <v-btn
      class="mr-3"
      to="/authors"
    >< Go Back</v-btn> 

    <v-btn
      color="success"
      class="mr-4"
      @click="addTopic(first_name, last_name)"
    >
      Add Author
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
      addTopic(first_name, last_name) {
        const url = "http://localhost:8000/authors/";
        try {
            axios.post(url, {
                first_name: first_name,
                last_name: last_name,
            })
            .then(function (response) {
                console.log(response);
                if(response.statusText == 'Created'){
                    alert('New Author is created!');
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