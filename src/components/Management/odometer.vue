<template>
  <IOdometer
    class="iOdometer"
    :value="num"
  />
</template>

<script type="text/babel">
  import IOdometer from 'vue-odometer';
  import 'odometer/themes/odometer-theme-default.css';

  export default {
    name: 'view',
    components: {
      IOdometer
    },
    data() {
      return {
        num: 0
      };
    },
    mounted() {
      const that = this;
      setInterval(function() {
        that.num+=1;
        if(that.num==58){
          that.num=0;
        }
        
      }, 7000);
    }
  };
</script>

<style scoped>
  .iOdometer {

    margin: 0;
  }
</style>

