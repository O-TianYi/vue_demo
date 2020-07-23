<template>
  <div class="container">
      <div class="box">
        <div v-for="item in data" :key="item.id">
          <div class="icon">
            <i class="iconfont icon-weixin"></i>
          </div>
          <div class="text">
            <header>{{item.title}}</header>
            <main>
              {{item.text}}
            </main>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Style1',
  data() {
      return {
          data:[
            {id:1,icon:"",title:'标题1',text:"如上图，两端对齐相对于左对齐，视觉上显得整齐有序。但justify对最后一行无效，通常这样的排版对整段文字是极好的，我们并不希望当最后一行只有两个字时也两端对齐，毕竟这是不便于阅读的，那么当我们只有一行文本，但要实现单行文本两端对齐怎么解决（如下图的表单项效果"},
            {id:2,icon:"",title:'标题1',text:"1"},
            {id:3,icon:"",title:'标题1',text:"1"},
            {id:4,icon:"",title:'标题1',text:"1"},
          ]
      }
  },
}
</script>



<style lang="less" scoped>
@import "../../../assets/css/ailibaba-icon.css";
.box{
  display: flex;
  flex-wrap: wrap;
  height: 45vw;
  div{
    text-align: center;
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: gray;
    .icon{
      border: 1px solid rgb(126, 227, 235);
      width: 5vw;
      height: 5vw;
      position: relative;
      left: 50%;
      top: 10%;
      transform: translateX(-50%) rotate(45deg);
      i{
        position: absolute;
        font-size: 4vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) rotate(-45deg);
      }
    }
    .text{
      width: 100%;
      padding: 2vw;
      box-sizing: border-box;
      font-size: 3vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: yellow;
      header{
        font-weight: 600;
      }
      main{
        line-height: 3vw;
        text-align: justify;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
</style>