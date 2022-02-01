<template>
  <v-form class="form">

    <v-row>

      <v-col cols="12" md="6">
        <!--   Occupation dropdown autocomplete:      -->
        <form-autocomplete
            v-model="selectedOccupation"
            label="Occupation"
            icon="/assets/icons/city.svg"
            placeholder="Your occupation"
            api="skill?"
            :isSubmitted="isSubmitted"
            :parentId="-1"
            :editPage="editPage"
            :dataForEdit="{value:1, text: 'Developer'}"
        />
      </v-col>

      <v-col cols="12" sm="6">
        <!--    Speciality dropdown autocomplete :    -->
        <form-autocomplete
            v-model="selectedSpeciality"
            label="Speciality"
            icon="/assets/icons/city.svg"
            placeholder="Your speciality"
            :api="`skill?ParentId=${this.selectedOccupation}&`"
            :isSubmitted="isSubmitted"
            :parentId="selectedOccupation"
        />
      </v-col>

    </v-row>

    <!--  This form-job-type form is need to make PostJob component design  -->
    <form-job-type v-if="postJob && !filter" :watchChange="watchChange" :postJob="true"/>

    <v-row>
      <v-col cols="12" :md="`${postJob ? 6 : 12}`">
        <v-row v-for="(skill) in skillsData" :key="skill.id">

          <v-col cols="12" sm="6">
            <!--   Skills dropdown autocomplete:  -->
            <form-autocomplete
                v-model="skill.skillId"
                label="Skills"
                icon="/assets/icons/city.svg"
                placeholder="Skill(ex: Python)"
                :api="`skill?ParentId=${selectedSpeciality}&`"
                :isSubmitted="isSubmitted"
                :parentId="selectedSpeciality"
                :isVisibleLabel="skill.id === 1"
                :isVisibleIcon="skill.id === 1"
            />
          </v-col>

          <v-col cols="12" sm="6">
            <!--   Years of experience dropdown autocomplete:     -->
            <form-select
                v-model="skill.yearsOfExperience"
                label="Years of experience"
                placeholder="Years of experience"
                icon="/assets/icons/city.svg"
                :items="experienceYearData"
                :isSubmitted="isSubmitted"
                :itemId="skill.id"
                :isVisibleClearIcon="skill.id !== 1"
                :isVisibleLabel="skill.id === 1 && !postJob"
                :isVisibleIcon="skill.id === 1 && !postJob"
                @deleteItem="deleteSkill"
                :isPostjobComponent="postJob"
            />
          </v-col>

        </v-row>

        <v-row>
          <v-col class="d-flex justify-end mt-0">
            <v-btn
                color="success"
                elevation="0"
                class="rounded-pill"
                large
                dense
                @click="addSkill"
                :disabled="addSkillBtnDisabled"
            >
              Add skill
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" :md="`${postJob ? 6 : 12}`">
        <v-row v-for="language in languagesData" :key="language.id">

          <v-col cols="12" sm="6">
            <!--   Skills dropdown autocomplete:  -->
            <form-autocomplete
                v-model="language.languageId"
                label="Language"
                icon="/assets/icons/city.svg"
                placeholder="Language"
                api="language?"
                :isSubmitted="isSubmitted"
                :parentId="-1"
                :isVisibleLabel="language.id === 2"
                :isVisibleIcon="language.id === 2"
            />
          </v-col>

          <v-col cols="12" sm="6">
            <!--   Years of experience dropdown autocomplete:     -->
            <form-select
                v-model="language.languageLevel"
                label="Level"
                placeholder="Level"
                icon="/assets/icons/city.svg"
                :items="languageLevelData"
                :isSubmitted="isSubmitted"
                :itemId="language.id"
                :isVisibleClearIcon="language.id !== 2"
                :isVisibleLabel="language.id === 2 && !postJob"
                :isVisibleIcon="language.id === 2  && !postJob"
                :isPostjobComponent="postJob"

                @deleteItem="deleteLanguage"
            />
          </v-col>

        </v-row>

        <v-row>
          <v-col class="d-flex justify-end mt-0">
            <v-btn
                color="success"
                elevation="0"
                class="rounded-pill"
                large
                dense
                @click="addLanguage"
                :disabled="addLanguageBtnDisabled"
            >
              Add language
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import axios from "axios";
import {mapMutations, mapGetters} from 'vuex';
import {ValidateService} from "@/services/validate.service";

