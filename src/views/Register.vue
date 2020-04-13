<template>
  <div class="Register">
    <b-container>
      <b-row>
        <b-col lg="6" md="6" offset="3" class="MainCenterDiv">
          <center>
            <img alt="Vue logo" src="../assets/logo.png" />
          </center>
          <h3>Register With Dev Leader Dashboard</h3>
          <hr />
          <label for="uname">Username</label>
          <input
            type="email"
            class="form-control"
            v-model="username"
            id="uname"
            placeholder="Enter Username"
          />
          <br />
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            id="password"
            placeholder="Enter Password"
          />
          <br />
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="name"
            id="name"
            placeholder="Enter your name"
          />
          <br />
          <button class="btn btn-warning btn-lg" @click="RegisterUsers()">Register</button> Or
          <a href="#" @click="RedirectToLogin().prevenDefatult()">Login</a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { RegisterUser } from "../store/api";
import { IUser } from "../store/model";

Vue.use(BootstrapVue);

@Component({})
export default class Register extends Vue {
  username = "";
  password = "";
  name = "";
  userDetail: IUser = { username: "", password: "", name: "" };

  async RegisterUsers() {
    await RegisterUser(this.UserDetail).then(res => {
        if(res.status == "success"){
            alert('User Registered');
            this.$router.push('/Login');
        }
    });
  }

  get UserDetail() {
    return (this.userDetail = {
      username: this.username,
      password: this.password,
      name: this.name
    });
  }
  RedirectToLogin() {
    this.$router.push("/Login");
  }
}
</script>
<style>
.MainCenterDiv {
  margin-top: 5%;
  padding: 30px;
  background: #545c7f;
}
.MainCenterDiv > h1 {
  margin-left: 7%;
}
.MainCenterDiv > center > img {
  width: 150px;
}
</style>