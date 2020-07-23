<template>
  <div class="container">
    <!-- 样式一 -->
    <div class="box0">
      <Style0></Style0>
    </div>

    <!-- 样式二 -->
    <div class="box1">
      <Style1></Style1>
    </div>

    <!-- 样式2 -->
    <div class="box2">
      <Style2></Style2>
    </div>
  </div>
</template>

<script>
const Style0 = () => import("./main/style0");
const Style1 = () => import("./main/style1");
const Style2 = () => import("./main/style2");
// const Style3 = () => import("./main/style3");
export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    Style0,
    Style1,
    Style2,
    // Style3,
  },
};
</script>



<style lang="less" scoped>
.container {
  padding-top: 5vw;
  padding-left: 15vw;
  padding-right: 15vw;
  .box0{
    margin-bottom: 2vw;
  }
  .box1{
    margin-bottom: 2vw;
  }
  .box2{
    margin-bottom: 2vw;
  }
}
</style>