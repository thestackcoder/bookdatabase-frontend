<template>
 <div>
  <v-btn 
  class="mt-10 ml-10" 
  color="primary"
  right
  relative
  >
    Add Storage
  </v-btn>
  <v-simple-table class="ma-10">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
           <th class="text-left">
            Storage Type
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in storages   "
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.storage_type }}</td>
          <td>
            <v-btn
              depressed
              color="primary"
              small
            >
              Edit
            </v-btn>
            <v-btn
              depressed
              color="error"
              small
              class="ml-2"
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
  export default {

    data: () => ({
      storages: []
    }),

    methods: {
      getData() {
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
          })
          .catch(function(error) {
              console.log(error);
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