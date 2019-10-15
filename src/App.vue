
<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/firstPage">Resultados</router-link>
      <router-link to="/secondPage">Nostros</router-link>
    </div>
     <br> <br>

    <router-view></router-view>
  <!--   <Survey> </Survey> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  computed: mapState(['title']),
};
</script>

<style >

</style>