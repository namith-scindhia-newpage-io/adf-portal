<template>
  <div id="app">
    <Header />
    <Search />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Search,
    Footer
  }
};
</script>
