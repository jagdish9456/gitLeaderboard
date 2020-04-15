<template>
  <header class="block">
    <ul class="header-menu horizontal-list">
      <li @click="RouterPush('Dashboard')">
        <span class="header-menu-tab">
          <span class="icon entypo-cog scnd-font-color"></span>Dashboard
        </span>
      </li>
      <li @click="RouterPush('Account')" >
        <span class="header-menu-tab">
          <span class="icon fontawesome-user scnd-font-color"></span>Account
        </span>
      </li>
      <li @click="RouterPush('CommitHistory')">
        <span class="header-menu-tab">
          <span class="icon fontawesome-envelope scnd-font-color"></span>Commit History
        </span>
        <a class="header-menu-number" href="#4">5</a>
      </li>
      <li>
        <span class="header-menu-tab">
          <span class="icon fontawesome-star-empty scnd-font-color"></span>PR History
        </span>
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
