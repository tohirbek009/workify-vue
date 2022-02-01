<template>
  <v-form ref="form" v-model="valid" lazy-validation>

    <v-row>
      <v-col cols="12">
        <AppSwitch
            label="Employment type"
            switchType='colorless'
            :itemData='employmentTypeData'
            v-model="jobPreferenceViewModel.employmentType"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <AppSwitch
            label="Workplace type"
            switchType='colorless'
            :itemData='workplaceTypeData'
            v-model="jobPreferenceViewModel.workplaceType"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-row>
          <v-col :cols="registration?12:6">
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
          <v-col v-if="!registration" cols="6">
            <div class="between-line"></div>
            <div class="input-field">
              <v-text-field
                  v-model="jobPreferenceViewModel.maximumSalary"
                  placeholder="Max.amount"
                  :rules="minSalaryRules"
                  suffix="$"
                  required
                  outlined
                  style="border-radius: 10px; margin-top: 40px"
                  color="#CCD2E3"
                  dense
                  id="minimum-salary"
                  height="51"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <form-autocomplete
            v-model="jobPreferenceViewModel.city.country.id"
            label="Country"
            icon="/assets/icons/city.svg"
            placeholder="Country"
            api="country?"
            :isSubmitted="isSubmitted"
            :parentId="-1"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <form-autocomplete
            v-model="jobPreferenceViewModel.city.id"
            label="City"
            icon="/assets/icons/city.svg"
            placeholder="City"
            :api="`city?CountryId=${jobPreferenceViewModel.city.country.id}&`"
            :isSubmitted="isSubmitted"
            :parentId="jobPreferenceViewModel.city.country.id"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import axios from 'axios';
// Components imports
import AppSwitch from "../AppSwitch";
import FormAutocomplete from "./FormAutocomplete";

// AppSwitch component data imports:
import employmentTypeData from "../../data/talentRegistration/employmentTypeData";
import workplaceTypeData from "../../data/talentRegistration/workplaceTypeData";

import jobPreferenceViewModel from "../../data/jobPreferenceViewModel";

export default {
  name: "TalentRegistrationC",

  components: {
    AppSwitch,
    FormAutocomplete
  },

  props:{
    watchChange: Boolean,
    editPage: Boolean,
    postJob: Boolean,
    registration: Boolean
  },

  data: () => ({
    employmentTypeData,
    workplaceTypeData,
    jobPreferenceViewModel,
    valid: true,
    isSubmitted: false,

    minSalaryRules: [
        v =>!!v || "Salary is required.",
        v => v < 10000000 || "Not allowed salary value."
    ]
  }),

  watch:{
    watchChange(){
      this.$refs.form.validate();
      this.isSubmitted = !this.isSubmitted;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/style";

form {
  margin-left: auto;
  margin-right: auto;
}
</style>