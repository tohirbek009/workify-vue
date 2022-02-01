<template>
  <div
      class="posted-job-container mb-5"
      :style="`border: ${jobsPage ? '1px' : '0'} solid #c7c7c7`"
  >
    <div class="header">
      <v-sheet
          class="d-flex align-center"
      >
        <v-avatar
            class="mr-5"
            color="primary"
            size="75"
        >
          <img
              v-if="null"
              alt="Avatar"
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          >
          <v-icon v-else dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>

        <div class="information">
          <div class="main-text name">{{userData.name}}</div>
          <div class="location">{{ userData.industry.name }}</div>
        </div>
      </v-sheet>
      <div class="right-side d-flex flex-column align-end">
        <div class="location">{{userData.user.city.name}}, {{userData.user.city.country.name}}</div>
        <div class="time my-2">4 days ago</div>
        <div class="count-viewed">
          <v-chip
              label
              small
              class="px-3 py-2 pl-4"
              color="vChipColor"
          >
            <v-icon left small color="gray">
              mdi-eye
            </v-icon>
            456 viewed
          </v-chip>
        </div>
      </div>
    </div>

    <div class="main pl-7 pt-5 pr-5 pb-5">
      <div class="d-flex justify-space-between">
        <div>
          <div class="main-text">{{job.speciality}}</div>
          <div class="mt-3">
            <v-chip
                label
                class="pa-3 mr-2"
                color="vChipColor"
            >
              {{employmentType}}
            </v-chip>
            <v-chip
                label
                class="pa-3 mr-2"
                color="vChipColor"
            >
              {{workplaceType}}
            </v-chip>
          </div>
        </div>
        <div class="salary-range">
          <span class="main-text">${{job.minimumSalary}}-{{job.maximumSalary}}</span>
        </div>
      </div>
      <div class="main__middle my-4">
        <div class="about-posted-job">
          {{job.description}}
        </div>
      </div>
      <v-row v-if="!isOpenJopView" class="main__bottom mr-1 pb-2">
        <v-col cols="12" sm="6">
          <div class="required-skill-text">Required skills</div>
          <v-chip
              v-for="skill in skills"
              :key="skill.id"
              label
              class="pa-3 mr-2 mb-2"
              color="vChipColor"
          >
            {{skill.skillName}} ({{skill.yearsOfExperience}} years)
          </v-chip>
        </v-col>
        <v-col v-if="!isOpenJopView" cols="12" sm="6" align-self="end">
          <div v-if="!jobsPage&&!isJobMatchesPage" class="candidate-interest mb-8 d-flex justify-end align-center">
            <img src="/assets/img/condidates.png"/>
            <div class="d-flex justify-end ml-3">Candidates interested</div>
          </div>
          <v-row class="d-flex justify-end align-center">
            <img v-if="isJobMatchesPage" class="mt-3 mr-5" src="/assets/icons/dislike.svg">
            <v-btn
                color="primary"
                class="rounded-pill custom--v-btn mr-5"
                width="180"
                v-if="isJobMatchesPage"
            >
              Quick apply
            </v-btn>
            <router-link
                class="text-decoration-none"
                :to="{name:'CompanyPostJobView', params:{id:job.id}}"
            >
              <v-btn
                  color="primary"
                  class="rounded-pill custom--v-btn"
                  outlined
                  width="150"
              >
                View job post
              </v-btn>
            </router-link>

            <router-link
                class="text-decoration-none"
                :to="{name:'CompanyPostJobCandidates', params:{id:job.id}}"
            >
              <v-btn
                  color="primary"
                  class="rounded-pill custom--v-btn ml-5"
                  width="180"
                  v-if="!jobsPage&&!isJobMatchesPage"
              >
                See candidates
              </v-btn>
            </router-link>
          </v-row>
        </v-col>
      </v-row>



      <div v-if="isOpenJopView" class="main__middle my-4">
        <div class="about-posted-job">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English...
        </div>
      </div>

      <ul v-if="isOpenJopView" class="my-5">
        <li>UX/UI</li>
        <li>UX/UI</li>
        <li>UX/UI</li>
      </ul>

      <div v-if="isOpenJopView" class="main__middle my-4">
        <div class="about-posted-job">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English...
        </div>
      </div>

      <div v-if="isOpenJopView" class="main__middle my-4">
        <div class="about-posted-job">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English...
        </div>
      </div>

      <v-row v-if="isOpenJopView">
        <v-col cols="12">
          <v-chip
              label
              class="pa-3 mr-2 mb-2"
              color="vChipColor"
              v-for="n in 6"
              :key="n"
          >
            Figma (2 years)
          </v-chip>
<!--          <v-chip-->
<!--              label-->
<!--              class="pa-3 mr-2 mb-2"-->
<!--              color="vChipColor"-->
<!--              v-for="language in jobPostLanguagesData"-->
<!--              :key="language.languageId"-->
<!--          >-->
<!--            {{ language.languageName }} ({{language.languageLevel}})-->
<!--          </v-chip>-->
        </v-col>
      </v-row>

      <v-row v-if="isOpenJopView" class="d-flex justify-center">
        <router-link
            class="text-decoration-none"
            to="/dashboard/my-jobs"
        >
          <v-btn
              color="primary"
              class="rounded-pill custom--v-btn"
              depressed
              width="200"
              outlined
          >
            Back
          </v-btn>
        </router-link>
        <v-btn
            color="primary"
            class="rounded-pill custom--v-btn ml-5"
            depressed
            width="200"
        >
          Edit job post
        </v-btn>
      </v-row>
    </div>
  </div>
</template>


<script>
import {mapGetters} from "vuex";
import getEmploymentType from "@/helpers/getEmploymentType";
import getWorkplaceType from "@/helpers/getWorkplaceType";
// import getLanguageLevel from "@/helpers/getLanguageLevel";
export default {

  name: "DashboardPostedJob",

  props: {
    jobsPage: Boolean,
    isOpenJopView: Boolean,
    isJobMatchesPage: Boolean,

    //Data from parent component:
    job: Object,
    skills: Array,
  },

  data(){
    return{
      employmentType: '',
      workplaceType: '',
    }
  },

  computed:{
    ...mapGetters(['userData','jobPostLanguagesData'])
  },

  mounted() {
    this.employmentType = getEmploymentType(this.job?.employmentType);
    this.workplaceType = getWorkplaceType(this.job?.workplaceType)
    // if(this.jobPostLanguagesData){
    //   this.jobPostLanguagesData.forEach((el) => {
    //     el.languageLevel = getLanguageLevel(el.languageLevel);
    //   })
    // }
  }
}
</script>


<style lang="scss" scoped>
@import "src/styles/style";

.posted-job-container {
  font-family: $font-family;
  background: $white;
  border-radius: 14px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $gray-lighter;
    padding: 20px 20px 20px 30px;
  }

  .main {
    .required-skill-text {
      font-size: 20px;
      color: $black;
      font-weight: bold;
      margin-bottom: 7px;
    }

    ul {
      li {
        font-weight: bold;
        font-size: 16px;
        color: $black;
      }
    }
  }
}
</style>