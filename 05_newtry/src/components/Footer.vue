// references: https://www.youtube.com/watch?v=fDm0WJ_66d0


<template>
    <div>
      
      
      <!-- <b-button variant="light">Light</b-button> -->

      <div>
        <a class="btn" href="https://www.instagram.com/zinan_tsai/">
          <img
            src="../assets/social_icon/instagram-brands.svg"
          >
        </a>

        <a class="btn" href="https://github.com/TsaiZinan">
          <img
            src="../assets/social_icon/github-brands.svg"
          >
        </a>

        <a class="btn" href="https://www.facebook.com/ZinanTsai/">
          <img
            src="../assets/social_icon/facebook-f-brands.svg"
          >
        </a>

        <a class="btn" href="https://www.youtube.com/channel/UCkoYSNGFUExdmsAaEiRsqlQ">
          <img
            src="../assets/social_icon/youtube-brands.svg"
          >
        </a>

        <a class="btn" href="https://www.linkedin.com/in/zinan-cai-183629a8/">
          <img
            src="../assets/social_icon/linkedin-in-brands.svg"
          >
        </a>
      </div>

      <div class="copyright">
        <!-- <a class="btn" href="https://www.instagram.com/zinan_tsai/">
          <b-img 
            v-bind="mainProps" 
            rounded="lg" 
            :src="require('../assets/social_icon/instagram-brands.svg')"
            
            alt="Instragram"
          ></b-img>
        </a> -->
        
        <p> © Copyright 2020 Zinan Tsai </p>

      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        mainProps: { blank: false, width: 40, height: 40, class: 'ml-2' }
      }
    }
  }
</script>

<style scoped>
  .copyright p{
    padding: 5px;
    height: 100%;
    color: #95a5a6;
  }
  .btn {
    display: inline-block;
    width: 60px;
    height: 60px;
    background: #f1f1f1;
    margin: 8px;
    border-radius: 20%;
    box-shadow: 0 3px 10px -3px #00000070;
    color: #34495e;
    overflow: hidden;
    position: relative;
  }
  .btn img {
    height:100%;
    width: 100%;
  }
  .btn:hover {
    transform: scale(1.05);
  }
</style>