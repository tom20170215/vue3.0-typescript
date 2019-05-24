<template>
    <div class="habitList">
        <van-swipe-cell :right-width="65" :left-width="65" class="listSwipe">
            <aside class="edit" slot="left" v-if="leftValue" @click="$emit('click-left', id)">{{leftValue}}</aside>
            <van-cell-group class="listGroup">
                <van-cell class="van-ellipsis listCell" :value="habitLog.totalHabitDays+ '天'" :style="{background: color}">
                    <template slot="title">
                        <icon :name="iconName"></icon>
                        <span>{{habitInfo.habitname}}</span>
                    </template>
                </van-cell>
            </van-cell-group>
            <aside class="delete" slot="right" v-if="rightValue" @click="$emit('click-right', id)">{{rightValue}}</aside>
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
@import "./../../../style/mixin.scss";
.habitList {
    margin: .5rem 0;
    aside{
        width: 3.5rem;
        height: 100%;
        background-color: $warn;
        @include flex_layout(center);
        color: $font-o;
        font-weight: bold;
    }
    .edit{
        background-color: $edit;
    }
    .listGroup{
        @include flex_layout(center);
        .listCell{
            width: 95%;
            border: solid;
            border-width: .08rem;
            justify-content: space-between;
            align-items: center;
            @include font(1.2rem, 1rem);
            svg{
                width: 2rem;
                height: 2rem;
                margin-right: 1rem;
            }
            .van-cell__title span{
                @include font(1.2rem, 1rem);
                display: inline-block;
                transform: translateY(-35%);                
            }
        }
    }
    .van-cell__value span{
        font-size: 1rem !important;
        line-height: 1rem !important;
    }
}
</style>
