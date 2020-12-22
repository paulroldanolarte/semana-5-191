<template>
<div id="app">
    <v-app id="inspire">
      <!-- banner -->
  <img src="imagenes/Controlador.png" class="img-fluid" alt="Responsive image">
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>PACS</v-toolbar-title>
      </v-app-bar>

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


export default {
  name: "Controlador",

  components: {
    

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

</style>