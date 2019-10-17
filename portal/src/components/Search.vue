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
    <div class="row"></div>
    <div class="row">
      <div class="col s3" v-for="result in results" :key="result.id">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{result.name}}</span>
            <p>{{result.description}}</p>
          </div>
          <div class="card-action">
            <!-- <a @click.prevent="openSwagger(result.url)">Open Swagger Documentation</a> -->
            <a v-bind:href="swaggerBaseUrl + result.url" target="_blank">Open Swagger Documentation</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchService from "../services/SearchService";

export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
      isLoading: false,
      errorMessage: "",
      results: [],
      swaggerBaseUrl: 'http://petstore.swagger.io/?url='
    };
  },
  methods: {
    search() {
      this.errorMessage = "";
      if (this.searchValue) {
        this.isLoading = true;
        SearchService.search()
          .then(response => {
            this.results = response.data;
            this.isLoading = false;
          })
          .catch(error => {
            this.isLoading = false;
            this.errorMessage = error.response;
          });
      }
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