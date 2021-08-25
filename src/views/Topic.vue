<template>
 <div>
  <v-btn 
  class="mt-10 ml-10" 
  color="primary"
  right
  relative
  to="/add-topic"
  >
    Add Topic
  </v-btn>
  <v-simple-table class="ma-10">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in topics"
          :key="item.id"
        >
          <td>{{ item.name }}</td>
          <td>
            <v-btn
              depressed
              color="error"
              small
              @click="deleteTopic(item.id)"
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
      topics: [],
      componentKey: 0,
    }),

    methods: {
      getData() {
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
          })
          .catch(function(error) {
              console.log(error);
          });
        } catch (error) {
          console.log(error);
        }
      },

      forceRerender() {
        this.componentKey += 1;
      },

      deleteTopic(topic_id) {
        const url = "http://localhost:8000/topics/"+topic_id+"/";
        try {
            axios.delete(url)
            .then(response => {
                confirm("Are you sure?");
                location.reload();
            }).catch(function (error) {
                console.log(error);
            });;
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