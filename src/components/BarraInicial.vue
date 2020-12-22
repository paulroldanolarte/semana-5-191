<template>
     
<nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <router-link to="/"><img class="logo-brand" src="imagenes/logo.jpeg" alt="logo"></router-link>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#quienSomos">Quienes Somos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#perfiles">Nuestro equipo de trabajo</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Servicios
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
            <router-link to="/Servicio1">Facturación Electrónica</router-link>
            <div class="dropdown-divider"></div>
            <router-link to="/Servicio2">Gestión de Datos</router-link>
            <div class="dropdown-divider"></div>
            <router-link to="/Servicio3">Seguridad de datos</router-link>
          </div>
        </li>
         <li class="nav-item">
         <a class="navbar-brand" href="#"><router-link to="/Login">Login</router-link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>


</template>

<script>
export default {
    name:"BarraInicial",
    
}
</script>

<style scoped>

</style>