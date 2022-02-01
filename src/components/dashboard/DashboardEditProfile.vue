<template>
  <div>
    <talent-edit-profile v-if="userType === 2" />
    <company-edit-profile v-if="userType === 1" />
  </div>
</template>

<script>
import TalentEditProfile from "./talent/TalentEditProfile";
import CompanyEditProfile from "./company/CompanyEditProfile";

export default {
  name: "EditPage",
  components:{
    TalentEditProfile,
    CompanyEditProfile
  },
  data(){
    return{
      userType: 0,
    }
  },
  created() {
    this.userType = JSON.parse(localStorage.getItem('user')).userType;
  }
}
</script>