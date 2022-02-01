<template>
  <header id='header'>
    <div class="left-side">
      <div class="logo">
        <h1>workify</h1>
      </div>
      <div class="pages-name">
        <router-link to="/" class="page">
          <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.1255 1.01303L15.8709 7.91153C16.1911 8.24053 16.3749 8.69903 16.3749 9.17066V16.4997C16.3749 17.4648 15.6338 18.2497 14.7229 18.2497H11.9999V10.3747C11.9999 9.89166 11.6088 9.49966 11.1249 9.49966H5.87488C5.391 9.49966 4.99988 9.89166 4.99988 10.3747V18.2497H2.27775C1.36688 18.2497 0.624878 17.4648 0.624878 16.4997V9.17066C0.624878 8.69903 0.808628 8.24053 1.128 7.91241L7.87425 1.01303C8.20413 0.676157 8.79563 0.676157 9.1255 1.01303ZM10.2501 17.375H6.75005V11.25H10.2501V17.375Z" fill="#808080"/>
            <defs>
              <linearGradient id="paint0_linear_363_983" x1="0.624878" y1="9.50502" x2="16.3749" y2="9.50502" gradientUnits="userSpaceOnUse">
                <stop stop-color="#10375C"/>
                <stop offset="0.475194" stop-color="#13406A"/>
                <stop offset="1" stop-color="#1C65AB"/>
              </linearGradient>
            </defs>
          </svg>
          <div class="page-name">Home</div>
        </router-link>
        <router-link to="/people" class="page">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00005 6.89999C8.87526 6.89999 9.71463 6.55231 10.3335 5.93344C10.9524 5.31457 11.3 4.4752 11.3 3.59999C11.3 2.72477 10.9524 1.88541 10.3335 1.26654C9.71463 0.647666 8.87526 0.299988 8.00005 0.299988C7.12484 0.299988 6.28547 0.647666 5.6666 1.26654C5.04773 1.88541 4.70005 2.72477 4.70005 3.59999C4.70005 4.4752 5.04773 5.31457 5.6666 5.93344C6.28547 6.55231 7.12484 6.89999 8.00005 6.89999ZM3.32381 16.8C1.65384 16.8 0.247103 15.3962 0.886177 13.8533C1.27314 12.9191 1.84032 12.0703 2.55533 11.3553C3.27034 10.6403 4.11918 10.0731 5.05339 9.68612C5.98759 9.29915 6.98887 9.09999 8.00005 9.09999C9.01123 9.09999 10.0125 9.29915 10.9467 9.68612C11.8809 10.0731 12.7298 10.6403 13.4448 11.3553C14.1598 12.0703 14.727 12.9191 15.1139 13.8533C15.753 15.3962 14.3463 16.8 12.6763 16.8H3.32381Z" fill="#808080"/>
          </svg>
          <div class="page-name">People</div>
        </router-link>
        <router-link to="/jobs" class="page">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0833 0.0695923C13.0374 -0.20301 14.0319 0.349459 14.3045 1.30357C14.3504 1.46409 14.3736 1.63021 14.3736 1.79716V3.30123H16.1702C17.1625 3.30123 17.9669 4.10564 17.9669 5.09793V15.8781C17.9669 16.8704 17.1625 17.6748 16.1702 17.6748H1.79669C0.804407 17.6748 0 16.8704 0 15.8781H0.0240609C0.00811373 15.7815 7.19257e-05 15.6836 7.19257e-05 15.5855V4.8772C7.19257e-05 4.07502 0.531853 3.37002 1.30318 3.14964L12.0833 0.0695923ZM7.31266 15.8781H16.1702V5.09793H14.3736V6.89463H16.1702V8.69132H14.3736V12.5054C14.3736 13.3076 13.8418 14.0126 13.0705 14.233L7.31266 15.8781ZM1.79657 4.87717V15.5854L12.5767 12.5054V1.79713L1.79657 4.87717ZM10.78 6.89463C10.78 7.39078 10.3778 7.79298 9.8817 7.79298C9.38556 7.79298 8.98336 7.39078 8.98336 6.89463C8.98336 6.39849 9.38556 5.99628 9.8817 5.99628C10.3778 5.99628 10.78 6.39849 10.78 6.89463Z" fill="#808080"/>
          </svg>
          <div class="page-name">Jobs</div>
        </router-link>
      </div>
    </div>
    <div class="right-side">
      <div class="registration">
        <router-link @click="joinNow" to='/registration' :style="`display: ${this.isAuthenticated?'none':'flex'}`" class="join-now">Join now</router-link>
        <router-link @click="signIn" to='/login' :style="`display: ${this.isAuthenticated?'none':'flex'}`" class="sign-in">Sign in</router-link>
        <div v-if="this.isAuthenticated" class="join-now">{{displayName}}</div>
        <div class="sign-in" :style="`display: ${this.isAuthenticated?'flex':'none'}`" @click='signOut'>Sign out</div>
      </div>
      <div class="select-lang">
        <div>Eng</div>
        <img src="/assets/icons/ArrowDown2.svg" alt="Not found">
      </div>
    </div>
  </header>
</template>


<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
  data: () => ({
    isAuthenticated : localStorage.getItem("user") != null,
    displayName : 'DisplayName'
  }),
  methods: {
    signOut(){
      localStorage.removeItem("user");
      window.location.reload();
    },

    joinNow(){
      this.$router.push("/registration")
    },

    signIn(){
      this.$router.push("/login")
    },
  }
});
</script>


<style lang='scss' scoped>

//General Colors for stling:
$MainBtnBgColor: #8B39E5;
$UnselectedIconColor: #c2c2c2;
$SelectedPageNameColor:#877BFB;
$mainTextColor: #343C44;


//Styling Header:

#header{
  width: 100%;
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  // height: fit-content;
  box-sizing: border-box;

  %unselected-text {
    margin-left: 12px;
    font-family: 'Mulish',sans-serif;
    color: $UnselectedIconColor;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
  }
  .left-side{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    .logo h1{
      font-family: 'Mulish', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 38px;
      color: #56657F;
      margin: 0;
    }

    .pages-name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 114px;
      .page:nth-child(2) {
        margin-left: 35px;
        margin-right: 35px;
      }
      .page {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin: 0;
        .page-name{
          @extend %unselected-text
        }
      }
      svg{
        path{
          fill: $UnselectedIconColor;
        }
      }
      .router-link-active{
        svg{
          path{
            fill:#877BFB;
          }
        }
        .page-name{
          color: $SelectedPageNameColor;
        }
      }
    }
  }
  .right-side{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    .registration{
      display: flex;
      .join-now{
        @extend %unselected-text;
        text-decoration: none;
        margin-right: 15px;
      }
      .router-link-active.join-now{
        color: $SelectedPageNameColor;
      }
      .sign-in{
        @extend %unselected-text;
        color: white;
        text-decoration: none;
        background: $MainBtnBgColor;
        border-radius: 35px;
        padding: 12px 30px;
        cursor: pointer;
      }
    }
    .select-lang{
      margin-left: 33px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div{
        @extend %unselected-text;
        margin-right: 10px;
        color:#343C44;
      }
    }
  }
}


</style>
