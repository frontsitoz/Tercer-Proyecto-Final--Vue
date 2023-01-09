<template lang="html">

<!-- Section: Design Block -->
<section class="text-center text-lg-start" style="margin-top: 4%">
  <!-- Jumbotron -->
  <div class="container py-4">
    <div class="row g-0 align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="card cascading-right" style="
            background: hsla(0, 0%, 100%, 0.55);
            backdrop-filter: blur(30px);
            ">
          <div class="card-body p-5 shadow-5 text-center">
                <div v-if="errors.length > 0" class="alert alert-dismissible fade show alert-warning" role="alert" data-mdb-color="danger" id="customxD">
                  <p class="text-start">Errores detectados:</p>
                  <ul>
                    <div>
                      <li v-for="error in errors" :key="error.index" align="left">{{ error }}</li>
                      <button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close"></button>
                    </div>
                  </ul>
                </div>
            <h2 class="fw-bold mb-5">Sign up now</h2>
            <form @submit.prevent="ValidateData" method="POST">
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" name="name" v-model="name"/>
                    <label class="form-label" for="form3Example1">Name</label>
                  </div>
                </div>
              </div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control" name="email" v-model="email"/>
                <label class="form-label" for="form3Example3">Email address</label>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" name="password" v-model="password"/>
                <label class="form-label" for="form3Example4">Password</label>

                <router-link to="/login"  class="text-primary d-flex justify-content-end" style="margin-left: 70%;" >
                  <small>Already have an account?</small>
                </router-link>
              </div>

              <!-- Submit button -->
              <button type="submit" id="" class="btn btn-primary btn-block mb-4">
                Sign up
              </button>

              <!-- Register buttons -->
              <div class="text-center">
                <p>or sign up with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-lg-5 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
          alt=""/>
      </div>
    </div>
  </div>
  <!-- Jumbotron -->
</section>
<!-- Section: Design Block -->

</template>

<script lang="js">
  // import axios from 'axios';
  export default  {
    name: 'register-component',
    props: [],
    mounted () {

    },
    data () {
      return {
        name: '',
        email: '',
        password: '',
        errors: [],
      }
    },
    methods: {
      ValidateData (e) {
        this.errors = [];
        let nameRegex = /^[a-zA-Z]{3,}$/;
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        // ! Name
        if(!this.name) {
          this.errors.push('El nombre es requerido');
        }else if (!nameRegex.test(this.name)) {
          this.errors.push('El nombre no es valido')
        } else if (this.name.length > 8) {
          this.errors.push('El nombre debe tener como maximo 8 caracteres')
        }
        // ! Email
        if (!this.email) {
          this.errors.push('El email es requerido');
        }else if (!emailRegex.test(this.email)) {
          this.errors.push('El email no es valido')
        } else if (this.email.length > 30) {
          this.errors.push('El email debe tener como maximo 30 caracteres')
        }
        // ! Password
        if (!this.password) {
          this.errors.push('El password es requerido');
        }else if (this.password.length > 10) {
          this.errors.push('La contraseña debe tener como maximo 10 caracteres')
        }
        if (this.errors.length > 0) {
            e.preventDefault();
        } else {
            this.SendData();
        }
      },
        SendData () {
          let data = {
            name: this.name,
            email: this.email,
            password: this.password,
            isAdmin: false,
          }
          this.$store.dispatch('register', data)
          this.$router.push('/login');
        }
    },
    computed: {

    }
}
</script>

<style scoped>

.cascading-right {
  margin-right: -50px;
}

@media (max-width: 991.98px) {
  .cascading-right {
    margin-right: 0;
  }
}
  
</style>
