<template>
  <div class="post-job">
    <form-skills :postJob="true" :watchChange="watchChange" />
    <div class='text-box'>
        <textarea
            placeholder = 'Job description...'
            v-model='jobDescription'
            rows="8"
        />
    </div>
    <v-row class="d-flex justify-center">
      <v-btn
          color="success"
          class="rounded-pill custom--v-btn"
          large
          width="180"
          :loading="isLoading"
          @click="saveChanges"
      >
        Post a job
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

import {ValidateService} from "@/services/validate.service";
import FormSkills from "../../form/FormSkills";
import jobPreferenceViewModel from "@/data/jobPreferenceViewModel";
import JobpostViewModel from "@/data/jobpostData/jobpostViewModel";
export default {
  name: "PostJob",
  components:{
    FormSkills
  },
  data: () => ({
    jobPreferenceViewModel,
    JobpostViewModel,
    watchChange: false,
    isLoading: false,
    valid: false,
    jobDescription: "",
    jobPostId: 0,
  }),

  computed:{
    ...mapGetters(['skillsData', 'languagesData']),
  },

  methods: {
    async saveChanges(){
      this.watchChange = !this.watchChange;
      let validate = new ValidateService();
      this.valid = validate.SkillsLanguuagesValidate(this.languagesData, this.skillsData) && validate.JobpreferenceValidate();
      if(this.valid){

        this.isLoading = true;
        let companyUser = JSON.parse(localStorage.getItem('user'));
        Object.assign(this.JobpostViewModel, this.jobPreferenceViewModel);
        delete this.JobpostViewModel.currency;
        delete this.JobpostViewModel.talentId;
        this.JobpostViewModel.companyId = companyUser.companyId;
        this.JobpostViewModel.description = this.jobDescription;

        await axios({
          method: 'post',
          url : "https://localhost:7285/api/jobpost",
          data : this.JobpostViewModel,
          headers : {
            "Authorization": `Bearer ${companyUser.token}`
          }
        }).then(({data}) => {
          this.jobPostId = data.data;
        });

        this.skillsData.forEach((el) => {
          delete el.talentId;
          el.jobPostId = this.jobPostId;
        })

        this.languagesData.forEach((el) => {
          delete el.talentId;
          el.jobPostId = this.jobPostId;
        })

        if(this.jobPostId){

          await axios({
            method: 'post',
            url : "https://localhost:7285/api/jobpostskill",
            data : this.skillsData,
            headers : {
              "Authorization": `Bearer ${companyUser.token}`
            }
          })
          await axios({
            method: 'post',
            url : "https://localhost:7285/api/jobpostlanguage",
            data : this.languagesData,
            headers : {
              "Authorization": `Bearer ${companyUser.token}`
            }
          })
        }
        this.isLoading = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/styles/style";

  .post-job{
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    .input-field::v-deep{
      margin-top: 10px !important;
    }
    .text-box{
      margin: 30px 0;
      width: 100%;
    }
  }
</style>