<template>
 <div>
  <v-btn 
  class="mt-10 ml-10" 
  color="primary"
  right
  relative
  to="/add-book"
  >
    Add Book
  </v-btn>
  <v-simple-table class="ma-10">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Title
          </th>
          <th class="text-left">
            Author
          </th>
          <th class="text-left">
            Topic
          </th>
          <th class="text-left">
            Storage
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in books"
          :key="item.title"
        >
          <td>{{ item.title }}</td>
          <td>{{ item.author_firstname }}</td>
          <td>{{ item.topic_name }}</td>
          <td>{{ item.storage_name }}</td>
          <td>
            <v-btn
              depressed
              color="error"
              small
              @click="deleteBook(item.id)"
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
      books: []
    }),

    methods: {
      getData() {
        const url = "http://localhost:8000/books/";
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
              this.books = data;
          })
          .catch(function(error) {
              console.log(error);
          });
        } catch (error) {
          console.log(error);
        }
      },

      deleteBook(book_id) {
        const url = "http://localhost:8000/books/"+book_id+"/";
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