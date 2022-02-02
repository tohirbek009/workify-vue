<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row>

      <v-col cols="12" sm="6">
        <div class="input-field">
          <label for="company-name">Company name</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-text-field
              v-model="companyViewModel.name"
              :rules="companyNameRules"
              placeholder="Company name"
              required
              outlined
              class="form-input"
              color="#CCD2E3"
              dense
              id="company-name"
              height="51"
          ></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="input-field">
          <label for="phone">Phone</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-text-field
              v-model="companyViewModel.user.phoneNumber"
              :rules="phoneRules"
              placeholder="991231212"
              required
              outlined
              class="form-input"
              color="#CCD2E3"
              id="phone"
              dense
              height="51"
          ></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="input-field">
          <label for="email">Email</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-text-field
              v-model="companyViewModel.user.email"
              :rules="emailRules"
              :error-messages="emailExist"
              placeholder="Email"
              required
              outlined
              class="form-input"
              color="#CCD2E3"
              id="email"
              dense
              height="51"
          ></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="input-field">
          <label for="password">Password</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-text-field
              v-model="companyViewModel.user.password"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass ? 'text' : 'password'"
              :rules="passwordRules"
              placeholder="Password"
              required
              outlined
              class="form-input"
              id="password"
              @click:append="showPass = !showPass"
              color="#CCD2E3"
              dense
              height="51"
          ></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="input-field">
          <label for="website">Website</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-text-field
              v-model="companyViewModel.website"
              :rules="websiteRules"
              placeholder="Website"
              required
              outlined
              class="form-input"
              color="#CCD2E3"
              id="website"
              dense
              height="51"
          ></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="input-field">
          <label for="industry">Industry</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-autocomplete
              v-model="companyViewModel.industry.id"
              :loading="dropdownData.loadingIndustry"
              :items="dropdownData.itemsIndustry"
              :item-text="dropdownData.itemsIndustry.text"
              :item-value="dropdownData.itemsIndustry.value"
              :search-input.sync="searchIndustry"
              cache-items
              flat
              :rules="dropdownRule"
              hide-no-data
              hide-detail
              placeholder="Industry"
              solo
              outlined
              required
              color="#CCD2E3"
              class="form-input"
              id="industry"
              dense
              height="51"
          ></v-autocomplete>
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="input-field">
          <label for="country">Country</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-autocomplete
              v-model="companyViewModel.user.city.country.id"
              :loading="dropdownData.loadingCountry"
              loader-height="2"
              :items="dropdownData.itemsCountry"
              :item-text="dropdownData.itemsCountry.text"
              :item-value="dropdownData.itemsCountry.value"
              :search-input.sync="searchCountry"
              cache-items
              flat
              :rules="dropdownRule"
              hide-no-data
              hide-detail
              placeholder="Country"
              solo
              outlined
              required
              color="#CCD2E3"
              class="form-input"
              id="country"
              dense
              height="51"
          ></v-autocomplete>
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="input-field">
          <label for="city">City</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-autocomplete
              v-model="companyViewModel.user.city.id"
              :loading="dropdownData.loadingCity"
              :items="dropdownData.itemsCity"
              :item-text="dropdownData.itemsCity.text"
              :item-value="dropdownData.itemsCity.value"
              :search-input.sync="searchCity"
              :disabled="!(this.companyViewModel.user.city.country.id> 0)"
              cache-items
              flat
              :rules="dropdownRule"
              hide-no-data
              hide-detail
              placeholder="City"
              solo
              outlined
              required
              color="#CCD2E3"
              class="form-input"
              id="city"
              dense
              height="51"
          ></v-autocomplete>
        </div>
      </v-col>

    </v-row>

    <v-row v-if="!editPage" class="d-flex justify-center">
      <v-btn
          color="primary"
          outlined
          depressed
          large
          width="180"
          class="rounded-pill custom--v-btn"
      >
        Back
      </v-btn>
      <v-btn
          color="primary"
          depressed
          large
          width="180"
          :loading="isLoading"
          class="rounded-pill custom--v-btn ml-5"
          @click="submit"
      >
        Next
      </v-btn>
    </v-row>

  </v-form>
</template>

<script>
import Vue from 'vue';
import axios from "axios";
import {AutocompleteService} from "@/services/autocomplete.service";

// companyRegistration data imports:
import dropdownData from "@/data/registrationDropdownData";
import companyViewModel from "@/data/companyRegistration/companyViewModel";


export default Vue.extend({
  props: {
    editPage: Boolean,
  },

  data: () => ({
    dropdownData,  //This dropDownData contains some company dropdowns data.
    companyViewModel,  //This is viewModel that will be sent to backend.
    valid: true,
    showPass: false,
    isLoading: false,
    emailExist: '',
    searchIndustry: null,
    searchCountry: null,
    searchCity: null,


    //Company form data items rules (validation):
    companyNameRules: [
      v => !!v || 'Name is required',
    ],
    phoneRules: [
      v => !!v || "Phone number is required",
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length >= 4 || 'Min 4 characters',
    ],
    websiteRules: [
      v => !!v || "Website is required"
    ],
    dropdownRule: [
      v => v !== 0 || "Select one option"
    ],

  }),

  watch: {
    searchIndustry(val) {
      const service = new AutocompleteService();
      val && val !== this.companyViewModel.industry.id && service.querySelections(val, 'industry?', 'Industry')
    },

    searchCountry(val) {
      const service = new AutocompleteService();
      val && val !== this.companyViewModel.user.city.country.id && service.querySelections(val, 'country?', 'Country')
    },

    searchCity(val) {
      const service = new AutocompleteService();
      val && val !== this.companyViewModel.user.city.id && service.querySelections(val, `city?CountryId=${this.companyViewModel.user.city.country.id}&`, 'City')
    }
  },


  methods: {
    async submit() {
      this.$refs.form.validate();
      console.log("Company data: ", this.companyViewModel)


      if (this.valid) {
        try {
          this.isLoading = true
          const response = await axios.post('https://localhost:7285/api/company', this.companyViewModel)
          console.log("Company register: ", response.data)

          localStorage.setItem("user", JSON.stringify(response.data.data))
          await this.$router.push("/registration/telegram-bot")

        } catch (ex) {
          this.isLoading = false;
          if (ex.response && ex.response.status === 409) {
            this.emailExist = "This email is already exist."
          }
        }
        this.isLoading = false;
      }
    },

  },


})
</script>

<style scoped>
form {
  max-width: 900px;
  margin: 70px auto 0 auto;
}
</style>