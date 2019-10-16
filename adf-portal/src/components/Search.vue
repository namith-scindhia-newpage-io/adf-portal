<template>
  <div class="container search" id="search">
    <div class="blue-text text-darken-4 center-align">
      <h3>Welcome to API Documentation Framework Portal</h3>
      <h5 class="pad-align">Enter some search value to list out the projects and or API's</h5>
    </div>
    <form class="search-form center-align" @submit.prevent="search()" novalidate>
      <div class="input-field">
        <input id="search" type="text" class="validate" v-model="searchValue" />
        <label for="search">Enter search Value</label>
      </div>
      <button type="submit" class="waves-effect waves-light btn">Search</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    search() {
      // search logic
      // eslint-disable-next-line no-console
      console.log(this.searchValue);
    }
  }
};
</script>
<style scoped>
.search .pad-align {
  padding: 10% 10% 5% 10%;
}

.search .search-form {
  padding-bottom: 10%;
}
</style>