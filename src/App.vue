<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-1">
      <SideBar />
    </div>
    <div class="column is-10" >
      <TopBar/>
    </div>
    <div class="column is 1">
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import TopBar from './components/TopBar.vue';


export default defineComponent({
    name: 'App',
    components: {
    SideBar,
    TopBar
},
});
</script>

<style>

</style>
