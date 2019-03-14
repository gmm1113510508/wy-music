<template>
    <div class='tab'>
        <router-link  tag='div' to='/recommend' active-class='selected' >
            <span class='item'>推荐音乐</span>
        </router-link>
        <router-link  tag='div' to='/rank' active-class='selected' >
            <span class='item'>热歌榜</span>
        </router-link>
        <router-link  tag='div' to='/search' active-class='selected' >
            <span class='item'>搜所</span>
        </router-link>
    </div>
</template>
<script>
export default {
    

}
</script>
<style lang="less" scope>
  @import '~style/index.less';  
  .tab{
      display: flex;
      .w(375);
      .h(40);
      div{
          color:#000;
          font-size:@font-size-ms;
          flex:1;
          text-align: center;
          .l_h(40);
            background:#fff;
          .item{
              padding-bottom:5px; 
          }
      }
      .selected{
         color:#d43c33; 
         .item{
             border-bottom:2px solid #d43c33; 
         }
      }
  }
</style>