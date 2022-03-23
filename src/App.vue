<template>
  <div id="app">
    <HeaderV/>
    <router-view></router-view>
    <FooterV />
  </div>
</template>

<script>
import HeaderV from '@/components/layout/HeaderV'
import FooterV from '@/components/layout/FooterV';

export default {
  components: {
    FooterV,
    HeaderV,
  },
};
</script>

<style lang="scss" scoped>
.isActive {
  border: 3px solid #ffd700;
}
</style>