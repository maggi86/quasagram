<template>
  <q-page class="constraint q-pa-md" >
    <q-card class="card-post" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="#">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold" >meagan_williams</q-item-label>
          <q-item-label caption>
            At your boyfriend's house
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-card-section>
        <div>Gold Gate Bridge</div>
        <div class="text-caption text-grey">June 10 9:23PM</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
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
  }
}
</script>
<style lang="sass">
  .card-post
    .q-img
      min-height: 200px
</style>