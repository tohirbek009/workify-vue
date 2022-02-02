<template>
  <div class="talents">
    <app-tab
        :tabItemData="occupationTypes"
        size="sm"
        v-model="selectedOccupationTab"
    />
    <div class="expand-div mt-10">
      <v-row justify="center">
        <v-expansion-panels accordion flat>
          <v-expansion-panel class="d-flex flex-wrap" style="border-radius: 20px">
            <app-tab
                :tabItemData='filterTypeTabs'
                size="sm"
                class="ma-5 mr-0"
                v-model="selectedFilterTypeTab"
            />
            <v-expansion-panel-header expand-icon="mdi-chevron-down"/>

            <v-expansion-panel-content style="width: 100%" class="mr-12">
              <div v-if="selectedFilterTypeTab === 1" class="speciality mt-3">
                <v-checkbox
                    v-for="item in talentSpecialitiesData"
                    :key="item.id"
                    :label="item.name"
                    v-model="item.isSelected"
                    color="primary"
                    class="custom--v-checkbox"
                ></v-checkbox>
              </div>
              <div v-if="selectedFilterTypeTab === 2" class="skills-expertise">
                <form-skills class="mt-3" :postJob="true" :filter="true"/>
              </div>
              <div v-if="selectedFilterTypeTab === 3" class="skills-expertise">
                <form-job-type class="mt-3" :postJob="true" :filter="true"/>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>

    <div class="search-bar mt-10">
      <app-search-bar placeholder="Write something about the talent you are looking for..."/>
    </div>

    <div class="talents mt-12">
      <talent-profile-view
          v-for="(talent) in talents"
          :key="talent.id"
          :talent="talent"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

import AppTab from "../../AppTab";
import AppSearchBar from "@/components/AppSearchBar";
import FormSkills from "@/components/form/FormSkills";
import FormJobType from "@/components/form/FormJobType";
import TalentProfileView from "@/components/dashboard/talent/TalentProfileView";

import talentSpecialitiesData from "@/data/talentRegistration/talentSpecialitiesData";
import jobpostViewModel from "@/data/jobpostData/jobpostViewModel";
import talentMatch from "@/data/talentMatchData/talentMatch";

export default {
  name: "CompanyTalent",
  components: {
    AppTab,
    AppSearchBar,
    FormSkills,
    FormJobType,
    TalentProfileView
  },

  data() {
    return {
      talentSpecialitiesData,
      jobpostViewModel,
      talentMatch,
      selectedOccupationTab: 1,
      selectedFilterTypeTab: 1,
      talents: [],
      occupationTypes: [
        {
          id: 1,
          name: 'IT'
        },
        {
          id: 2,
          name: 'Business'
        },
        {
          id: 3,
          name: 'Finance and Banking'
        },
        {
          id: 4,
          name: 'Medicine'
        },
        {
          id: 5,
          name: 'Construction'
        },
        {
          id: 6,
          name: 'Public services'
        }
      ],

      filterTypeTabs: [
        {
          id: 1,
          name: 'Speciality'
        },
        {
          id: 2,
          name: 'Skills and expertice'
        },
        {
          id: 3,
          name: 'Preferences'
        },
      ]
    }
  },


  computed: {
    ...mapGetters(['skillsData', 'languagesData'])
  },

  watch: {
    skillsData: {
      async handler() {
        this.talentMatch.skills = this.skillsData;
        let companyUser = JSON.parse(localStorage.getItem('user'));
        const {data} = await axios({
          method: 'post',
          url: "https://localhost:7285/api/talent/match",
          data: this.talentMatch,
          headers: {
            "Authorization": `Bearer ${companyUser.token}`
          }
        })
        this.talents = data.data;
      },

      deep: true,
    },

    languagesData:{
      async handler(){
        this.talentMatch.languages = this.languagesData;
        let companyUser = JSON.parse(localStorage.getItem('user'));
        const {data} = await axios({
          method: 'post',
          url: "https://localhost:7285/api/talent/match",
          data: this.talentMatch,
          headers: {
            "Authorization": `Bearer ${companyUser.token}`
          }
        })
        this.talents = data.data;
      },

      deep: true,
    }
  },

  async mounted() {
    let companyUser = JSON.parse(localStorage.getItem('user'));
    const {data} = await axios({
      method: 'get',
      url: "https://localhost:7285/api/talent",
      headers: {
        "Authorization": `Bearer ${companyUser.token}`
      }
    })
    this.talents = data.data;
    console.log("Talents: ", this.talents)
  }


}
</script>

<style lang="scss" scoped>
@import "src/styles/style";

.talents {
  .expand-div {
    padding-left: 14px;
    padding-right: 14px;

    .v-expansion-panel-header {
      width: fit-content !important;

      .v-expansion-panel-header__icon {
        transform: scale(1.5) !important;
        margin-top: 14px;

        i {
          color: $gray-lighter !important;
        }
      }
    }

    .speciality {
      column-count: 4;
    }
  }
}
</style>