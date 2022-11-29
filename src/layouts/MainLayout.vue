<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
    class="bg-white text-grey-10"
     bordered >
      <q-toolbar class="constraint" >
        <q-btn flat icon="eva-camera-outline"
        size="18px" dense 
        to="/camera" class="lg-screen-only q-mr-sm" />
        <q-separator spaced inset
        class="lg-screen-only" />
        <q-toolbar-title class="text-grand-hotel text-bold text-center">
          Quasagram
        </q-toolbar-title>
        <q-btn flat icon="eva-home-outline"
        size="18px" dense 
        to="/" class="lg-screen-only" />
      </q-toolbar>
    </q-header>

    <q-footer 
    class="bg-white"
    bordered
    >
          <q-tabs class="text-grey-10"
          active-color="primary"
          indicator-color="transparent"
      >
        <q-route-tab to="/" icon="eva-home-outline" />
        <q-route-tab to="/camera" icon="eva-camera-outline" />
       
      </q-tabs>
          <!-- <q-toolbar-title class="text-center">copywright &copy;2022</q-toolbar-title> -->
      </q-footer>

    <q-page-container class="bg-grey-1" >
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
.q-toolbar
  @media (min-width: $breakpoint-sm-min)
    height:77px
.q-toolbar_title
  font-size:30px
  @media (max-width: $breakpoint-xs-max)
   text-align:center
.q-footer
  .q-tab_icon
    font-size:30px
</style>