<template lang="html">

  <section class="navbar-component">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img src="../assets/logo.png" height="30" alt="MDB Logo" loading="lazy"/>
          </a>
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin">Admin</a>
            </li>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="d-flex align-items-center">
          <!-- Icon -->
          <a class="text-reset me-3" @click="User" href="/cart">
            <i class="fas fa-shopping-cart"></i>
          </a>
          <!-- Avatar -->
          <div class="dropdown">
            <a class="dropdown-toggle d-flex align-items-center hidden-arrow btn btn-primary" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false" @click="logout">Logout
            </a>
          </div>
        </div>
        <!-- Right elements -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
</section>

</template>

<script lang="js">
  export default  {
    name: 'navbar-component',
    props: [],
    mounted () {

    },
    data () {
      return {
        user: [],
      }
    },
    methods: {
      logout(){
        localStorage.setItem('isLogged', 'false')
        this.$router.push('/login')
      },
      User(){
        let data = localStorage.getItem('user')
        this.user = data;
        console.log(this.user);
      }
    },
    computed: {

    }
}


</script>

<style scoped>

</style>
