<template>
<div id="app">
<!-- BarraInicial -->
<barra-inicial></barra-inicial>
<!-- banner -->
<img src="imagenes/seguridad/banerseg.png" class="img-fluid" alt="Responsive image">
<!-- contenidoservicio -->
<contenido-seguridad></contenido-seguridad>
<!-- precios -->
<tercer-servicio></tercer-servicio>
<!-- pageFooter -->
<page-footer></page-footer>
</div>
</template>

<script>
import ContenidoSeguridad from '../components/auth2/ContenidoSeguridad.vue'
import TercerServicio from '../components/auth2/tercerServicio.vue'
// import ValorPrecios from '../components/auth2/ValorPrecios.vue'
import BarraInicial from '../components/BarraInicial.vue'
import PageFooter from '../components/pageFooter.vue'

export default {
  components: { BarraInicial, TercerServicio , PageFooter, ContenidoSeguridad},
    
}
</script>

<style>
body {
    font-family: 'Titillium Web', sans-serif;
}

h1 {font-size: 66px; font-weight: 600; line-height: 80px; }
h2 {font-size: 48px; margin-bottom: 30px;}
p {font-size: 18px;
color: #546E7A;
line-height: 1.8;
margin-bottom: 0;
}

.topmargin-xs {margin-top: 15px}
.topmargin-sm {margin-top: 30px}
.topmargin-lg {margin-top: 60px}

section {
    padding: 60px 0;

}

.bg-light-grey {background-color: #f5f5f5;}

.btn{
    font-size: 14;
    padding: 15px 26px;
    min-width: 160px;
    border-radius: 2px;
    display: inline-block;
    position: relative;
}
.btn-light {
    background-color: #ffffff;
    color: #1a1a1a;
    border: 2px solid;
    position: relative;
}
.btn-light:hover{
    background-color: #26C6DA;
}

.btn i {font-size: 14px; margin-left: 10px;}

.navbar {
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5) ;
    min-height: 100px;

}

.nav-link{
    color: #1a1a1a;
}
.nav-link:hover{
   color: #26C6DA
}

.logo-brand {
    min-width: 160px ;
    max-width: 180px ;
}
.navbar-toggler {font-size: 40px;}
.navbar-toggler:focus {outline: none;}

.img-fluid {
    max-width: 100%;
    height: auto;
}


.content-center {
    max-width: 800px;
    margin: 0 auto 60px auto;
    text-align:center;
}

.flex-container {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content:space-between;
    align-items: center;
    align-content: space-between;
    padding: 0;
    margin: 0;
}

.flex-item {

    padding: 5px;
    max-width: 600px;
    line-height: 30px;
    text-align: justify;
}

.flex-item img {
    max-width: 600px;
}


.portafolio-container {
    position: relative;
    overflow: hidden;
    margin: 10px 0;
    border-radius: 2px;
}

.portafolio-container img {
    -moz-transition: all 0.8s;
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
}

.portafolio-container:hover img {
    -moz-transforms: scale(1.2);
    -webkit-tranform: scale(1.2);
    transform: scale(1.2);
}

.card-text {
    font-size: 23px;
    text-align: left;
}


.iServicio {
    align-items: center;
    margin-left: 15px;
}

.iServicio  {
    -moz-transition: all 0.8s;
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
}

.iServicio:hover  {
    -moz-transforms: scale(1.05);
    -webkit-tranform: scale(1.05);
    transform: scale(1.05);
}

.team-container {
    position: relative;
    margin: 10px 0;
}

.team-details {
    position: absolute;
    color: white;
    bottom: 0px;
    margin: 40px;

}

#footer {
    padding: 30px 0;
    text-align: justify;
    color: white;
}
#footer p {
    color: white;
}



@media (max-width: 575.98px) {
    h1{font-size: 40px; line-height: normal;}
 }

 @media (min-width: 576px) and (max-width: 767.98px) {
     .img {
         width: 100%;
     }
  }

@media (min-width: 768px) and (max-width: 991.98px) {

 }

@media (min-width: 992px) and (max-width: 1199.98px) {

 }

@media (min-width: 1200px) {
    .img{
        width: 50%;
    }
}
</style>