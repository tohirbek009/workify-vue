<template>
  <div class="footer">
    <div class="top-section">
      <div class="block">
        <div class="logo">
          <h1>workify</h1>
        </div>
        <p>Job posting platform</p>
        <router-link to="/" class='router-link'>
          <div class="contact-btn">Contacts</div>
        </router-link>
      </div>
      <div class="block">
        <div class="main-text">General</div>
        <router-link class="router-link" to="/sign-up">
          <div class="text">Sign up</div>
        </router-link>
        <router-link class="router-link" to="/">
          <div class="text">Help center</div>
        </router-link>
        <router-link class="router-link" to="/">
          <div class="text">About</div>
        </router-link>
        <router-link class="router-link" to="/">
          <div class="text">FAQ</div>
        </router-link>
        <router-link class="router-link" to="/">
          <div class="text">Partners</div>
        </router-link>
      </div>
      <div class="block">
        <div class="main-text">Recruiters</div>
        <router-link class="router-link" to="/jobs">
          <div class="text">Post a job</div>
        </router-link>
        <router-link class="router-link" to="/people">
          <div class="text">Search talents</div>
        </router-link>
        <router-link class="router-link" to="/">
          <div class="text">Recruiter login</div>
        </router-link>
        <router-link class="router-link" to="/">
          <div class="text">Recruiter advice</div>
        </router-link>
      </div>
      <div class="block">
        <div class="main-text">Job seekers</div>
        <router-link class="router-link" to="/jobs">
          <div class="text">Search jobs</div>
        </router-link>
        <router-link class="router-link" to="/sign-in">
          <div class="text">Jobseeker login</div>
        </router-link>
        <router-link class="router-link" to="/">
          <div class="text">Jobseeker advice</div>
        </router-link>
      </div>
    </div>
    <div class="bottom-section">
      <div class="left">
        <div>All rights reserved 2021</div>
      </div>
      <div class="right">
        <div class="social-medias">
          <a href="/"><img src="/assets/icons/instagram.svg" alt="Not found"></a>
          <a href="/"><img src="/assets/icons/facebook.svg" alt="Not found"></a>
          <a href="/"><img src="/assets/icons/youtube.svg" alt="Not found"></a>
          <a href="/"><img src="/assets/icons/telegram.svg" alt="Not found"></a>
        </div>
        <div class="select-lang">
          <div>Language</div>
          <img src="/assets/icons/ArrowDown.svg" alt="Not found">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer'
});
</script>

<style lang='scss' scoped>
.footer{

  // General text style:
  $footerBgColor: #8B39E5;
  %general-text-styling {
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    // letter-spacing: -0.204545px;
    color: #FFFFFF;
  }

  margin-top: 100px;
  padding: 70px 200px 70px 165px;
  background-color: $footerBgColor;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top-section{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-bottom: 40px;
    border-bottom: 2px solid #326AFD;
    .block{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .logo h1{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 35px;
        line-height: 41px;
        color: #FFFFFF;
        margin: 0;
      }
      p{
        @extend %general-text-styling;
        font-weight: 300;
        margin: 10px 0 0 0;
      }
      .main-text{
        @extend %general-text-styling;
      }
      .router-link{
        text-decoration: none;
        .text{
          @extend %general-text-styling;
          font-weight: 300;
          margin-top: 20px;
        }
        .contact-btn{
          margin-top: 55px;
          padding: 12px 55px;
          background-color: #fff;
          @extend %general-text-styling;
          color: #132146;
          border-radius: 8px;
        }
      }
    }
  }
  .bottom-section{
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .left{
      div{
        @extend %general-text-styling;
        color: #E1E6F0;
        font-weight: 300;
      }
    }

    .right{
      display: flex;
      justify-content: space-between;
      .social-medias{
        a{
          margin-left: 20px;
        }
      }
      .select-lang{
        margin-left: 33px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
          @extend %general-text-styling;
          font-weight: 300;
          margin-right: 8px;
        }
      }
    }
  }
}

</style>
