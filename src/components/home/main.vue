<template>
  <div class="container">
    <!-- 样式一 -->
    <div class="box">
      <div class="left">
        <el-image
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          fit="fill"
        ></el-image>
      </div>
      <div class="right">
        <main>
          <h3>图片1</h3>USA的博阿速达八艘ID阿斯顿表嫂的吧搜ID阿湿波称霸的是你的扫IDAG黑哦IOM，0的还大时间段内弄擦萨斯，短时表。
        </main>
        <footer>
          <div>查看详情</div>
        </footer>
      </div>
    </div>

    <!-- 样式二 -->
    <div class="box1">
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理">
          <Style1></Style1>
        </el-tab-pane>
        <el-tab-pane label="配置管理">
          <Style2></Style2>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 样式2 -->
    <div class="box2">
      <div class="main">
        <div class="left">
          <el-image
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="fill"
          ></el-image>
        </div>
        <div class="right">
          <h2>文字轮播</h2>
          <el-carousel :interval="2000" arrow="never">
            <el-carousel-item v-for="item in box3Text" :key="item.id">
              <div class="text">{{item.text}}</div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Style1 = () => import("./main/style1");
const Style2 = () => import("./main/style2");
export default {
  name: "Main",
  data() {
    return {
      box3Text: [
        {
          id: 1,
          text:
            "but以上写法可以说是比较麻烦的，重点来啦，最近新了解到的一个属性text-align-last，该属性定义的是一段文本中最后一行在被强制换行之前的对齐规则",
        },
        {
          id: 2,
          text:
            "but以上写法可以说是比较麻烦的，重点来啦，最近新了解到的一个属性text-align-last，该属性定义的是一段文本中最后一行在被强制换行之前的对齐规则",
        },
        {
          id: 3,
          text:
            "but以上写法可以说是比较麻烦的，重点来啦，最近新了解到的一个属性text-align-last，该属性定义的是一段文本中最后一行在被强制换行之前的对齐规则",
        },
      ],
    };
  },
  components: {
    Style1,
    Style2,
  },
};
</script>



<style lang="less" scoped>
.container {
  padding-top: 5vw;
  padding-left: 15vw;
  padding-right: 15vw;
  .box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 30vw;
    .left {
      width: 30vw;
      background-color: rgb(68, 123, 226);
      /deep/ .el-image {
        width: 80%;
        position: relative;
        left: -4vw;
        top: 4vw;
      }
    }
    .right {
      flex: 1;
      padding: 5% 5% 2% 5%;
      font-size: 2vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: gray;
      div {
        width: 12vw;
        line-height: 2.5vw;
        background-color: white;
        text-align: center;
        padding: 1vw;
      }
    }
  }

  .box1 {
    margin-top: 5%;
    width: 100%;
    height: 30vw;
    /deep/ .el-tabs__content {
      padding: 0;
    }
    /deep/ .container {
      padding: 0;
    }
  }

  .box2 {
    border: 1px solid black;
    margin-top: 50%;
    padding: 3%;
    .main {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .left {
        width: 30%;
        margin-right: 2%;
        /deep/ .el-image {
          height: 20vw;
        }
      }
      .right {
        background: yellow;
        flex: 1;
        display: flex;
        height: 20vw;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding: 5%;
        box-sizing: border-box;
        overflow: hidden;
        h2 {
          margin-bottom: 5%;
        }
        /deep/ .el-carousel__container {
          height: 8vw;
          .text {
            line-height: 2vw;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 960px) {
  .container {
    .box {
      .left {
        /deep/ .el-image {
          transition: all 0.5s linear;
        }
        /deep/ .el-image:hover {
          transform: scale(1.1);
          box-shadow: 3px 3px 8px rgb(75, 205, 238);
        }
      }
      .right {
        font-size: 20px;
      }
    }
  }
}
</style>