<template>
  <div class="right-container container">
    <div class="join-newsletter block">
      <!-- JOIN NEWSLETTER (RIGHT-CONTAINER) -->
      <h2 class="titular">JOIN THE NEWSLETTER</h2>
      <div class="input-container">
        <input type="text" placeholder="yourname@gmail.com" class="email text-input" />
        <div class="input-icon envelope-icon-newsletter">
          <span class="fontawesome-envelope scnd-font-color"></span>
        </div>
      </div>
      <a class="subscribe button" href="#21">SUBSCRIBE</a>
    </div>

    <div class="calendar-day block">
      <!-- CALENDAR DAY (RIGHT-CONTAINER) -->
      <div class="arrow-btn-container">
        <a class="arrow-btn left" href="#200">
          <span class="icon fontawesome-angle-left"></span>
        </a>
        <h2 class="titular">WEDNESDAY</h2>
        <a class="arrow-btn right" href="#201">
          <span class="icon fontawesome-angle-right"></span>
        </a>
      </div>
      <p class="the-day">26</p>
      <a class="add-event button" href="#27">ADD EVENT</a>
    </div>

    <!-- end calendar-month block -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "RightBar"
})
export default class RightBar extends Vue {
  //@Prop() private msg!: string;
}
</script>

<style src="@/assets/main.css" scoped >
</style>