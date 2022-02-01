<template>
  <div class="edit-page">
    <app-tab
        v-model="selectedComponentId"
        :tabItemData='appTabData'
        size='sm'
    />

    <div class="part-one" v-if="selectedComponentId === 1">
      <talent-registration-a
          :watchChange="watchChange"
          :editPage="true"
          v-model="valid"
      />
      <div class='text-box'>
        <textarea
            placeholder = 'About me ...'
            v-model='aboutUser'
            rows="8"
        />
      </div>
      <v-row class="d-flex justify-center">
        <v-btn
            color="primary"
            depressed
            width="180"
            class="rounded-pill custom--v-btn"
            large
            :loading="isLoading"
            @click="submitPersonalInfo"
        >Save</v-btn>
      </v-row>
    </div>

    <div class="part-two" v-if="selectedComponentId === 2" >
      <form-skills :editPage="true" />
      <v-row class="d-flex justify-center">
        <v-btn
            color="primary"
            depressed
            width="180"
            class="rounded-pill custom--v-btn"
            large
            :loading="isLoading"
            @click="submitSkillsExpertise"
        >Save</v-btn>
      </v-row>
    </div>

    <div class="part-three" v-if="selectedComponentId === 3">
      <form-job-type :editPage="true" />
      <v-row class="d-flex justify-center">
        <v-btn
            color="primary"
            depressed
            width="180"
            class="rounded-pill custom--v-btn"
            large
            :loading="isLoading"
            @click="submitJobPreference"
        >Save</v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

// Components Imports:
import TalentRegistrationA from "../../../views/Register/TalentRegistrationA";
import AppTab from "@/components/AppTab";
import FormSkills from "@/components/form/FormSkills";
import FormJobType from "@/components/form/FormJobType";

// Data imports:
import talentViewModel from "@/data/talentRegistration/talentViewModel";
import skillsData from "@/data/skillsData/skillsData";
import jobPreferenceViewModel from "@/data/jobPreferenceViewModel";

export default {
  name: "TalentEditProfile",
  data: () => ({
    talentViewModel,
    jobPreferenceViewModel,
    skillsData,
    watchChange: false,
    isLoading: false,
    aboutUser: '',
    valid: true,
    selectedComponentId: 1,

    appTabData:[
      {
        id: 1,
        name: 'Personal info'
      },
      {
        id: 2,
        name: 'Skills and expertise'
      },
      {
        id: 3,
        name: 'Job preferences'
      }
    ]
  }),
  components: {
    TalentRegistrationA,
    AppTab,
    FormSkills,
    FormJobType
  },

  methods: {
    async submitPersonalInfo(){
      this.watchChange = !this.watchChange;
      this.talentViewModel.user.aboutMe = this.aboutUser;
      let talentId = JSON.parse(localStorage.getItem("user")).talentId;

      console.log(this.talentViewModel)

      this.isLoading = true;
      await axios({
        method: 'put',
        url : `https://localhost:7285/api/talent/${talentId}`,
        data : this.talentViewModel,
        headers : {
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
        }
      });
      this.isLoading = false;
    },
  },

  computed:{
    ...mapGetters(['userData', 'talentSkillsData'])
  },

  mounted() {
    Object.assign(this.talentViewModel, this.userData)
    Object.assign(this.skillsData, this.talentSkillsData)
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/style";
  .edit-page{
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    .text-box{
      margin: 30px auto;
      width: 100%;
      textarea{
        max-width: 100%;
        min-width: 100%;
        min-height: 300px;
        background: #FFFFFF;
        border: 1px solid #CCD2E3;
        border-radius: 20px;
        outline: none;
        font-family: $font-family;
        font-weight: 600;
        font-size: 16px;
        padding: 30px;
        box-sizing: border-box;
        &::placeholder{
          font-family: $font-family;
          font-weight: normal;
          color: $placeholderColor;
        }
      }
    }
  }
</style>