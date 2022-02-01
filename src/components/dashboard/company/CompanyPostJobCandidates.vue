<template>
  <div class="post-job-candidates">
    <dashboard-posted-job :job="job"/>

    <div class="candidates mt-8">
      <span>108 candidates</span>
      <div class="main">
        <talent-profile-view v-for="n in 5" :key="n" />
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

import DashboardPostedJob from "../DashboardPostedJob";
import TalentProfileView from "../talent/TalentProfileView";
export default {
  name: "CompanyPostJobCandidates",
  components:{
    DashboardPostedJob,
    TalentProfileView
  },
  data(){
    return{
      job: {},
    }
  },
  async created() {
    let jobPostId = this.$route.params.id;
    let companyUser = JSON.parse(localStorage.getItem('user'))
    const {data} = await axios({
      method:'get',
      url:`https://localhost:7285/api/jobpost/${jobPostId}`,
      headers : {
        "Authorization": `Bearer ${companyUser.token}`
      }
    })
    this.job = data.data;
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/style";
.post-job-candidates{
  .candidates{
    span{
      font-family: $font-family;
      font-weight: bold;
      font-size: 20px;
      color: #56657F;
    }
    .main{
      border-top: 1px solid rgba(196, 196, 196, 0.5);
    }
  }
}

</style>