<template lang="html">

<!-- Section: Design Block -->
<section class="text-center text-lg-start container" style="margin-top: 5%">
  <div class="card mb-3">
    <div class="row g-0 d-flex align-items-center">
      <div class="col-lg-4 d-none d-lg-flex">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
          class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
      <div class="col-lg-8">
        <div class="card-body py-5 px-md-5">
            <div v-if="errors.length > 0" class="alert alert-dismissible fade show alert-warning" role="alert" data-mdb-color="danger" id="customxD">
              <p class="text-start">Errores detectados:</p>
                <ul>
                  <div>
                    <li v-for="error in errors" :key="error.index" align="left">{{ error }}</li>
                    <button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close"></button>
                  </div>
                </ul>
              </div>
          <form @submit.prevent="login">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="form2Example1" class="form-control" name="email" v-model="email"/>
              <label class="form-label" for="form2Example1">Email address</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" name="password" v-model="password"/>
              <label class="form-label" for="form2Example2">Password</label>
            </div>

            <!-- 2 column grid layout for inline styling -->
            <div class="row mb-4">
              <div class="col">
                <!-- Simple link -->
                <router-link to="/register" class="text-primary d-flex justify-content-end" style="margin-left: 70%;">Not registered?</router-link>
              </div>
            </div>

            <!-- Submit button -->
            <button type="sumbit" class="btn btn-primary btn-block mb-4">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Section: Design Block -->

</template>

<script lang="js">
  import {mapGetters} from 'vuex'
  export default  {
    name: 'login-component',
    props: [],
    // Es el hook que se ejecuta nada más renderizar e incluir el componente en el DOM. Nos puede ser muy útil para inicializar librerías externas. Imagínate que estás haciendo uso, dentro de un componente de VueJS, de un plugin de jQuery.
    mounted () { 
  
    },
    data () {
      return {
        email: '',
        password: '',
        errors: [],
      } 
    },
    methods: {
      login () {
        this.$store.dispatch('login')

        let data = this.getUsers.find((x) => x.email === this.email && x.password === this.password);
        
        localStorage.clear();
        
        if (data) {
          this.$store.commit('SET_CURRENT_USER', data)
          localStorage.setItem("isLogged", "true");
          localStorage.setItem("user", JSON.stringify(data));
          
          if (data?.isAdmin) {
            localStorage.setItem("isAdmin", "true");
            this.$router.push("/admin");
          } else {
            localStorage.setItem("isAdmin", "false");
            this.$router.push("/home");
          } 
        } else {
            this.errors.push("Usuario o contraseña incorrectos");
          }
      }
    },
    computed: {
      ...mapGetters({
        getUsers: 'getUsers'
      })
    }
}
</script>

<style scoped>
.rounded-t-5 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

@media (min-width: 992px) {
  .rounded-tr-lg-0 {
    border-top-right-radius: 0;
  }

  .rounded-bl-lg-5 {
    border-bottom-left-radius: 0.5rem;
  }
}
</style>
