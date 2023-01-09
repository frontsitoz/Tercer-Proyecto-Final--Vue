<template lang="html">

  <section class="create-component">
    <h1 class="text-center mt-5">Create Product</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6 py-5">
          <div class="card-body shadow-5-strong text-center">
            <p class="card-title">Title: <input type="text" name="title" v-model="title" class="form-control"></p>
            <p class="card-text"> Description:<input type="text" name="description" v-model="description" class="form-control"></p>
            <p class="card-text">Price: <input type="number" name="price" v-model="price" class="form-control"></p>
            <p class="card-text">Amount: <input type="number" name="amount" v-model="amount" class="form-control"></p>
            <button type="button" class="btn btn-primary" @click="createProduct">Create</button>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'create-component',
    props: [],
    mounted () {
      let isLogged = localStorage.getItem("isLogged");
      let isAdmin = localStorage.getItem("isAdmin");

      if (isLogged != "true") {
        this.$router.push("/login");
      }
      if (isAdmin != "true") {
        this.$router.push("/home");
      }
      
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
    async createProduct () {
      await this.$store.dispatch('createProduct', {
        title: this.title,
        description: this.description,
        price: this.price,
        amount: this.amount,
        }).then(response => {
          console.log(response);
          this.$router.push("/admin");
        }).catch(error => {
          console.log(error);
        });
      }
    },
    computed: {

    }
}
</script>

<style scoped>

</style>
