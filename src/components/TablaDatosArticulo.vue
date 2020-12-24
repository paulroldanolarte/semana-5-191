<template>
  <v-data-table
    :headers="headers"
    :items="articulos"
    sort-by="id"
    class="elevation-1"
    :loading ="cargando"
    loading-text="Loading... Please wait"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Articulos</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Agregar Articulo
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>

                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.id"
                      label="Id"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="nombre"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      v-model="editedItem.descripcion"
                      label="Descripción"
                      auto-grow
                      no-resize
                      counter="250"
                    ></v-textarea>
                  </v-col>

                  <v-col cols="12">
                    <v-select
                      v-model="categoria"
                      label="Categoria"
                      :items="categorias"
                      item-text="nombre"
                      item-value="id"
                      return-object
                    ></v-select>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.codigo"
                      label="Precio"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.estado"
                      label="Estado"
                    ></v-text-field>
                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
            <!-- <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      ></v-switch> -->
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>

      <v-icon medium @click="deleteItem(item)"
      > 
      <template v-if="item.estado">
          mdi-toggle-switch
      </template>
      <template v-else>
          mdi-toggle-switch-off-outline 
      </template>
      </v-icon>

    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="list"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    cargando: true,
    headers: [
      { text: "Id", value: "id" },
      {
        text: "Articulo",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Precio", value: "codigo" },
      { text: "Categoria", value: "categoria.nombre" },
      { text: "Descripción", value: "descripcion" },
      { text: "Estado", value: "estado" },
      { text: "Actions", value: "actions", soportable: false },
    ],
    articulos: [],
    categorias: [],
    categoria:'',
    editedIndex: -1,
    editedItem: {
      id: 0,
      nombre: "",
      descripcion: "",
      codigo:'',
      estado: 0,
      categoria: {
        id:0,
        nombre:'',
        estado: 0
      }
    },
    defaultItem: {
      id: 0,
      nombre: "",
      descripcion: "",
      codigo:'',
      estado: 0,
      categoria: {
        id:0,
        nombre:'',
        estado:0
      }
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.list();
    this.listCategorias();
  },

  methods: {
    
    list() {
      axios
        .get("http://localhost:3000/api/articulo/list", {
          headers:{
            token: this.$store.state.token
          }
        })

        .then((response) => {
          this.articulos = response.data;
          this.cargando = false;
        })

        .catch((error) => {
          console.log(error);
        });
    },
    listCategorias() {
      axios
        .get("http://localhost:3000/api/categoria/list", {
          headers:{
            token: this.$store.state.token
          }
        })

        .then((response) => {
          this.categorias = response.data;
        })

        .catch((error) => {
          console.log(error);
        });
    },

    editItem(item) {
      //this.editedIndex = this.categorias.indexOf(item)
      this.editedIndex = item.id
      //comparador ternario
      this.categoria = item? item.categoria : '';
      this.editedItem = Object.assign({}, item)
      this.dialog = true;

    },

    deleteItem(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {

      if (this.editedItem.estado === 1) {
        //put
        axios.put("http://localhost:3000/api/articulo/deactivate", {
            "id": this.editedItem.id,
          },{
          headers:{
            token: this.$store.state.token
          }
        })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      } else {
        //POST
        axios.put("http://localhost:3000/api/articulo/activate", {
            "id": this.editedItem.id,
          },{
          headers:{
            token: this.$store.state.token
          }
        })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      }

      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        //put
        axios.put("http://localhost:3000/api/articulo/update", {
            "id": this.editedItem.id,
            "nombre": this.editedItem.nombre,
            "descripcion": this.editedItem.descripcion,
            "codigo":this.editedItem.codigo,
            "categoria": this.categoria.id,
            //"categoriaId": this.categoria.id,
          }, {
          headers:{
            token: this.$store.state.token
          }
        })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      } else {
        //POST
        axios.post("http://localhost:3000/api/articulo/add", {
            "estado": 1,
            "nombre": this.editedItem.nombre,
            "descripcion": this.editedItem.descripcion,
            "codigo":this.editedItem.codigo,
            "categoriaId": this.categoria.id,
          }, {
          headers:{
            token: this.$store.state.token
          }
        })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      }
      this.close();
    },
  },
};
</script>