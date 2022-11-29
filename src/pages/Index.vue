<template>
  <q-page class="constraint q-pa-md" >
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
    <q-card class="card-post q-mb-md" flat bordered
    v-for="post in posts"
    :key="post.id"
    >
    <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="#">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold" >meagan_williams</q-item-label>
          <q-item-label caption>
            {{post.location}}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-card-section>
        <div>{{post.caption}}</div>
        <div class="text-caption text-grey">{{ post.date | niceDate }}</div>
      </q-card-section>
    </q-card>
  </div>
  <div class="col-4 lg-screen-only">
    <q-item class="fixed">
        <q-item-section avatar>
          <q-avatar size="48px" >
            <img src="#">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold" >meagan_williams</q-item-label>
          <q-item-label caption>
            Meagan Williams
          </q-item-label>
        </q-item-section>
      </q-item>
  </div>
  </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'PageIndex',
  data(){
    return{
      posts: [
        {
          id:1,
          caption:'Gold Gate Bridge',
          date: 1591776655504,
          location:'At your boyfriend/s house',
          imageUrl:'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id:2,
          caption:'Gold Gate Bridge',
          date: 1591776655504,
          location:'At your boyfriend/s house',
          imageUrl:'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id:3,
          caption:'Gold Gate Bridge',
          date: 1591776655504,
          location:'At your boyfriend/s house',
          imageUrl:'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id:4,
          caption:'Gold Gate Bridge',
          date: 1591776655504,
          location:'At your boyfriend/s house',
          imageUrl:'https://cdn.quasar.dev/img/parallax2.jpg'
        }
      ]
    }
  },
  methods: {
    getPosts() {

    }
  },
  filters:{
    niceDate(value){
      return date.formatDate(value,' HH:ssA Do-MMM-YYYY')
    }
  }
}
</script>
<style lang="sass">
  .card-post
    .q-img
      min-height: 200px
</style>