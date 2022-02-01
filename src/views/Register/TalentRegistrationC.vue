<template>
  <div class="talent-registration-c">
    <form-job-type :watchChange="watchChange" :registration="true" />
    <v-row class="d-flex justify-center">
      <v-btn
          color="primary"
          outlined
          depressed
          large
          width="180"
          class="rounded-pill custom--v-btn"
          @click="$emit('changeStep', 2)"
      >
        Back
      </v-btn>
      <v-btn
          color="primary"
          large
          width="180"
          :loading="isLoading"
          class="rounded-pill custom--v-btn ml-5"
          @click="submit"
      >
        Next
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import FormJobType from "../../components/form/FormJobType";
import jobPreferenceViewModel from "../../data/jobPreferenceViewModel";
import {ValidateService} from "@/services/validate.service";
import axios from "axios";
export default {
  name: "TalentRegistrationC",
  components:{
    FormJobType
  },
  data(){
    return{
      jobPreferenceViewModel,
      isLoading: false,
      watchChange: false,
    }
  },

  methods: {
    async submit(){
      this.watchChange = !this.watchChange;
      let validate = new ValidateService();
      if(validate.JobpreferenceValidate()){
        this.jobPreferenceViewModel.minimumSalary = parseInt(this.jobPreferenceViewModel.minimumSalary)
        delete this.jobPreferenceViewModel.maximumSalary;
        this.jobPreferenceViewModel.talentId = JSON.parse(localStorage.getItem("user")).talentId;

        console.log(this.jobPreferenceViewModel)

        this.isLoading = true;
        await axios({
          method: 'post',
          url : "https://localhost:7285/api/jobpreference",
          data : this.jobPreferenceViewModel,
          headers : {
            "Authorization": `${JSON.parse(localStorage.getItem('user')).token}`
          }
        });
        this.isLoading = false;
        await this.$router.push("/registration/telegram-bot")
      }
    }
  }
}
</script>

<style>
.talent-registration-c{
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>