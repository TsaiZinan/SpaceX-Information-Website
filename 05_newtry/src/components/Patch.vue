<template>
  
    <a class="btn" href="#">
      <img 
        :src="single_mission.links.mission_patch_small" 
      >
    </a>
    
    <!-- <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="single_mission.links.mission_patch_small" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="single_mission.mission_name">
            
            <b-card-text>
              {{ single_mission.launch_date_utc }}
            </b-card-text>

            <b-card-text>
              {{ single_mission.rocket.first_stage.cores[0].core_serial }}
            </b-card-text>

            <b-button @click="next" variant="success" href="#">
              next
            </b-button>

          </b-card-body>
        </b-col>
      </b-row>
    </b-card> -->
  
  
    
</template>

<script>
export default {
  props: {
    single_mission: Object,
    next: Function
  }
}
</script>

<style scoped>
  .btn {
    display: inline-block;
    width: 200px;
    height: 200px;
    background: #f1f1f1;
    margin: 16px;
    border-radius: 10%;
    box-shadow: 5px 5px 21px -5px #00000070;
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