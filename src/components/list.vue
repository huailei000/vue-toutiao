<template>
  <div class='list_box'>
    <Skeleton v-if='loading' />
    <Card
      v-else
      v-for='item in list'
      :data='item'
    />
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, watch } from "vue";
import { getListData } from "../api/index.js";
import Card from "./card";
import Skeleton from "./Skeleton";
export default {
  props: ["type"],
  components: { Card, Skeleton },
  setup(props) {
    // console.log(props);
    const state = reactive({
      list: [],
      loading: true,
    });
    let timer = false;
    const getData = () => {
      getListData({
        tag: props.type,
        ac: "wap",
        count: 20,
        format: "json_raw",
        as: "A196C0485C805F5",
        cp: "608C00853F667E1",
        max_behot_time: 1619776151,
        _signature: "-SnrcQAAmasR88kMRJ4Jb.kp62",
        i: 1619776151,
      }).then((data) => {
        state.loading = false;
        timer = false;
        state.list = state.list.concat(data.data);
      });
    };
    onMounted(() => {
      getData();
    });
    watch(
      () => props.type,
      () => {
        state.list = [];
        state.loading = true;
        getData();
      }
    );
    const botGet = () => {
      if (
        document.body.clientHeight + document.body.scrollTop + 100 >
        document.body.scrollHeight
      ) {
        if (!timer) {
          timer = true;
          getData();
        }
      }
    };
    document.body.addEventListener("scroll", botGet);

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
</style>