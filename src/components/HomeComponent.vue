<template lang="html">

  <div class="container">
    <div class="row">
      <div v-for="(item, index) in this.products" :key="index" class="col-md py-5">
        <div class="col-md">
          <div class="card-body shadow-5-strong">
            <h5 class="card-title"><b>{{item.title}}</b></h5>
            <p class="card-text fst-italic" style="font-size: 90%">{{item.description}}</p>
            <p class="card-text">Price: {{item.price}}$</p>
            <p class="card-text">Amount: {{item.amount}} units</p>
            <label for="">Cantidad al Carrito</label>
            <input type="number" v-model="item.amount" :max="item.amount"/>
            <button type="button" class="btn btn-primary" @click="addToCart(item)">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import {mapGetters} from 'vuex';

  export default  {
    name: 'home-component',
    props: [],
    async mounted () {
      let isLogged = localStorage.getItem("isLogged");

      if (isLogged != "true") {
        this.$router.push("/login");
      }
      this.$store.dispatch('showProducts');
    },
    data () {
      return {
        
        }
    },
    methods: {
      addToCart (item) {
        let payload = {
          productId: item.id,
          amount: item.amount,
          userId: this.auth.id,
        }
        this.$store.dispatch('addToCart', payload);
      }
    },
    computed: {
      ...mapGetters({
        products: 'getProducts',
        auth: 'auth'
      })
    }
}


</script>

<style scoped>

</style>
