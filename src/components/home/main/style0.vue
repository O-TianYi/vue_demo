<template>
  <div class="container">
    <div class="left">
      <el-image
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        fit="fill"
      ></el-image>
    </div>
    <div class="right">
      <main>
        <h3>图片1</h3>USA的博阿速达八艘ID阿斯顿表嫂的吧搜ID。
      </main>
      <footer>
        <div>查看详情</div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Style2",
  data() {
    return {};
  },
};
</script>



<style lang="less" scoped>
.container {
  display: flex;
  padding: 0;
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