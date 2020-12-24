<template>
    <!-- precios -->
  <section>
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-4">Precios</h1>
  </div>

  <div class="container" 

  >
    <div class="card-deck mb-3 text-center"
    >
      
      <div class="card mb-4 shadow-sm"   
          v-for="(articulo, index) of articulos"
          :key="index"
          v-if="articulo.estado === 1 && articulo.categoria.nombre === 'Gestión de datos organizacionales'"
         >
        <div class="card-header"
        >
          <h4 class="my-0 font-weight-normal">{{articulo.nombre}}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">{{articulo.codigo}} <small class="text-muted">/ mes</small></h1>
          <p>
            {{articulo.descripcion}}
          </p>
        </div>

      </div>
      <!-- <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Avanzado</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$ 57.000 <small class="text-muted">/ mes</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>1200 documentos</li>
            <li>certificado digital</li>
            <li> 	Asistencia telefónica y teleconferencia en el proceso</li>
            <li>4 usuarios</li>
          </ul>
        </div>
      </div>
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Premium</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$ 160.000 <small class="text-muted">/ mes</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>6000 documentos</li>
            <li>certificado digital</li>
            <li> Asistencia telefónica y teleconferencia en el proceso</li>
            <li>6 usuarios</li>
          </ul>
        </div>
      </div> -->
    </div>
  </div>
  </section>
<!-- Fin de los precios -->
</template>
<script>
import axios from 'axios'

export default {
    name:"ValorPrecios",
    data() {
      return {
      articulos: null,
      };
    },
    mounted() {
    axios
      .get(
        "http://localhost:3000/api/articulo/list"
      )
      .then((response) => {
        // this.movies = response.data.Search.slice(0, 4);
        this.articulos = response.data
        console.log(this.articulos);
      });
  },

}

</script>

<style scoped>

</style>