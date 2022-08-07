<template>
  <div class="home">
    <List :type='type' />
  </div>
</template>

<script>
import List from "@/components/list.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  name: "Home",
  components: { List },
  setup() {
    const route = useRoute();
    const type = computed(() => {
      return route.params.type;
    });
    return {
      type,
    };
  },
};
</script>
