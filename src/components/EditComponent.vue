<template lang="html">

  <section class="edit-component">
    <h1 class="text-center mt-5">Edit Product</h1>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6 py-5">
          <form @submit.prevent="editProduct">
            <div class="card-body shadow-5-strong text-center">
              <p class="card-title">Title: <input type="text" name="title" class="form-control" v-model="title"></p>
              <p class="card-text"> Description:<input type="text" name="description"  class="form-control" v-model="description"></p>
              <p class="card-text">Price: <input type="number" name="price" class="form-control" v-model="price"></p>
              <p class="card-text">Amount: <input type="number" name="amount"  class="form-control" v-model="amount"></p>
              <button type="submit" class="btn btn-primary">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  // import axios from 'axios';
  import {mapGetters} from 'vuex';
  export default  {
    name: 'edit-component',
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
      // Le envio id que se envia por parametro al action
      this.$store.dispatch('getOneProduct', this.$route.params.id);
      // no se como hacer para que me muestre la data del getters en el input
      this.showData();
    },
    data () {
      return {
        title: '',
        description: '',
        price: '',
        amount: '',
      }
    },
    methods: {
      async editProduct () {
        let id = this.$route.params.id;
        let data = {
          title: this.title,
          description: this.description,
          price: this.price,
          amount: this.amount,
        }
        await this.$store.dispatch('editProduct', {id, data})
        .then(response => {
          console.log(response);
          this.$router.push("/admin");
        }).catch(error => {
          console.log(error);
        });
      },
      showData(){
        this.title = this.product.title;
        this.description = this.product.description;
        this.price = this.product.price;
        this.amount = this.product.amount;
      }
    },
    computed: {
      ...mapGetters({
        product: 'getOneProduct'
      }),
    },
}


</script>

<style scoped>

</style>
