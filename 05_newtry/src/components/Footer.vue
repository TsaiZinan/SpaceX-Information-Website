<template>
    <div>
      
      
      <!-- <b-button variant="light">Light</b-button> -->


      <div>
        <a href="https://www.instagram.com/zinan_tsai/">
          <b-img 
            v-bind="mainProps" 
            rounded="lg" 
            src="https://i.imgur.com/b3Cmljl.png"
            alt="Instragram"
          ></b-img>
        </a>

        <a href="https://github.com/TsaiZinan">
          <b-img 
            v-bind="mainProps" 
            rounded="lg" 
            src="https://i.imgur.com/vMEmXDt.png"
            alt="Github"
          ></b-img>
        </a>

        <a href="https://www.facebook.com/ZinanTsai/">
          <b-img 
            v-bind="mainProps" 
            rounded="lg" 
            src="https://i.imgur.com/tL1uq1W.png"
            alt="Facebook"
          ></b-img>
        </a>

        <a href="https://www.youtube.com/channel/UCkoYSNGFUExdmsAaEiRsqlQ">
          <b-img 
            v-bind="mainProps" 
            rounded="lg" 
            src="https://i.imgur.com/zy7NitN.png"
            alt="Youtube"
          ></b-img>
        </a>

        <a href="https://www.linkedin.com/in/zinan-cai-183629a8/">
          <b-img 
            v-bind="mainProps" 
            rounded="lg" 
            src="https://i.imgur.com/EDuKYoW.png"
            alt="Linkedin"
          ></b-img>
        </a>   
        
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
  .p {
    padding-top: 205px;
  }
</style>