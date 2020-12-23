<template>
  <div id="app">
   <!-- barra inicial -->
  <div>
    <barra-inicial></barra-inicial>
  </div>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <!-- quien somos -->
  <div>
  <quien-somos></quien-somos>
  </div>
<!-- Portafolio -->
<div>
<portafolio-servicios></portafolio-servicios>
</div>
<!-- WorkTeam -->
<div>
  <work-team></work-team>
</div>

<!-- footer  -->
  <div>
    <page-footer></page-footer>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import QuienSomos from '../components/quienSomos.vue'
import PortafolioServicios from '../components/portafolioServicios.vue'
import WorkTeam from '../components/workTeam.vue'
import PageFooter from '../components/pageFooter.vue'
import BarraInicial from '../components/BarraInicial.vue'



export default {
  name: 'Home',
  components: {
    HelloWorld,
    QuienSomos,
    PortafolioServicios,
    WorkTeam,
    PageFooter,
    BarraInicial,
   
  }
}
</script>

<style >

</style>