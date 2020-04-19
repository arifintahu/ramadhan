<template>
  <div class="container">
    <div class="title">{{num_items}} Ideas To Do During Ramadhan</div>
  </div>
</template>

<script>
  export default {
    name: 'ContentHeader',
    props: ['num_items', 'content']
  }
</script>

<style scoped>
  .title {
    font-family: 'Indie Flower', cursive;
  }
</style>
