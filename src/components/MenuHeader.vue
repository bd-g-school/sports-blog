<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand no-hover" href="#"><img src="@/assets/man.jpg" class="menu-image"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/competitions">Competitions</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/stats">Crazy Stats</router-link>
        </li>
        <!-- <li class="nav-item dropdown bg-black">
          <a class="nav-link dropdown-toggle bg-black" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Competitions
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/competitions">Past Competitions</router-link>
          </div>
        </li>  -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MenuHeader',
  beforeMount() {
    let bootstrap = document.createElement('script');
    bootstrap.setAttribute('src', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js');
    bootstrap.setAttribute('integrity', 'sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy');
    bootstrap.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(bootstrap)
  },
}
</script>

<style scoped>
.menu-image {
  height: 35px;
}
.navbar-light, .dropdown-menu {
  background-color: #C5C6C7 !important;
}
.nav-item {
  border-left: 1px solid black;
}
.nav-item a.router-link-exact-active {
  text-decoration: underline !important;
  background-color: #C5C6C7 !important;
  color: black !important;
}
.nav-link:hover {
  background-color: white;
}
.nav-link {
  color: black !important;
}

@media only screen 
and (max-device-width: 600px)
{ 

.nav-item {
  border: none;
}

}
</style>