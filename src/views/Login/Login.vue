<template>
  <div class="login">
    <app-component-title title="Login" />
    <v-form ref="form" v-model="valid" lazy-validation class="custom--v-form">
      <v-row>
        <v-col cols="12" class="pa-0">
          <!--        Email input:-->
          <div class="input-field">
            <label for="email">Email</label>
            <div class="autocomplete__icon">
              <img src="/assets/icons/city.svg"/>
            </div>
            <v-text-field
                v-model="loginViewModel.email"
                :rules="emailRules"
                placeholder="Email"
                required
                outlined
                class="form-input"
                color="#CCD2E3"
                id="email"
                dense
                height="51"
                :error-messages="error"
            ></v-text-field>
          </div>
        </v-col>

        <v-col cols="12" class="pa-0">
          <!--        Password input:-->
          <div class="input-field">
            <label for="password">Password</label>
            <div class="autocomplete__icon">
              <img src="/assets/icons/city.svg"/>
            </div>
            <v-text-field
                v-model="loginViewModel.password"
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
                :error-messages="error"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-btn
            color="primary"
            class="rounded-pill custom--v-btn"
            large
            width="180"
            depressed
            @click="signIn"
        >
          Sign in
        </v-btn>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios';
import AppComponentTitle from "@/components/AppComponentTitle";
import loginViewModel from "@/data/login/loginViewModel";
export default {
  name: "Login",
  components: {
    AppComponentTitle
  },
  data(){
    return {
      loginViewModel,
      valid: false,
      showPass: false,
      checkbox: false,
      error: "",

      // Rules for email and password:
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      passwordRules: [
        v => !!v || 'Password is required',
      ],
    }
  },

  methods: {
    async signIn(){
      this.$refs.form.validate();
      try {
        const res = await axios.post("https://localhost:7285/api/user/login", this.loginViewModel);
        localStorage.setItem("user", JSON.stringify(res.data.data))
        await this.$router.push("/dashboard")
      }catch (error){
        if(error && error.response.status === 404){
          this.error = "Incorrect email or password";
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/style";
  .login{
    padding-top: 110px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    .custom--v-form::v-deep{
      margin-top: 20px;
      padding: 30px;
      border: 1px solid $gray-lighter;
      border-radius: 20px;
      .custom--v-checkbox{
        opacity: 1 !important;
      }
    }
  }
</style>