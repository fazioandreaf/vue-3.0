<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <EventCard />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    EventCard,
  },
};
</script>
