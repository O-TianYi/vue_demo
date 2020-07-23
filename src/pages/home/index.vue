<template>
  <div class="container">

    <Aside></Aside>

    <Header></Header>
    <Main></Main>
    
  </div>
</template>

<script>
const Aside = () => import("../../components/home/aside");
const Header = () => import("../../components/home/header");
const Main = () => import("../../components/home/main");

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {Aside,Header,Main}
};
</script>




<style lang="less">
</style>

<style lang="less" scoped>
@import "../../assets/css/color-variables.less";
.container {
  color: @themeColor;
}
</style>