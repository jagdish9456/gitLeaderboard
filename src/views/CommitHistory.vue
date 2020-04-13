<template>
  <div class="main-container">
    <!-- HEADER -->
    <TopHeader></TopHeader>
    <center>
      <h1>Commit History</h1>
    </center>
    <hr>
    <b-col lg="12" md="12">   
      <table class="table table-stripped table-bordered">
        <thead>
          <tr style="color:#fff;">
            <td>Username</td>
            <td>Date</td>
            <td>Comment</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="detail in CommitDetails" :key="detail.sha" style="color:#fff;">
            <td>{{detail.commit.author.name}}</td>
            <td>{{detail.commit.author.date}}</td>
            <td>{{detail.commit.message}}</td>
            <td>{{detail.commit.author.email}}</td>
          </tr>
        </tbody>
      </table>
    </b-col>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { GetAllCommitForUser } from "../store/api";
import { IAllGitCommitForUser } from "../store/model";
import TopHeader from "@/components/Dashboard/Header.vue";

Vue.use(BootstrapVue);

@Component({
  components: {
    TopHeader
  }
})
export default class CommitHistory extends Vue {
  CommitDetails: IAllGitCommitForUser[] | null = null;

  async created() {
    await GetAllCommitForUser().then(res => {
      this.CommitDetails = res;
    });
  }
}
</script>
<style src="@/assets/main.css" scoped >
</style>