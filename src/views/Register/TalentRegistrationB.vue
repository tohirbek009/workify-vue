<template>
  <div class="talent-registration-b">
    <FormSkills :watchChange="watchChange" />
    <v-row class="d-flex justify-center">
      <v-btn
          color="primary"
          outlined
          depressed
          large
          width="180"
          class="rounded-pill custom--v-btn"
          @click="$router.push('/registration')"
      >
        Back
      </v-btn>
      <v-btn
          color="primary"
          large
          width="180"
          :loading="isLoading"
          class="rounded-pill custom--v-btn ml-5"
          @click="submit"
      >
        Next
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import FormSkills from "../../components/form/FormSkills";
import {ValidateService} from "@/services/validate.service";
import axios from "axios";

export default {
  name: "TalentRegistrationB",
  components: {
    FormSkills
  },
  data() {
    return {
      valid: false,
      isLoading: false,
      watchChange: false,
    }
  },
  computed:{
    ...mapGetters(['languagesData', 'skillsData'])
  },
  methods: {
    async submit() {
      this.watchChange = !this.watchChange;
      const validateService = new ValidateService();
      this.valid = validateService.SkillsLanguuagesValidate(this.languagesData, this.skillsData);

      if (this.valid) {
        // this.isLoading = true;
        await axios({
          method: 'post',
          url: "https://localhost:7285/api/talentskill",
          data: this.skillsData,
          headers: {
            "Authorization": `${JSON.parse(localStorage.getItem('user')).token}`
          }
        })
            .then(async () => {
              await axios({
                method: 'post',
                url: "https://localhost:7285/api/talentlanguage",
                data: this.languagesData,
                headers: {
                  "Authorization": `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
                }
              })
            })

        this.isLoading = false

        this.$emit('changeStep', 3)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/style';
  .talent-registration-b{
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
</style>