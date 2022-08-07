<template>
  <div class="headeBox">
    <a
      href="javascript:;"
      class="message"
    ><span>{{count}}</span></a>
    <h1
      class="logo"
      @click='add'
    ></h1>
    <a
      href="javascript:;"
      class="search"
    ></a>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    let count = computed(() => {
      return store.state.msgCount;
    });
    const add = () => {
      store.commit("upDateMsgCount", count.value + 1);
    };
    return {
      count,
      add,
    };
  },
};
</script>

<style lang="less" scoped>
.headeBox {
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 0 0.3rem;
  width: 100%;
  height: 0.8rem;
  background: #d43d3d;
  .message {
    span {
      color: #dc1842;
      position: relative;
      top: -0.1rem;
      right: -0.1rem;
      background: #fff;
      border-radius: 50%;
      padding: 0.02rem;
      font-size: 11px;
    }
  }

  .message,
  .search {
    width: 0.5rem;
    height: 0.5rem;
    background: url("../assets/images/feed_ic_message_normal.png") no-repeat;
    background-size: 100% 100%;
  }

  .search {
    background: url("../assets/images/feed_ic_search_normal.png") no-repeat;
    background-size: 100% 100%;
  }

  .logo {
    width: 1.8rem;
    height: 0.4rem;
    font-size: 0;
    background: url("../assets/images/wap_logo.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>