<template>
  <div class="container">
    <div v-if="content.type == 'image'">
      <img class="content-body" 
        :src="content.url">
      </img>
    </div>
    <div v-if="content.type == 'video'">
      <iframe class="content-body" 
        :src="content.url">
      </iframe>
    </div>
    <div v-if="content.type == 'article'">
      <img class="content-body" 
        src="https://yaninatrekhleb.github.io/quarantine-what-to-do/images/movies/30-40.jpg">
      </img>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContentBox',
    props: ['content']
  }
</script>

<style scoped>
  .content-body {
    width: 400px;
    min-height: 200px;
  }
</style>
