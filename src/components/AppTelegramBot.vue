<template>
  <div class="wrapper">
    <div class="main-text">
      Start our Telegram bot to be notified when a talent is interested in your job vacancy
    </div>
    <div class="telegram-bot">
      <div class="click">Click here!</div>
      <img class="arrow-down" src="/assets/icons/ArrowDown2.svg"/>
      <img src="/assets/icons/telegram-bot.svg" />

      <div class="mt-10">
        <div class="ma-auto position-relative" style="max-width: 300px">
          <v-otp-input
              v-model="code"
              :disabled="loading"
              @finish="onFinish"
          ></v-otp-input>
          <v-overlay color="transparent" absolute :value="loading">
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
          </v-overlay>
        </div>

        <v-snackbar
            v-model="snackbar"
            :color="snackbarColor"
            :timeout="1000"
        >
          {{ text }}
        </v-snackbar>
      </div>


    </div>

    <div class="buttons">
      <app-button type="primary-light" size="lg">
        Back
      </app-button>
      <app-button type="primary" size="lg">
        Next
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton";
export default {
  name: "AppTelegramBot",
  components: {
    AppButton
  },
  data: () => ({
    loading: false,
    snackbar: false,
    snackbarColor: 'default',
    code: '',
    text: '',
    expectedOtp: '111111',
  }),
  methods: {
    onFinish (rsp) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.snackbarColor = (rsp === this.expectedOtp) ? 'success' : 'warning'
        this.text = `Your code "${rsp}" is (${this.snackbarColor})`
        this.snackbar = true
        setTimeout(()=>{
          if(rsp === this.expectedOtp){
            this.$router.push("/registration/telegram-bot/dashboard_congratulation")
          }
        },1000)
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'src/styles/style';
  .wrapper{
    padding-top: 130px;
    .main-text{
      max-width: 800px;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
      font-family: $font-family;
      font-weight: bold;
      font-size: 36px;
    }
    .telegram-bot{
      margin: 50px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .click{
        color: $primary;
        cursor: pointer;
      }
      .arrow-down{
        margin: 10px;
      }
    }

    .position-relative {
      position: relative;
    }
  }
</style>