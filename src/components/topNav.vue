<template>
  <ul class="top_nav_box">
    <li
      v-for='item in tabList'
      :key='item.text'
    >
      <router-link :to="{name:'Home',params:{type:item.type}}">{{item.text}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  setup() {
    const tabList = [
      {
        text: "推荐",
        type: "__all__",
      },
      {
        text: "热点",
        type: "news_hot",
      },
      {
        text: "社会",
        type: "news_society",
      },
      {
        text: "娱乐",
        type: "news_entertainment",
      },
      {
        text: "军事",
        type: "news_military",
      },
    ];
    return {
      tabList,
    };
  },
};
</script>

<style lang="less" scoped>
.top_nav_box {
  height: 0.8rem;
  width: 100%;
  position: fixed;
  top: 0.8rem;
  left: 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  li {
    flex: 1;
    & .router-link-exact-active {
      color: red;
    }
  }
}
</style>