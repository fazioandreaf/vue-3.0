<template>
  <div class="event-card">
    <span> @{{single_event.time}}on {{single_event.date}}</span>
    <h4>{{single_event.title}}</h4>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    single_event: Object,
  },
  data(){
    return{
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .event-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }

  .event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
</style>
