<template>
  <v-app>
    <section id="find-job-talent">
      <img src="/assets/icons/Vector.svg?data" class="img" alt="Img is not found">
      <div class="left-side">
        <div class="section-main-text">
          Find aspiring talents and great employers
        </div>
        <div class="section-text">
          Finding the best candidate is always hard.
          Tell us what you are looking for and choose one from among the best.
        </div>
        <div class="text">Hire a talent</div>
        <div class="hire-talent">
          <div class="find-talent">
            <img src="/assets/icons/SearchTalent.svg?data" alt="Img is not found">
            <input type="text" placeholder="Who are you looking for?"/>
            <div class="search-btn">Search</div>
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="section-main-img">
          <img src="/assets/icons/Illustration.svg?data" alt="Img is not found">
        </div>
      </div>
    </section>
    <section class="find-position-blocks">
      <div
          v-for="block in dataBlock"
          :key='block.id'
          class="block"
      >
        <img class="rectangle" src="/assets/icons/Rectangle.svg?data" alt="Img is not found">
        <div class="top">
          <img :src="block.icon" class='icon'/>
        </div>
        <div class="mainText">{{block.mainText}}</div>
        <div class="text">{{block.text}}</div>
      </div>
    </section>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend ({
  name: "Intro",
  data: () => ({
    dataBlock: [
      {
        id: '1',
        icon: '/assets/icons/FindRecruits.svg?data',
        mainText: 'Professional recruiter',
        text: 'Finding the best candidate is always hard.'
      },
      {
        id: '2',
        icon: '/assets/icons/person-add.svg',
        mainText: 'Find the right job you want fast',
        text: 'Launch your career on Workify.'
      },
      {
        id: '3',
        icon: '/assets/icons/Message.svg?data',
        mainText: 'All rofessionals need some help',
        text: 'As a pro recruiter, you need various skills to hire a great talent.'
      },
      {
        id: '4',
        icon: '/assets/icons/Search.svg?data',
        mainText: 'Searching a job may be long and boring',
        text: 'Landing a good gig can be hard, when you have a strong competition.'
      }
    ]
  })
})
</script>

<style lang='scss' scoped>
// find-job-talent section styling:
$mainColor: #8B39E5;
$boxShadow: 0px 2px 8px rgba(117, 131, 142, 0.04), 0px 16px 24px rgba(52, 60, 68, 0.12);
 %generalTextStyle {
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 55px;
  color: #343C44;
}

#find-job-talent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 150px 0 100px 81px;
  box-sizing: border-box;
  height: 100vh;

  .img {
    position: absolute;
    left: -6px;
    bottom: 153px;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    flex: 1;
    position: relative;

    .section-main-text {
      @extend %generalTextStyle;
      font-weight: 600;
      width: 491px;
      margin-bottom: 25px;
    }

    .section-text {
      @extend %generalTextStyle;
      font-size: 18px;
      line-height: 24px;
      width: 510px;
    }

    .text {
      @extend .section-text;
      font-size: 18px;
      margin-top: 50px;
      margin-bottom: 40px;
    }

    .hire-talent {
      .find-talent {
        position: absolute;
        z-index: 2;
        bottom: 44px;
        left: 0;
        width: 800px;
        background: #FFFFFF;
        box-shadow: $boxShadow;
        border-radius: 60px;
        display: flex;
        justify-content: space-between;
        padding: 5px 5px 5px 70px;

        img {
          position: absolute;
          left: 40px;
          top: 50%;
          transform: translateY(-50%)
        }

        input {
          width: 80%;
          border: none;
          outline: none;
          padding: 20px 0;

          &::placeholder {
            @extend .section-text;
            color: #C2C2C2;
            font-size: 16px;
          }
        }

        .search-btn {
          @extend .section-text;
          background-color: $mainColor;
          padding: 20px 49px;
          width: fit-content;
          color: white;
          font-size: 16px;
          border-radius: 60px;
        }
      }
    }
  }

  .right-side {
    flex: 2;

    .section-main-img {
      width: 100%;
      height: 100vh;

      img {
        width: 100%;
        transform: scale(1, 1.04);
      }
    }
  }
}

//find-position-blocks:
.find-position-blocks {
  padding: 60px 150px 70px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .block {
    width: 23%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 67px 50px 40px 50px;
    height: 314px;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 35px;
    transition: all 0.3s ease-in-out;
    position: relative;
    background-color: #fff;

    &:nth-child(2) {
      padding: 40px 50px 40px 50px;
    }

    //Hover effec:
    &:hover {
      border: 0.7px solid #877BFB;
      box-shadow: 0px 50px 40px rgba(0, 0, 0, 0.01), 0px 40px 76.8519px rgba(0, 0, 0, 0.01);
      border-radius: 35px;
      cursor: pointer;

      .rectangle {
        opacity: 1;
      }

      .top {
        .icon {
          margin-left: 70px;
        }
      }

      .mainText {
        margin-top: 55px;
      }
    }

    .rectangle {
      position: absolute;
      z-index: -2;
      bottom: -30px;
      left: -30px;
      opacity: 0;
      transition: all 0.3s ease-in-out !important;
    }

    .top {
      .icon {
        width: 32px;
        height: 32px;
        transition: all 0.3s ease-in-out;
      }
    }

    .mainText {
      @extend %generalTextStyle;
      font-size: 20px;
      line-height: 110%;
      margin: 18px 0;
      transition: all 0.3s ease-in-out;
    }

    .text {
      @extend %generalTextStyle;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.3px;
    }
  }
}
</style>