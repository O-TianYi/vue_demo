<template>
  <div class="container">
    <!-- 走马灯事件 -->
    <div class="carousel1">
      <el-carousel indicator-position="none">
        <el-carousel-item v-for="item in 3" :key="item">
          <el-image
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
            fit="fill"
          >
            <div slot="placeholder" class="image-slot">
              加载中
              <span class="dot">...</span>
            </div>
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 自建的轮播图 -->
    <div class="carousel2">
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>


<style lang="less" scoped>
.carousel1{
  width: 100vw;
  height: 20vw;
  /deep/ .el-image{
    height: 20vw;
  }
  /deep/ .el-carousel__container{
    height: 50vw;
  }
}
.carousel2 {
  width: 50vw;
  height: 10vw;
  position: relative;
  top: -15vw;
  z-index: 99;
  padding-left: 10vw;
  /deep/ .el-carousel__container{
    height: 20vw;
    // overflow: hidden;
  }
  /deep/ .el-carousel {
    width: 80vw;
  }
  /deep/ .el-carousel__item {
    height: 20vw;
    background-color: green;
  }
}


</style>