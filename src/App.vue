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
      <p v-if="done" class="quote">{{item.quote}}</p>
      <p v-if="done" class="quote_name">{{item.quote_name}}</p>
    </section>

    <div class="my-loader" v-if="!done">
      <Loader></Loader>
    </div>

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
    padding-left: 30px;
    padding-right: 30px;
  }
  .footer {
    padding-bottom: 60px;
  }
  .subtitle {
    font-weight: 700px;
    font-family: Calibri, Helvetica, sans-serif;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 0px;
    max-width: 400px;
    margin: auto;
    font-size: 18px;
  }
  .quote {
    padding-top: 14px;
    max-width: 400px;
    margin: auto;
    text-align: center;
    font-size: 14px;
    font-family: Calibri, Helvetica, sans-serif;
    margin-bottom: 0px !important;
  }
  .quote_name {
    font-size: 12px;
    font-weight: 700;
    padding-top: 10px;
  }
  .button {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .my-loader {
    padding-top: 50px;
    padding-bottom: 100px;
  }
</style>