// Talent dropdown data imports:
import experienceYearData from "../../data/skillsData/experienceYearData";
import languageLevelData from "../../data/languageData/languageLevelData";

// Jobpost viewmodel import:
import JobpostViewModel from "@/data/jobpostData/jobpostViewModel";

// Components imports:
import FormAutocomplete from "@/components/form/FormAutocomplete";
import FormSelect from "@/components/form/FormSelect";
import FormJobType from "@/components/form/FormJobType";

export default {

  name: "TalentRegistrationB",

  components: {
    FormAutocomplete,
    FormSelect,
    FormJobType
  },

  props: {
    value: {
      type: Boolean,
    },
    watchChange: Boolean,
    editPage: Boolean,
    postJob: Boolean,
    filter: Boolean,
  },

  data() {
    return {
      isSubmitted: false,
      addLanguageBtnDisabled: true,
      addSkillBtnDisabled: true,
      selectedSpeciality: 0,
      selectedOccupation: 0,
      experienceYearData,
      languageLevelData,
      JobpostViewModel,
      selectedExperience: 0,
      searchOccupation: "",
      searchSpeciality: '',

      //Talent form data items rules (validation):
      dropdownRule: [
        v => v !== null || "Select one option"
      ],
      selectedDropdownRule: [
        v => v !== 0 || "Select one option"
      ],
    }

  },

  watch: {
    watchChange() {
      this.isSubmitted = !this.isSubmitted;
    },
    async selectedOccupation(newValue){
      const {data} = await axios.get(`https://localhost:7285/api/skill/${newValue}`)
      this.JobpostViewModel.occupation = data.data.name;
    },
    async selectedSpeciality(newValue){
      const {data} = await axios.get(`https://localhost:7285/api/skill/${newValue}`)
      this.JobpostViewModel.speciality = data.data.name;
      console.log(this.JobpostViewModel)
    },
    languagesData:{
      handler(){
        let validate = new ValidateService();
        this.addLanguageBtnDisabled = !(validate.LanguagesValidate(this.languagesData))
      },
      deep: true
    },
    skillsData: {
      handler(){
        let validate = new ValidateService();
        this.addSkillBtnDisabled = !(validate.SkillsValidate(this.skillsData))
      },
      deep: true
    }
  },

  computed: {
    ...mapGetters(['languagesData','languagesIdData','skillsData','skillsIdData'])
  },

  created() {
    console.log("Languages data: ", this.languagesData)
  },

  methods: {
    ...mapMutations(['addLanguage','addSkill','removeLanguage','removeSkill']),

    deleteSkill(id) {
      this.removeSkill(id)
      let removedSkillId = 0;
      this.languagesData.forEach((el) => {
        if(el.id === id){
          removedSkillId = el.languageId;
        }
      })
      this.languagesIdData.filter((el) => el !== removedSkillId);
    },

    deleteLanguage(id) {
      this.removeLanguage(id)
      let removedLangId = 0;
      this.languagesData.forEach((el) => {
        if(el.id === id){
          removedLangId = el.languageId;
        }
      })
      this.languagesIdData.filter((el) => el !== removedLangId);
    }
  },

  mounted() {
    this.skillsData[0].talentId = JSON.parse(localStorage.getItem('user'))?.talentId;
    this.languagesData[0].talentId = JSON.parse(localStorage.getItem('user'))?.talentId;
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/style";

.form {
  margin: 40px auto 0 auto;
}
</style>