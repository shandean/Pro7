<template>
  <div>
    <div class="main">
      <nav class="fixed-top">
        <Nav />
      </nav>
      <div class="row d-flex"></div>
    </div>
  </div>
</template>
<script>
import Nav from "../components/Nav.vue";
import Card from "../components/Card.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Nav,
    // eslint-disable-next-line vue/no-unused-components
    Card,
  },

  data() {
    return {
      posts: null,
      users: null,
    };
  },
  created() {
    axios.get("http://localhost:3000/home").then((response) => {
      const data = response.data;
      this.posts = data;
    });
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10000;
  @media (min-width: 1200px) {
    margin-left: 25%;
  }
}
.main {
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  @media (min-width: 1200px) {
    margin-left: 25%;
  }
}
</style>
