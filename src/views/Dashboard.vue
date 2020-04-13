<template>
  <div class="main-container">
    <!-- HEADER -->
    <TopHeader></TopHeader>
    <!-- LEFT-CONTAINER -->
    <left-bar ref="leftSideBar" ></left-bar>

    <!-- MIDDLE-CONTAINER -->
    <div class="middle-container container">
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
        <h1 class="user-name">{{name}}</h1>
        <div class="profile-description">
          <p class="scnd-font-color">{{username}}</p>
        </div>
      </div>
      <b-button variant="danger" style="width:100%;"  v-b-modal.addCommit>New Commit</b-button> <br><br>
      <b-button variant="success" style="width:100%;">New PR</b-button>
    </div>


    <!-- RIGHT-CONTAINER -->
    <right-bar />
    <!-- end right-container -->
    <add-commit @refresh="callRefresh()" ></add-commit>
  </div>
  <!-- end main-container -->
</template>
<script lang="ts">
import { Vue, Component, Ref } from "vue-property-decorator";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import TopHeader from "@/components/Dashboard/Header.vue";
import LeftBar from "@/components/Dashboard/LeftSideBar.vue";
import RightBar from "@/components/Dashboard/RightSideBar.vue";
import AddCommit from "@/components/Dashboard/AddCommit.vue";
import UserModule from "../store/modules/user";

Vue.use(BootstrapVue);

@Component({
  components: {
    TopHeader,
    LeftBar,
    RightBar,
    AddCommit
  }
})
export default class Dashboard extends Vue {
    //username = '';

    get username(){
        return this.$store.getters.GetUsername;
    };

    get name(){
        return this.$store.getters.Getname;
    }

    callRefresh(){
       const Refw: any = this.$refs.leftSideBar;
       Refw.RefreshTopScrores();
       this.$root.$emit('bv::hide::modal', 'addCommit')
    }

}
</script>

<style src="@/assets/main.css" scoped >
</style>