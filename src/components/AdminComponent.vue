<template lang="html">

  <section class="admin-component container">
    <h1 class="text-center mb-5 mt-5">Edit Products (admin)</h1>

    <a href="/admin/create" class="btn btn-success mb-3">Create</a>

    <table class="table align-middle mb-0 bg-white ">
      <thead class="bg-light">
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items, index) in this.products" :key="index">
          <td>
            <b>{{items.title}}</b>
          </td>
          <td>
            {{items.description}}
          </td>
          <td v-if="items.amount < 20" class="text-danger">
            {{items.amount}}
          </td>
          <td v-else-if="items.amount >= 20 && items.amount <= 50" class="text-warning">
            {{items.amount}}
          </td>
          <td v-else class="text-success">
            {{items.amount}}
          </td>
          <td>
            {{items.price}}$
          </td>
          <td width="25%">
            <div class="row">
              <button class="btn btn-primary mb-1" @click="editProduct(items.id)">Edit</button>
              <button class="btn btn-danger" id="delete" @click="deleteButton(items.id)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

  </section>

</template>

<script lang="js">
  // import axios from 'axios';
  import {mapGetters} from 'vuex';
  import Swal from 'sweetalert2';

  export default  {
    name: 'admin-component',
    props: [],
    async mounted () {
      let isLogged = localStorage.getItem("isLogged");
      let isAdmin = localStorage.getItem("isAdmin");

      if (isLogged != "true") {
        this.$router.push("/login");
      }

      if (isAdmin != "true") {
        this.$router.push("/home");
      }

      this.$store.dispatch('showProducts');
  },
    data () {
      return {
        
      }
    },
    methods: {
      editProduct(id) {
        this.$router.push({path: "/admin/edit/" + id});
      },
      deleteButton(id){
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteProduct', id);
          }
        })
      },
    },
    computed: {
      ...mapGetters({
        products: 'getProducts'
      })
    }
}
</script>

<style scoped>

</style>
