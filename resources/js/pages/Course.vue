
// Course.vue
<template>

      {{ $page.component }}
  <div>
    Course
  </div>
</template>

<script>
// import Layout from '../shared/Layout.vue';
export default {
//   layout: Layout,

mounted () {
    
    document.title = `Inertia App - ${this.$page.component}`
    
},


  props: {
    user: {
        type: String,
    },
  },
}
</script>

<style scoped>
</style>




