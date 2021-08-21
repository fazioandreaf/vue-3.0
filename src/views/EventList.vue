<template>
  <div class="events">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

    <!--:key é per avere un  elemento contrastintivo  e aggiungo un event prop-->
    <EventCard v-for="event in events" :key="event.id" :single_event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/HelloWorld.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data(){
    return{
      events:null,
    }
  },
  created(){
    EventService.getEvents()
      .then(r=> this.events=r.data)
      .catch(e=>console.log(e))
  }


};
</script>
<style scoped>
  .events{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>