import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module
export default class UserModule extends VuexModule {
  username = "";
  name = "";
  commitPercentage = 0;

  @Mutation
  setUsername(modelname: string) {
    this.username = modelname
  }

  @Mutation
  setname(modelname: string) {
    this.name = modelname
  }

  @Mutation
  setCommitPercentage(modelname: number){
    this.commitPercentage = modelname
  }
 
  @Action({ commit: 'setUsername' })
  CommitUsername(username: string) {
    return username;
  }

  @Action({ commit: 'setname' })
  Commitname(name: string) {
    return name;
  }

  @Action({ commit: 'setCommitPercentage'})
  CommitPercentage(percent: number){
    return percent;
  }

  get GetUsername(){
      return this.username;
  }

  get Getname(){
    return this.name;
  }

  get GetCommitPercentage(){
    return this.commitPercentage;
  }
  
}
