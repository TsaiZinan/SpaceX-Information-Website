<template>
  <div>
    
    
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
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
    </b-card>
  
  </div>
    
</template>

<script>
export default {
  props: {
    single_mission: Object,
    next: Function
  }
}
</script>

