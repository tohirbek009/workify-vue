import Vue from 'vue'
import Vuex from 'vuex'
import companyRegistration from './modules/user'
import skillsLanguages from "./modules/skillsLanguages";
import jobpost from "@/store/modules/jobpost";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    companyRegistration,
    skillsLanguages,
    jobpost
  }
})
