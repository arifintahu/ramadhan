<template>
  <div id="app">

    <section class="header">
      <div class="title">{{num_items}} ideas to do on Ramadhan</div>
      <div class="subtitle">{{item.title}}</div>
      <b-button type="is-primary" @click.prevent="clickNext">
        Next Activity
      </b-button>
    </section>

    <section class="content">
      <ContentBox :content="item"></ContentBox>
    </section>

    <section class="footer">
      <a href="https://github.com/arifintahu/ramadhan">
        <img src="/img/icons/github-logo-icon.png" alt="github logo" width="30"></img>
      </a>
    </section>

  </div>
</template>

<script>
  import ContentBox from '@/components/ContentBox.vue'
  import items from './items.js'

  export default {
    name: 'App',
    components: {
      ContentBox
    },
    data: () => ({
      item: '',
      list: [],
      num_items : 0,
      next : 0
    }),
    methods: {
      clickNext(){
        if (this.next+1 == this.list.length) {
          this.next = 0;
        } else {
          this.next = this.next + 1;
        }
        this.showContent();
      },
      showContent(){
        this.item = this.list[this.next];
      },
      shuffle(a) {
          for (let i = a.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [a[i], a[j]] = [a[j], a[i]];
          }
          return a;
      }
    },
    mounted() {
      this.list = this.shuffle(items);
      this.num_items = items.length;
      this.showContent();
    }
  }
</script>

<style>
  body {
    background: #fafafa;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 60px;
    height: 100%;
  }
</style>
