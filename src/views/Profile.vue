<template>
  <div class="main-container">
    <!-- HEADER -->
    <TopHeader></TopHeader>
    <b-col lg="4" style="float:left">
    <div class="middle-container container" style="margin: 0px 0px;">
      <div class="profile block">
        <!-- PROFILE (MIDDLE-CONTAINER) -->
        <a class="add-button" href="#28">
          <span class="icon entypo-pencil scnd-font-color"></span>
        </a>
        <div class="profile-picture big-profile-picture clear">
          <img
            width="150px"
            alt="Anne Hathaway picture"
            src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
          />
        </div>
        <h1 class="user-name">Name - {{name}}</h1>
        <div class="profile-description">
          <p class="scnd-font-color">Username - {{username}}</p>
        </div>
      </div>      
    </div>
    </b-col>
    <b-col lg="8" style="float:left;padding-left:80px">
        <pie-chart
            :ratio=Ratio
            :percent=CommitPercentage
            :stroke-width=10
            :label="CommitPercentage + '%'"
            label-small=""
            color=#40a070
            :opacity=0.7
            style="width:80%"
            />
    </b-col>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import UserModule from "../store/modules/user";
import TopHeader from "@/components/Dashboard/Header.vue";
import PieChart from 'vue-pie-chart/src/PieChart.vue';
Vue.use(BootstrapVue);
 
@Component({
  components: {
    TopHeader,
    PieChart
  }
})
export default class Profile extends Vue {
   get username(){
        return this.$store.getters.GetUsername;
    };

    get name(){
        return this.$store.getters.Getname;
    }

    get CommitPercentage(){
        return this.$store.getters.GetCommitPercentage;
    }

    get Ratio(){
        return this.CommitPercentage/100;
    }


}
</script>
<style src="@/assets/main.css" scoped >
</style>