<template>
  <div class="left-container container">
    <div class="menu-box block">
      <!-- MENU BOX (LEFT-CONTAINER) -->
      <h2 class="titular">LEADERSHIP DASHBOARD</h2>
      <ul class="menu-box-menu">
        <li v-for="user in GitTopScorers" :key="user.name">
          <a class="menu-box-tab" href="#6">
            <span class="icon fontawesome-user scnd-font-color"></span>{{user.name}}
            <div class="menu-box-number" title="points" >{{user.count}}</div>
          </a>
        </li>
       
      </ul>
    </div>

    <div class="line-chart-block block clear">
      <!-- LINE CHART BLOCK (LEFT-CONTAINER) -->
     
      <ul class="time-lenght horizontal-list">
        <li>
          <a class="time-lenght-btn" href="#14">Week</a>
        </li>
        <li>
          <a class="time-lenght-btn" href="#15">Month</a>
        </li>
        <li>
          <a class="time-lenght-btn" href="#16">Year</a>
        </li>
      </ul>
      <ul class="month-data clear">
        <li>
          <p>
            APR
            <span class="scnd-font-color">2013</span>
          </p>
          <p>
            <span class="entypo-plus increment"></span>21
            <sup>%</sup>
          </p>
        </li>
        <li>
          <p>
            MAY
            <span class="scnd-font-color">2013</span>
          </p>
          <p>
            <span class="entypo-plus increment"></span>48
            <sup>%</sup>
          </p>
        </li>
        <li>
          <p>
            JUN
            <span class="scnd-font-color">2013</span>
          </p>
          <p>
            <span class="entypo-plus increment"></span>35
            <sup>%</sup>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { GetTopScorers, GetCommitDetailsFromGit } from "../../store/api";
import { IGetTopScorers, IGetGitCommitDetails } from "../../store/model";

@Component({
  name: "LeftBar"
})
export default class LeftBar extends Vue {
  TopScorers: IGetTopScorers[] | null = null;
  GitTopScorers: IGetGitCommitDetails[] | null = null;

  async created(){
      // await GetTopScorers().then(res => {
      //     this.TopScorers = res;
      // });

      await GetCommitDetailsFromGit().then(res => {
          this.GitTopScorers = res;
      });
  }

  async RefreshTopScrores(){
     await GetTopScorers().then(res => {
          this.TopScorers = res;
      });
  }
}
</script>

<style src="@/assets/main.css" scoped >
</style>