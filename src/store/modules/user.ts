import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module
export default class UserModule extends VuexModule {
  username = "";
  name = "";

  @Mutation
  setUsername(modelname: string) {
    this.username = modelname
  }

  @Mutation
  setname(modelname: string) {
    this.name = modelname
  }
 
  @Action({ commit: 'setUsername' })
  CommitUsername(username: string) {
    return username;
  }

  @Action({ commit: 'setname' })
  Commitname(name: string) {
    return name;
  }

  get GetUsername(){
      return this.username;
  }

  get Getname(){
    return this.name;
  }
  
}