<template>
     <!-- Portafolio de Servicios -->
    <section id="services">
    <div class="container-fluid">
      <div class="content-center">
        <h2>Trabajamos para ofrecerte los <br> <b>mejores servicios.</b></h2>
      </div>
      <!-- servicio1-->
      <div class="iServicio">
        <div class="card mb-3 border-info"
          style="max-width: 1540px; margin-bottom: 15px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5) ; background-color:#E0F7FA;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="imagenes/servicio1.jpg" class="img-fluid" alt="servicio1">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title">Facturación Electrónica</h3>
                <p class="card-text">Es la factura electrónica PACS creada para la emisión de documentos
                  electrónicos.<br> Esta solución ofrece un panorama real y unificado sobre las operaciones a nivel de
                  la administración de las relaciones con los clientes, las facturas y las finanzas</p> <br> <br>
                <router-link to="/Servicio1"> <button type="button" class="btn btn-outline-info"> Mas información..</button></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- servicio 2 -->
      <div class="iServicio">
        <div class="card mb-3 border-info"
          style="max-width: 1540px; margin-bottom: 15px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5) ; background-color: #E1F5FE">
          <div class="row no-gutters">
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title">Gestión de datos organizacionales</h3>
                <p class="card-text">Maximice el valor de todos los datos estructurados y no estructurados de su organización..</p> <br> <br>
                <button type="button" class="btn btn-outline-info">Mas información..</button>
              </div>
            </div>
            <div class="col-md-4">
              <img src="imagenes/servicio2.jpg" class="img-fluid" alt="servicio2">
            </div>
          </div>
        </div>
      </div>
      <!-- servicio 3 -->
      <div class="iServicio">
        <div class="card mb-3 border-info"
          style="max-width: 1540px; margin-bottom: 15px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5) ; background-color:#E0F7FA;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="imagenes\servicio3.jpg" class="img-fluid" alt="servicio3">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title">Seguridad y distribución de datos</h3>
                <p class="card-text">Podemos ayudarle a crear políticas de privacidad, establecer los procedimientos y controles operativos usando una perspectiva técnica, normativa y legal..</p> <br> <br>
                <button type="button" class="btn btn-outline-info">Mas información..</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  
  <!-- fin de los servicios -->
</template>

<script>
export default {
    name: "PortafolioServicios"
    
}
</script>

<style scoped>

</style>