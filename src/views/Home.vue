<template>
  <div class="home">
    home
    <div class="box-wrapper">
      <div class="box">box</div>
      <div>messageFromVuex: {{messageFromVuex}}</div>
    </div>
    <div>totalVuePackages: {{totalVuePackages}}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Home",
  data(){
    return {
      totalVuePackages: null,
    }
  },
  components: {

  },
  created() {
    axios.get("https://api.npms.io/v2/search?q=vue")
      .then(response => this.totalVuePackages = response.data.total);
  },
  computed: {
    messageFromVuex(){
      return 'a';
    }
  }
};
</script>
<style scoped lang="scss">
.box-wrapper {
  .box {
    width: 50px;
    height: 50px;
    background-color: blue;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>