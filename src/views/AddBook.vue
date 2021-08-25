<template>
  <div class="ma-10">
  <h2>Add New Book</h2>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="mt-6"
  >
    <v-text-field
      v-model="first_name"
      :rules="nameRules"
      label="Title"
      required
    ></v-text-field>

    <v-select
        :items="authors"
        v-model="authors"
        label="Author"
        name="author"
        item-text="first_name"
        item-value="id"
        autocomplete 
        single-line 
        auto
    >
    </v-select>

    <v-select
        :items="topics"
        v-model="topics"
        label="Topic"
        name="topic"
        item-text="name"
        item-value="id"
        autocomplete
        single-line 
        auto
    >
    </v-select>

    <v-select
        :items="storages"
        v-model="storages"
        label="Storage"
        name="storage"
        item-text="storage_type"
        item-value="id"
        autocomplete
        single-line 
        auto
    >
    </v-select>

    <v-btn
      class="mr-3"
      to="/books"
    >< Go Back</v-btn> 

    <v-btn
      color="success"
      class="mr-4"
      @click="addTopic()"
    >
      Add Book
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
        authors: [],
        topics: [],
        storages: [],
    }),

    methods: {
      getAuthors() {

        const url = "http://localhost:8000/authors/";
        var headers = {}
        try {
            fetch(url, {
              method : "GET",
              mode: 'cors',
              headers: headers
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.error)
                }
                return response.json();
            })
            .then(data => {
                this.authors = data;
                console.log(this.authors);
            })
            .catch(function(error) {
                console.log(error);
            });
          
        } catch (error) {
          console.log(error);
        }
      },

      getTopics() {

        const url = "http://localhost:8000/topics/";
        var headers = {}
        try {
            fetch(url, {
              method : "GET",
              mode: 'cors',
              headers: headers
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.error)
                }
                return response.json();
            })
            .then(data => {
                this.topics = data;
                console.log(this.topics);
            })
            .catch(function(error) {
                console.log(error);
            });
          
        } catch (error) {
          console.log(error);
        }
      },
    

      getStorages() {

        const url = "http://localhost:8000/storages/";
        var headers = {}
        try {
            fetch(url, {
              method : "GET",
              mode: 'cors',
              headers: headers
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.error)
                }
                return response.json();
            })
            .then(data => {
                this.storages = data;
                console.log(this.storages);
            })
            .catch(function(error) {
                console.log(error);
            });
          
        } catch (error) {
          console.log(error);
        }
      },
        
      addTopic() {
          console.log(this.authors);
      },
    },

    created() {
      this.getAuthors();
      this.getStorages();
      this.getTopics();
    },

  }
</script>