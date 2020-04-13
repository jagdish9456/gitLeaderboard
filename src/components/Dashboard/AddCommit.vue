<template>
  <b-modal id="addCommit" title="Add New Commit to git" hide-footer=true>
    <label for="DateTime">Enter Date & Time of git Commit</label>
    <input type="datetime-local" v-model="commitDate" id="DateTime" class="form-control" />
    <br />
    <label for="comment">Enter Commit Comment</label>
    <input type="text" style="width:100%;margin-left:0px" id="comment" v-model="commitComment" class="form-control" />
    <br />
    <b-button variant="danger" @click="AddCommitForUser()">Add New Commit</b-button>
  </b-modal>
</template>


<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import UserModule from "../../store/modules/user";
import { AddNewCommitForUser } from "../../store/api";

@Component({
  name: "AddCommit"
})
export default class AddCommit extends Vue {
  //@Prop() private msg!: string;
  commitDate = '';
  commitComment = '';
  
  get username() {
    return this.$store.getters.GetUsername;
  }

  get commitData(){
      return {DateTime: this.commitDate,username:this.username,commitcomment:this.commitComment}
  }

  @Emit()
  refresh(){
      return 1;
  }

  async AddCommitForUser() {
    await AddNewCommitForUser(this.commitData).then(res => {
        if(res.status == "success"){
          this.refresh();
        }
    });
  }


}
</script>

<style src="@/assets/main.css" scoped >
</style>