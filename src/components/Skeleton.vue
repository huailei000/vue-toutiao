<template>
  <div class="skeleton">
    <!-- 录播图 -->
    <div class="banner"></div>
    <!--  新闻列表 -->
    <ul class="content">
      <!-- 左右结构 -->
      <li class="item itemA">
        <a href>
          <div class="text">
            <p></p>
            <p></p>
            <span></span>
          </div>
          <div class="img_box"></div>
        </a>
      </li>
      <!-- 上下结构 -->
      <li class="item itemB">
        <a href>
          <div class="text">
            <p></p>
            <p></p>
          </div>
          <div class="img_box">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span class="mark"></span>
        </a>
      </li>
    </ul>
  </div>
</template>



<style lang="less" scoped>
@color: #eee;

.skeleton {
  padding: 0.3rem;
  .banner {
    height: 3.5rem;
    background: @color;
  }

  .content {
    .item {
      padding: 0.3rem 0;
      border-bottom: 0.01rem solid @color;

      &:nth-last-child(1) {
        border-bottom: none;
      }

      a {
        display: block;
      }

      &.itemA {
        a {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .text {
          width: 60vw;
          p {
            margin-bottom: 0.1rem;
            height: 0.4rem;
            background: @color;
          }

          span {
            display: block;
            width: 30vw;
            height: 0.4rem;
            background: @color;
          }
        }

        .img_box {
          width: 30vw;
          height: 1.5rem;
          background: @color;
        }
      }

      &.itemB {
        .text {
          p {
            height: 0.4rem;
            margin-bottom: 0.1rem;
            background: @color;

            &:nth-last-child(1) {
              width: 50%;
            }
          }
        }

        .img_box {
          margin: 0.2rem 0;
          display: flex;
          justify-content: space-between;
          span {
            width: 30%;
            height: 1.5rem;
            background: @color;
          }
        }

        .mark {
          display: block;
          width: 50%;
          height: 0.4rem;
          background: @color;
        }
      }
    }
  }
}
</style>