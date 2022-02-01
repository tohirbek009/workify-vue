<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row>

      <v-col cols="12" sm="6">
        <!--        First name input:-->
        <div class="input-field">
          <label for="first-name">First name</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-text-field
              v-model="talentViewModel.firstName"
              :rules="talentFirstNameRules"
              placeholder="First name"
              required
              outlined
              class="form-input"
              color="#CCD2E3"
              dense
              id="first-name"
              height="51"
          ></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <!--        Last name input:-->
        <div class="input-field">
          <label for="last-name">Last name</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-text-field
              v-model="talentViewModel.lastName"
              :rules="talentLatsNameRules"
              placeholder="Last name"
              required
              outlined
              class="form-input"
              color="#CCD2E3"
              dense
              id="last-name"
              height="51"
          ></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="6" v-if="!editPage">
        <!--        Email input:-->
        <div class="input-field">
          <label for="email">Email</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-text-field
              v-model="talentViewModel.user.email"
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

      <v-col cols="12" sm="6" v-if="!editPage">
        <!--        Password input:-->
        <div class="input-field">
          <label for="password">Password</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-text-field
              v-model="talentViewModel.user.password"
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
        <!--        Switch gender:-->
        <div class="input-field">
          <AppSwitch
              label="Gender"
              switchType='colorless'
              :itemData='genderData'
              v-model="selectedGender"
          />
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <!--        Date input:-->
        <div class="input-field">
          <label for="date">Date of birth</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-menu
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              v-model="dateMenu"
              max-width="290px"
              min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="dateFormatted"
                  placeholder="dd/mm/yyyy"
                  :rules="dateRules"
                  outlined
                  v-bind="attrs"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                  class="form-input"
                  dense
                  id="date"
                  height="51"
              ></v-text-field>
            </template>
            <v-date-picker
                v-model="date"
                no-title
                @input="dateMenu = false"
            ></v-date-picker>
          </v-menu>
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <!--        Location input: -->
        <div class="input-field">
          <label for="location">Location</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-autocomplete
              v-model="talentViewModel.user.city.id"
              :loading="dropdownData.loadingLocation"
              :items="dropdownData.itemsLocation"
              :item-text="dropdownData.itemsLocation.text"
              :item-value="dropdownData.itemsLocation.value"
              :search-input.sync="searchLocation"
              cache-items
              flat
              :rules="dropdownRule"
              hide-no-data
              hide-detail
              placeholder="Location"
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
        <!--   Phone number input:-->
        <div class="input-field">
          <label for="phone">Phone</label>
          <div class="autocomplete__icon">
            <img src="/assets/icons/city.svg"/>
          </div>
          <v-text-field
              v-model="talentViewModel.user.phoneNumber"
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
    </v-row>
    <v-row class="d-flex justify-center" v-if="!editPage">
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
import axios from "axios";
import {AutocompleteService} from "@/services/autocomplete.service";
// talentRegistration data imports:
import dropdownData from "@/data/registrationDropdownData";
import talentViewModel from '@/data/talentRegistration/talentViewModel';
import genderData from "@/data/talentRegistration/genderData";

// components imports:
import AppSwitch from "@/components/AppSwitch";

export default {
  name: "TalentRegistrationA",
  components: {
    AppSwitch
  },
  props: {
    value: {
      type: Boolean
    },
    watchChange: Boolean,
    editPage: Boolean
  },
  data() {
    return {
      talentViewModel,
      genderData,
      dropdownData,
      valid: this.value,
      isLoading: false,
      selectedGender: 1,
      emailExist: '',
      showPass: false,
      date: '',
      dateFormatted: "",
      dateMenu: false,
      searchLocation: '',

      //Talent form data items rules (validation):
      talentFirstNameRules: [
        v => !!v || 'First name is required',
      ],
      talentLatsNameRules: [
        v => !!v || 'Last name is required',
      ],
      phoneRules: [
        v => !!v || "Phone number is required",
      ],
      dateRules: [
        v => !!v || "Date time is required",
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 4 || 'Min 4 characters',
      ],
      dropdownRule: [
        v => v !== 0 || "Select one option"
      ],
    }
  },

  methods: {
    async submit() {
      this.$refs.form.validate();
      this.talentViewModel.gender = this.selectedGender === 1;
      this.talentViewModel.dateOfBirth = (new Date(this.dateFormatted)).toISOString();


      try {
        this.isLoading = true
        const response = await axios.post('https://localhost:7285/api/talent', this.talentViewModel)
        console.log("Company register: ", response.data)

        localStorage.setItem("user", JSON.stringify(response.data.data))
        await this.$router.push("/registration/talent")


      } catch (ex) {
        this.isLoading = false;
        if (ex.response && ex.response.status === 409) {
          this.emailExist = "This email is already exist."
        }
      }
      this.isLoading = false;
    },

    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },

    async querySelections(v, api) {
      this.dropdownData.loadingLocation = true

      // Simulated ajax query
      const responseAxios = await axios.get(`https://localhost:7285/api/${api}?Name=${v}`)

      const filteredData = responseAxios.data.data.filter((e) => {
        return (e.name || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
      })


      filteredData.forEach(el => {
        this.dropdownData.itemsLocation.push({
          value: el.id,
          text: `${el.name}, ${el.country.name}`
        })
      })

      this.dropdownData.loadingLocation = false
    },

  },

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date)
    },

    searchLocation(val) {
      const service = new AutocompleteService();
      val && val !== this.dropdownData.selectedLocation && service.querySelections(val, 'city?', "Location")
    },

    watchChange() {
      this.$refs.form.validate();
      this.talentViewModel.gender = this.selectedGender === 1;
      this.talentViewModel.dateOfBirth = (new Date(this.dateFormatted)).toISOString();
    },

    valid(newVal) {
      this.$emit('input', newVal)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/style";

form {
  max-width: 900px;
  margin: 70px auto 0 auto;
}
</style>