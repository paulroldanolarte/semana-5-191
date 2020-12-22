<template>
  <div class="container-fluid">
  <div class="row no-gutter">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4">Bienvenido !</h3>
			  
              <form>
                <div class="form-label-group">
				
                  <input 
				  v-model="login.email" 
				  type="email" 
				  id="inputEmail" 
				  class="form-control" 
				  placeholder="Email address" required autofocus>
				  
                  <label for="inputEmail">Email address</label>
				  
                </div>

                <div class="form-label-group">
				
                  <input
				  v-model="login.password" 
				  type="password" 
				  id="inputPassword" 
				  class="form-control" 
				  placeholder="Password" required>
				  
                  <label for="inputPassword">Password</label>
                </div>

				
                <button 
				@click.prevent="loginUser"
				class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">
				Sign in</button>
				
              </form>
			  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import swal from 'sweetalert';

export default {
  name: "TheLogin",
  data() {
    return {
        login:{
            email:'',
            password: '',

        }
    };
  },
  methods: {
      async loginUser (){
          try {
              // let response = await this.$http.post('/api/usuario/login', this.login)

              let response = await this.$http.post('/api/usuario/login', this.login)
            //   console.log(response.data)
              // let token = response.data.tokenReturn;
              let token = response.data.accessToken;
              let user = response.data.user;

              localStorage.setItem('jwt',token);
              localStorage.setItem('user', JSON.stringify(user));
              if(token){
                  swal("Éxito", "Login correcto!", "success");
                   this.$router.push('/').catch(()=>{});
                  //  this.$router.push({path:'Servicio1'});
              }
                  
              
          } catch (e) {
              swal("Oops", "Algo salio mal!", "error");

            //   console.log(err.response)
          }
      }

  },
};
</script>

<style scoped>

body {
  height: 100%;
}

#logincs {
   background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>