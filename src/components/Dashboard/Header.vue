<template>
  <header class="block">
    <ul class="header-menu horizontal-list">
      <li @click="RouterPush('Dashboard')">
        <a class="header-menu-tab" href="#1">
          <span class="icon entypo-cog scnd-font-color"></span>Dashboard
        </a>
      </li>
      <li>
        <a class="header-menu-tab" href="#2">
          <span class="icon fontawesome-user scnd-font-color"></span>Account
        </a>
      </li>
      <li @click="RouterPush('CommitHistory')">
        <a class="header-menu-tab" href="#3">
          <span class="icon fontawesome-envelope scnd-font-color"></span>Commit History
        </a>
        <a class="header-menu-number" href="#4">5</a>
      </li>
      <li>
        <a class="header-menu-tab" href="#5">
          <span class="icon fontawesome-star-empty scnd-font-color"></span>PR History
        </a>
      </li>
    </ul>
    <div class="profile-menu">
      <p>
        Me
        <a href="#26">
          <span class="entypo-down-open scnd-font-color"></span>
        </a>
      </p>
      <div class="profile-picture small-profile-picture">
        <img
          width="40px"
          alt="Anne Hathaway picture"
          src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
        />
      </div>
    </div>
  </header>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "TopHeader"
})
export default class TopHeader extends Vue {
  //@Prop() private msg!: string;
  RouterPush(val: string){
    this.$router.push(val);
  }
}
</script>

<style src="@/assets/main.css" scoped >
</style>