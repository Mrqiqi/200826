<template>
   <div class="outer">
      <TypeNav></TypeNav>
      <ListContainer></ListContainer>
      <TodayRecommend></TodayRecommend>
      <Brand></Brand>
      <Like></Like>
      <Floor></Floor>
      <Floor></Floor>
      <Rank></Rank>
    
    
   </div>
</template>

<script>
import Brand from '@/pages/Home/Brand'
import Floor from '@/pages/Home/Floor'
import Like from '@/pages/Home/Like'
import ListContainer from '@/pages/Home/ListContainer'
import Rank from '@/pages/Home/Rank'
import TodayRecommend from '@/pages/Home/TodayRecommend'
import TypeNav from '@/components/TypeNav'
export default {
  name: 'Home',
  components:{
    Brand,
    Floor,
    Floor,
    Like,
    TodayRecommend,
    ListContainer,
    Rank
  }
}
</script>

<style lang="less" scoped>

</style>
