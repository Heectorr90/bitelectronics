<template>
  <v-app>
    <Navbar />
    <Home />
    <Footer />
  </v-app>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Home from "./views/Home.vue";
</script>
