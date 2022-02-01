<template>
  <div class="edit-page">
    <company-registration :editPage="true"/>
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
          large
          width="160"
          depressed
          class="rounded-pill custom--v-btn"
          :loading="isLoading"
          @click="saveChanges"
      >
        Save
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import {mapActions, mapGetters} from "vuex";
import CompanyRegistration from "../../../views/Register/CompanyRegistration";
import companyViewModel from "@/data/companyRegistration/companyViewModel";
export default {
  name: "CompanyEditProfile",
  components: {
    CompanyRegistration
  },
  data: () => ({
    companyViewModel,
    aboutUser: "",
    isLoading: false,
  }),

  methods: {
    async saveChanges(){
      let company = JSON.parse(localStorage.getItem('user'));

      this.isLoading = true;

      await axios({
        method: 'put',
        url : `https://localhost:7285/api/company/${company.companyId}`,
        data : this.talentViewModel,
        headers : {
          "Authorization": `Bearer ${company.token}`
        }
      });

      this.isLoading = false;
    },

    ...mapActions(['getUserData'])
  },

  computed:{
    ...mapGetters(['userData'])
  },

  async mounted() {
    await this.getUserData();
    Object.assign(this.companyViewModel, this.userData);
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
    }
  }
</style>