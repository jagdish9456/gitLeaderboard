<template>
  <div class="Login">
    <b-container>
      <b-row>
        <b-col lg="6" md="6" offset="3" class="MainCenterDiv">
          <center>
            <img alt="Vue logo" src="../assets/logo.png" />
          </center>
          <h1>Login To Your Dashboard</h1>
          <hr />
          <label for="uname">Username</label>
          <input
            type="text"
            v-model="username"
            class="form-control"
            id="uname"
            placeholder="Enter Username"
          />
          <br />
          <label for="password">Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="password"
            placeholder="Enter Password"
          />
          <br />
          <button class="btn btn-danger btn-lg" @click="LoginUser()">
            Login
          </button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { LoginUser } from "../store/api";
import { ILoginUser } from "../store/model";
import UserModule from "../store/modules/user";

Vue.use(BootstrapVue);

@Component({})
export default class Login extends Vue {
  username = "";
  password = "";
  userDetail: ILoginUser = { username: "", password: "" };

  async LoginUser() {
    await LoginUser(this.UserDetails).then(res => {
      if (res.status == "success") {
        this.$store.commit("setUsername", this.username);
        this.$store.commit("setname", res.name);
        this.$router.push("/Dashboard");
      } else {
        alert("Wrong Username or Password");
      }
    });
  }

  get UserDetails() {
    return (this.userDetail = {
      username: this.username,
      password: this.password
    });
  }
}
</script>
<style>
.MainCenterDiv {
  margin-top: 10%;
  padding: 30px;
  background: #545c7f;
}
.MainCenterDiv > h1 {
  margin-left: 7%;
}
.MainCenterDiv > img:first {
  margin-left: 15%;
}
</style>
