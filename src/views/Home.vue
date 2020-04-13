<template>
  <div class="home">
    <center>
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Developer LeaderBoard" />
      <button class="btn btn-success" @click="RedirectToLogin()">Login !</button>
      <button class="btn btn-info register" @click="RedirectToRegister()">Register !</button>
    </center>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    RedirectToLogin() {
      this.$router.push("/Login");
    },
    RedirectToRegister() {
      this.$router.push("/Register");
    }
  }
};
</script>
<style scoped>
.register {
  margin-left: 15px;
}
</style>
