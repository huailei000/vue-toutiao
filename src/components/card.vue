<template>
  <!-- 三种状态  无图  一图   三图 -->
  <div class='card_box'>
    <div
      class="one_pic_box"
      v-if='data.large_mode'
    >
      <div class="content_box">
        <div class="title">{{data.title}}</div>
        <p class='bot_box'>{{data.media_name}} 评论{{data.comment_count}}</p>
      </div>
      <div class="img_box">
        <img
          :src="data.large_image_url"
          alt=""
        >
      </div>
    </div>
    <div
      class="three_pic_box"
      v-else-if="data.image_list.length"
    >
      <div class="title">{{data.title}}</div>
      <div class="three_img">
        <img
          v-for='item in data.image_list'
          :src="item.url"
          alt=""
        >
      </div>
      <p class='bot_box'>{{data.media_name}} 评论{{data.comment_count}}</p>
    </div>
    <div
      class="no_pic_box"
      v-else
    >
      <div class="content_box">
        <div class="title">{{data.title}}</div>
        <p class='bot_box'>{{data.media_name}} 评论{{data.comment_count}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="less" scoped>
.card_box {
  box-sizing: border-box;
  text-align: left;
  width: 90%;
  margin: auto;
  border-bottom: 1px solid #eee;
  .bot_box {
    color: #afafaf;
    font-size: 10px;
    padding-top: 0.2rem;
  }
  .one_pic_box {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0;
    .img_box {
      width: 2rem;
      img {
        width: 100%;
      }
    }
    .content_box {
      flex: auto;
      box-sizing: border-box;
      padding-right: 0.1rem;
    }
  }
  .three_pic_box {
    padding: 0.2rem 0;
    .three_img {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-top: 0.2rem;
      img {
        width: 33%;
      }
    }
  }
  .no_pic_box {
    padding: 0.2rem 0;
  }
}
</style>