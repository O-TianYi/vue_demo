<template>
  <div class="container">

    <Aside></Aside>
  </div>
</template>

<script>
const Aside = () => import("../../components/home/aside");

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {Aside}
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