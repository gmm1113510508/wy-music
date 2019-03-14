<template>
    <div class='m-header'>
         <img src="../../../../static/top.png" />
    </div>
</template>
<script>
export default {
    name:'MHeader'

}
</script>
<style lang="less">
  @import '~style/index.less';
  .m-header{
      .w(375);
      .h(60);
      img{
      	width:100%;
      	.h(60);
      }
  }  
</style>