<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/Home">Home</router-link>
      <router-link to="/About">About</router-link>
    </div>
    <router-view/> -->
    <v-app id="inspire">


      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-card class="mx-auto" width="300">
          <v-list>
            <v-list-item :to="{ name: 'Home' }">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>

              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-group :value="true" prepend-icon="mdi-account-circle">
              <template v-slot:activator>
                <v-list-item-title>Users</v-list-item-title>
              </template>

              <v-list-group :value="true" no-action sub-group>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Admin</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="([title, icon, ruta], index) in admins"
                  :key="index"
                  :to="{ name: ruta }"
                >
                  <v-list-item-title v-text="title"></v-list-item-title>

                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>

              <v-list-group no-action sub-group>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Actions</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="([title, icon, ruta], index) in cruds"
                  :key="index"
                  :to="{ name: ruta }"
                >
                  <v-list-item-title v-text="title"></v-list-item-title>

                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
            </v-list-group>
          </v-list>
        </v-card>
      </v-navigation-drawer>

      <v-main >
          <router-view> </router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";


export default {
  name: "App",

  components: {
    HelloWorld,
   
  },

  data: () => ({
    drawer: null,
    admins: [
      ["Categoria", "mdi-account-multiple-outline", "Categoria"],
      ["Articulo", "mdi-cog-outline", "Articulo"],
    ],
    cruds: [["Usuarios", "mdi-plus-outline", "Usuario"]],
  }),
};
</script>

<style>

body {
  font-family: "Titillium Web", sans-serif;
}

h1 {
  font-size: 66px;
  font-weight: 600;
  line-height: 80px;
}
h2 {
  font-size: 48px;
  margin-bottom: 30px;
}
p {
  font-size: 18px;
  color: #546e7a;
  line-height: 1.8;
  margin-bottom: 0;
}

.topmargin-xs {
  margin-top: 15px;
}
.topmargin-sm {
  margin-top: 30px;
}
.topmargin-lg {
  margin-top: 60px;
}

section {
  padding: 60px 0;
}

.bg-light-grey {
  background-color: #f5f5f5;
}

.btn {
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
.btn-light:hover {
  background-color: #26c6da;
}

.btn i {
  font-size: 14px;
  margin-left: 10px;
}

.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  min-height: 100px;
}

.nav-link {
  color: #1a1a1a;
}
.nav-link:hover {
  color: #26c6da;
}

.logo-brand {
  min-width: 160px;
  max-width: 180px;
}
.navbar-toggler {
  font-size: 40px;
}
.navbar-toggler:focus {
  outline: none;
}

#hero {
  background-image: url("../src/assets/imagenes/baner3.jpg");
  background-size: cover;
  padding-top: 190px;
  min-height: 600px;
  position: relative;
  color: #ffffff;
}

#hero:before {
  content: "";
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#hero p {
  color: #ffffff;
  font-size: 25px;
  position: relative;
}
#hero h1 {
  position: relative;
}

.content-center {
  max-width: 800px;
  margin: 0 auto 60px auto;
  text-align: center;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  padding: 0;
  margin: 0;
}

.flex-item {
  padding: 5px;
  width: 600px;
  line-height: 30px;
  text-align: justify;
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

.iServicio {
  -moz-transition: all 0.8s;
  -webkit-transition: all 0.8s;
  transition: all 0.8s;
}

.iServicio:hover {
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

/* giro de cartas  */

.flip-card {
  background-color: transparent;
  width: 270px;
  height: 350px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: lightgray;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: #455a64;
  color: white;
  transform: rotateY(180deg);
}

.margento {
  margin: 1em;
}

@media (max-width: 575.98px) {
  h1 {
    font-size: 40px;
    line-height: normal;
  }
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
  .img {
    width: 50%;
  }
}
</style>