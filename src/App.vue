<template>
  <div id="app">

    <section class="header">
      <ContentHeader :num_items="num_items"></ContentHeader>
    </section>

    <b-button class="button" type="is-link" @click.prevent="clickNext">
      Next Activity
    </b-button>
    <section class="content">
      <div v-if="done" class="subtitle">{{item.title}}</div>
      <ContentBox :content="item" v-if="done"></ContentBox>
    </section>

    <Loader v-if="!done"></Loader>

    <section class="footer">
      <Footer></Footer>
    </section>

  </div>
</template>

<script>
  import ContentBox from '@/components/ContentBox.vue'
  import ContentHeader from '@/components/ContentHeader.vue'
  import Footer from '@/components/Footer.vue'
  import Loader from '@/components/Loader.vue'
  import items from './items.js'

  export default {
    name: 'App',
    components: {
      ContentBox,
      ContentHeader,
      Footer,
      Loader
    },
    data: () => ({
      item: '',
      list: [],
      num_items : 0,
      next : 0,
      done : false
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
        this.done = false;
        this.loading();
        this.item = this.list[this.next];
      },
      loading() {
        setTimeout(() => {
          this.done = true;
        }, 1000)
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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 60px;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
  .footer {
    padding-bottom: 30px;
  }
  .subtitle {
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 0px;
  }
  .button {
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
