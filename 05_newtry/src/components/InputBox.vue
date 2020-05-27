<template>
  <div>
  <b-form inline>
    
    

    <b-form-input
      id="input-live"
      v-model="selected"
      :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter Flight Number"
      trim
    ></b-form-input>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    <p/>

    <b-button 
      class="submit"
      variant="primary"
      @click="submitNumber"
    >
      Submit
    </b-button>
  </b-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        selected: '',
        test: [91, 92, 93, 94],
        isNumber: false,
        msg: ''
      }
    },
    watch: {
      nameState(selected) {
        if (selected.length > 2) {
          // this.isNumber = true;
          return true
        } else {
          return false
        }
      }
    },
    computed: {
      
    },
    methods: {
      submitNumber() {
        this.$emit('submit_from_input', this.selected)
      }
    }
    
  }
</script>

<style scoped>

.submit {
  margin-block: 15px;
}

</style>