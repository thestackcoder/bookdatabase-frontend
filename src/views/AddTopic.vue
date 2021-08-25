<template>
  <div class="ma-10">
  <h2>Add New Topic</h2>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="mt-6"
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Topic Name"
      required
    ></v-text-field>

    <v-btn
      class="mr-3"
      to="/topics"
    >< Go Back</v-btn> 

    <v-btn
      color="success"
      class="mr-4"
      @click="addTopic(name)"
    >
      Add Topic
    </v-btn>

  </v-form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {

    data: () => ({
        name: name
    }),

    methods: {
      addTopic(topic_name) {
        const url = "http://localhost:8000/topics/";
        try {
            axios.post(url, {
                name: topic_name,
            })
            .then(function (response) {
                console.log(response);
                if(response.statusText == 'Created'){
                    alert('New Topic is created!');
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