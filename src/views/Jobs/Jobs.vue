<template>
  <div class="job-container">
    <div class="jobs-count">1.256 jobs</div>
    <div class="main">
      <dashboard-posted-job
          :jobsPage="true"
          v-for="n in 6"
          :key="n"
      />
    </div>
  </div>
</template>

<script>
import DashboardPostedJob from "@/components/dashboard/DashboardPostedJob";
export default {
  name: "Jobs",
  components:{
    DashboardPostedJob
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/style';

::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #C7C7C7;
  border: 2px solid white;
  border-radius: 20px ;
}

.job-container{
  font-family: $font-family;
  padding: 130px 30px 60px 60px;
  .main{
    height: 100vh;
    padding-right: 10px;
    padding-top: 20px;
    overflow: auto;
    border-top: 1px solid $gray-lighter;
  }
}

</style>