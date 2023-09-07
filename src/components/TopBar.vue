<template>
<header>
 <GraphicsTeste/>
</header>
</template>
  
  <script lang="ts">
      import { defineComponent } from 'vue';
      import GraphicsTeste from './GraphicsTeste.vue';
  
      export default defineComponent({
    name: 'TopBar',
    methods: {},
    components: { GraphicsTeste }
})
  </script>
  
  <style>
  header {
      padding: 1rem;
      width: 100%;
      height: 100vh;
      box-shadow: 0 2px 4px rgba(49, 47, 47, 0.4)
    }
    @media only screen and (max-width: 768px) {
      header {
        padding: 2.5rem;
        height: auto;
      }
    }
  </style>