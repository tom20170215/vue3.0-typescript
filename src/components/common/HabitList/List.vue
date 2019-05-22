<template>
    <div class="habitList">
        <van-swipe-cell :right-width='65' :left-width='65'>
            <aside slot="left" v-if="leftValue">{{leftValue}}</aside>
            <van-cell-group>
                <van-cell>
                    <template slot='title'>
                        <icon :name="iconname">
                        <span>{{habitInfo.habitname}}</span>
                    </template>
                </van-cell>
            </van-cell-group>
            <aside slot="right" v-if="rightValue">{{rightValue}}</aside>
        </van-swipe-cell>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import {SwipeCell, Cell, CellGroup} from 'vant';

Component({
    [SwipeCell.name]: SwipeCell,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
})
export default class List extends Vue {
    @Prop() private leftValue?: string;
    @Prop() private rightValue?: string;
    @Prop() private iconname!: string;
    @Prop() private habitInfo!: object;
}
</script>

<style lang="scss" scoped>

</style>
