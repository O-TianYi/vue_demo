<template>
  <div class="container">
    <el-card :body-style="{ padding: '0px' }">
      <i class="iconfont icon-fanhuidingbu"></i>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <div class="box">
        <i class="iconfont icon-weixin" id="erweima-code"></i>
        <div class="erweicode" id="erweicode">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Asider",
  data() {
    return {
    };
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      let codeIcon=document.querySelector("#erweima-code");
      codeIcon.addEventListener('mouseout', this.hideCode, false);
      codeIcon.addEventListener('mouseover', this.showCode, false);
    },
    //显示二维码
    showCode(){
      let code=document.querySelector("#erweicode");
      code.style.display="block";
    },
    hideCode(){
      let code=document.querySelector("#erweicode");
      code.style.display="none";
    }
  }
};
</script>



<style lang="less" scoped>
@import "../../assets/css/ailibaba-icon.css";
.container {
  padding: 1%;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: fixed;
  z-index: 999;
  top: 50%;
  transform: translateY(-50%);
  /deep/ .el-card{
    i {
      font-size: 5vw;
      cursor: pointer;
    }
  }
  /deep/ .el-card:nth-child(2){
    .box{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      //  position: relative;
    }
  }
  .erweicode{
    display: none;
    position: absolute;
    left: 6.5vw;
    border-radius: 2vw;
    overflow: hidden;
  }
}

@media (min-width: 960px) {
  .container {
    i {
      font-size: 50px;
    }
  }
}
</style>