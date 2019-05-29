<template>
  <div class="newHabit">
    <van-nav-bar left-text="返回" @click-left='onClickLeft' title="习惯库">
      <icon name='left-arrow' slot='left'></icon>
    </van-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";
import { NavBar } from "vant";

@Component({
  components: {
    [NavBar.name]: NavBar,
  }
})
export default class New extends Vue {
  @Mutation
  private changeHeader!: (id: number) => any;
  @Mutation
  private removeHabit!: () => any;

  private create(): void {}

  private onClickLeft(): void {
    if (this.$route.name === '习惯') {
      // 删除创建的新习惯
      this.removeHabit();
    }
    this.$router.go(-1);
  }
}
</script>

<style lang="scss" scoped>
@import './../../style/mixin.scss';
.van-nav-bar{
  height: 3.5rem;
  line-height: 3.5rem;
  svg{
    @include iconSize(1.4rem);
    vertical-align: middle;
  }
  .van-nav-bar__title{
    @include font(1.2rem, 3.5rem);
    font-weight: 500;
  }
}
</style>

