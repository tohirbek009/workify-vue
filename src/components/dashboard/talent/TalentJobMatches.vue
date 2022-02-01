<template>
  <div class="job-matches">
    <div class="expand-div">
      <v-row justify="center">
        <v-expansion-panels accordion flat>
          <v-expansion-panel class="d-flex flex-wrap" style="border-radius: 20px">
            <app-switch
                label="Employment type"
                class="ml-5 mt-3 mb-5"
                switchType='colorless'
                :itemData='employmentTypeData'
                v-model="jobPreferenceViewModel.employmentType"
            />
            <v-expansion-panel-header expand-icon="mdi-chevron-down"/>

            <v-expansion-panel-content style="width: 100%" class="mr-12">
              <v-row>
                <v-col cols="12" sm="6">
                  <app-switch
                      label="Employment type"
                      switchType='colorless'
                      :itemData='workplaceTypeData'
                      v-model="jobPreferenceViewModel.workplaceType"
                  />
                </v-col>

                <v-col cols="12" sm="6">
                  <div class="input-field">
                    <label for="minimum-salary">Minimum salary</label>
                    <div class="autocomplete__icon">
                      <img src="/assets/icons/city.svg"/>
                    </div>
                    <v-text-field
                        v-model="jobPreferenceViewModel.minimumSalary"
                        placeholder="Min.amount"
                        :rules="minSalaryRules"
                        suffix="$"
                        required
                        outlined
                        class="form-input"
                        color="#CCD2E3"
                        dense
                        id="minimum-salary"
                        height="51"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6" class="py-0">
                  <form-autocomplete
                      v-model="jobPreferenceViewModel.city.country.id"
                      label="Country"
                      icon="/assets/icons/city.svg"
                      placeholder="Country"
                      api="country?"
                      :parentId="-1"
                  />
                </v-col>
                <v-col cols="12" sm="6" class="py-0">
                  <form-autocomplete
                      v-model="jobPreferenceViewModel.city.id"
                      label="City"
                      icon="/assets/icons/city.svg"
                      placeholder="City"
                      :api="`city?CountryId=${jobPreferenceViewModel.city.country.id}&`"
                      :parentId="jobPreferenceViewModel.city.country.id"
                  />
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>
    <app-search-bar placeholder="Write something about the job you are looking for..." class="mt-10 mb-5"/>
    <span class="main-text-2">67 jobs</span>
    <div class="main mt-1">
      <dashboard-posted-job :isJobMatchesPage="true" />
    </div>
  </div>
</template>

<script>
import AppSwitch from "@/components/AppSwitch";
import FormAutocomplete from "@/components/form/FormAutocomplete";
import AppSearchBar from "@/components/AppSearchBar";
import DashboardPostedJob from "@/components/dashboard/DashboardPostedJob";

import jobPreferenceViewModel from "@/data/jobPreferenceViewModel";
import employmentTypeData from "@/data/talentRegistration/employmentTypeData";
import workplaceTypeData from "@/data/talentRegistration/workplaceTypeData";

export default {
  name: "TalentJobMatches",

  components: {
    AppSwitch,
    FormAutocomplete,
    AppSearchBar,
    DashboardPostedJob
  },

  data() {
    return {
      jobPreferenceViewModel,
      employmentTypeData,
      workplaceTypeData,

      minSalaryRules: [
        v => !!v || "Salary is required.",
        v => v < 10000000 || "Not allowed salary value."
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/style";

.job-matches::v-deep {
  .expand-div{
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
  }

  .main{
    border-top: 2px solid $gray-lighter;
    padding-top: 28px;
  }

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
}

</style>