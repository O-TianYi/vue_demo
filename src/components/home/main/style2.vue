 <template>
  <div class="container">
    <div class="left">
      <el-image
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        fit="fill"
      ></el-image>
    </div>
    <div class="right">
      <h3>文字轮播</h3>
      <el-carousel :interval="2000" arrow="never">
        <el-carousel-item v-for="item in box3Text" :key="item.id">
          <div class="text">{{item.text}}</div>
        </el-carousel-item>
      </el-carousel>
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
.container {
  display: flex;
  flex-direction: row;
  padding: 0;
  justify-content: space-between;
  .left {
    padding: 2vw;
    width: 30%;
    margin-right: 2%;
    /deep/ .el-image {
      height: 23vw;
    }
  }
  .right {
    background: yellow;
    flex: 1;
    display: flex;
    height: 27vw;
    flex-direction: column;
    justify-content: space-between;
    padding: 1% 2% 2% 2%;
    box-sizing: border-box;
    overflow: hidden;
    h3{
      font-size: 3vw;
    }
    /deep/ .el-carousel__container {
      padding: 2%;
      .text {
        // line-height: 2vw;
        font-size: 2vw;
      }
    }
  }
}

@media screen and (min-width: 960px) {
  .container {
    font-size: 20px;
  }
}
</style>
 
 
 
