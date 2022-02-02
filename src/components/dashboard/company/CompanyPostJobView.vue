<template>
  <dashboard-posted-job
    :isOpenJopView="true"
    :job="job"
    :skills="jobPostSkills"
  />
</template>

<script>
import DashboardPostedJob from "../DashboardPostedJob";
import {mapActions} from "vuex";
import axios from "axios";
export default {
  name: "CompanyPostJobView",
  components: {
    DashboardPostedJob
  },

  data(){
    return{
      job: {},
      jobPostSkills: {}
    }
  },

  methods:{
    ...mapActions(['getJobPostLanguages'])
  },

  async created() {
    let jobPostId = this.$route.params.id
    this.getJobPostLanguages(jobPostId)
    let companyUser = JSON.parse(localStorage.getItem('user'))
    const {data} = await axios({
      method:'get',
      url:`https://localhost:7285/api/jobpost/${jobPostId}`,
      headers : {
        "Authorization": `Bearer ${companyUser.token}`
      }
    })
    this.job = data.data;

    const res = await axios({
      method: 'get',
      url:`https://localhost:7285/api/jobpostskill?JobPostId=${jobPostId}`,
      headers : {
        "Authorization": `Bearer ${companyUser.token}`
      }
    })
    this.jobPostSkills = res.data.data;

  }
}
</script>

<style lang="scss" scoped>

</style>