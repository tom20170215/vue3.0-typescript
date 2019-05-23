<template>
    <div class="habitList">
        <van-swipe-cell :right-width="65" :left-width="65" class="listSwipe">
            <aside class="edit" slot="left" v-if="leftValue">{{leftValue}}</aside>
            <slot v-else slot="left" name="act"></slot>
            <van-cell-group class="listGroup">
                <van-cell class="van-ellipsis listCell">
                    <template slot="title">
                        <icon :name="iconName"></icon>
                        <span>{{habitInfo.habitname}}</span>
                    </template>
                </van-cell>
            </van-cell-group>
            <aside class="delete" slot="right" v-if="rightValue">{{rightValue}}</aside>
        </van-swipe-cell>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { SwipeCell, Cell, CellGroup } from "vant";

@Component({
  components: {
    [SwipeCell.name]: SwipeCell,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
})
export default class List extends Vue {
  @Prop()
  private habitInfo!: object;
  @Prop()
  private habitLog!: object;
  @Prop()
  private iconName!: string;
  @Prop()
  private color!: string;
  @Prop()
  private id!: number;
  @Prop()
  private rightValue?: string;
  @Prop()
  private leftValue?: string;
}
</script>

<style lang="scss" scoped>
</style>
