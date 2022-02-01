<template>
  <div class="my-jobs">
      <app-search-bar
          class="mb-8 mt-2"
          v-model="search"
          placeholder="Search job posts..."
      />
      <dashboard-posted-job
          v-for="(job, index) in jobsData" :key="job.id"
          :job="job"
          :skills="jobPostSkills[index]"
          @openViewJob="viewJob"
      />
  </div>
</template>

<script>
import axios from "axios";
import {mapActions, mapGetters} from "vuex";

// Components:
import AppSearchBar from "@/components/AppSearchBar";
import DashboardPostedJob from "@/components/dashboard/DashboardPostedJob";

export default {
  name: "CompanyMyJobs",
  components: {
    AppSearchBar,
    DashboardPostedJob
  },

  data() {
    return {
      search: "",
      jobPostSkills: []  // this is temporary array
    }
  },

  computed:{
    ...mapGetters(['jobsData'])
  },


  methods:{
    viewJob(id){
      console.log(id)
      this.openedJobId = id;
      this.isOpenViewJob = true;
    },

    ...mapActions(['getJobs'])
  },

  async mounted() {
    await this.getJobs();
    console.log(this.jobsData)
    const companyUser = JSON.parse(localStorage.getItem('user'))
    this.jobsData.forEach(async (el) => {
      const {data} = await axios({
        method: 'get',
        url:`https://localhost:7285/api/jobpostskill?JobPostId=${el.id}`,
        headers : {
          "Authorization": `Bearer ${companyUser.token}`
        }
      })
      this.jobPostSkills.push(data.data)
    })
  }
}
</script>

<style scoped>

</style>