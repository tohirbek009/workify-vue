<template>
  <dashboard-posted-job
    :isOpenJopView="true"
  />
</template>

<script>
import DashboardPostedJob from "../DashboardPostedJob";
import {mapActions} from "vuex";
export default {
  name: "CompanyPostJobView",
  components: {
    DashboardPostedJob
  },

  methods:{
    ...mapActions(['getJobPostLanguages'])
  },

  created() {
    this.getJobPostLanguages(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>

</style>