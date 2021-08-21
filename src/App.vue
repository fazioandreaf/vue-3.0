<template>
  <div id="nav">
      <!-- con questo chiamo il router -->
    <router-link to="/">Events</router-link> |
    <router-link to="/about">About</router-link>
    <h1>Event For Good</h1>
  </div>
  <!-- Questo é un placeholder in cui verra inserito il component chiamato dal router  -->
  <router-view />
</template>


<style>
/* global style */
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  h4{
    font-size: 20px;
  }
</style>
