<template>
  <Header />
  <TopNav />
  <router-view />
</template>

<script>
import Header from "./components/header.vue";
import TopNav from "./components/topNav.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Header,
    TopNav,
  },
  setup() {
    const router = useRouter();
    router.push({ name: "Home", params: { type: "__all__" } });
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
