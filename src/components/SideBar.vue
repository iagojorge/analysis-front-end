<template>
  <header>
    <div class="buttons">
     <v-btn prepend-icon="$vuetify" variant="text" block>User</v-btn>
      dashboard
      <v-btn prepend-icon="$vuetify" variant="text" block>Main</v-btn>
      <v-btn prepend-icon="$vuetify" variant="text" block>E-Commerce</v-btn>
      Paginas
      <v-btn prepend-icon="$vuetify" variant="text" block>Conta</v-btn>
      <v-btn prepend-icon="$vuetify" variant="text" block>Corporate</v-btn>
      <v-btn prepend-icon="$vuetify" variant="text" block>Blog</v-btn>
      <v-btn prepend-icon="$vuetify" variant="text" block>Social</v-btn>
    </div>
 
  
  </header>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'SideBar',
        methods: {
         teste(){
          console.log('teste');
         } 
        },
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