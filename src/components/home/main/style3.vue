 <template>
  <div class="container">
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
</template>

<script>
export default {
  name: "Style2",
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
};
</script>



<style lang="less" scoped>
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
</style>
 
 
 
