<template>
 <div>
  <v-btn 
  class="mt-10 ml-10" 
  color="primary"
  right
  relative
  to="/add-author"
  >
    Add Author
  </v-btn>
  <v-simple-table class="ma-10">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            First Name
          </th>
          <th class="text-left">
            Last Name
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in authors"
          :key="item.title"
        >
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>
            
            <v-btn
              depressed
              color="error"
              small
              @click="deleteAuthor(item.id)"
            >Delete
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>


<script>
  import axios from 'axios';
  export default {

    data: () => ({
      authors: []
    }),

    methods: {
      getData() {
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
              console.log(response);
              return response.json();
          })
          .then(data => {
              this.authors = data;
          })
          .catch(function(error) {
              console.log(error);
          });
        } catch (error) {
          console.log(error);
        }
      },

      deleteAuthor(author_id) {
        const url = "http://localhost:8000/authors/"+author_id+"/";
        var headers = {}
        try {
            axios.delete(url)
            .then(response => {
                confirm("Are you sure?");
                location.reload();
            });
        } catch (error) {
          console.log(error);
        }
      },
    },
    
    created() {
      this.getData();
    },
  }
</script>