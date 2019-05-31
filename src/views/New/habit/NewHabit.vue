<template>
    <div class="new-habit" v-if="!!habitList[index]">
        <!-- 图标 -->
        <section class="icon">
            <router-link :to="{path: `/edit/icon/`,query:{mode}}">
                <Circles>
                    <icon :name="iconComputed" slot="icon"></icon>
                </Circles>
            </router-link>
        </section>
        <section class="field">
            <van-field placeholder="请输入名称" v-model="nameComputed"></van-field>
        </section>
        <section>
            <van-cell-group>
                <van-cell center title="习惯日期" is-link :value="dateComputed.value" @click="handleShow"></van-cell>
                <router-link :to="{path: `/edit/times/`,query: {mode: `new`}}">
                    <van-cell title="重复的时段"></van-cell>
                </router-link>
                <router-link :to="{path: `/edit/remind/`,query: {mode: `new`}}">
                    <van-cell title="提醒的时间"></van-cell>
                </router-link>
                <van-cell title="激励的话" center>
                    <input type="text" placeholder="随便立个flag">
                </van-cell>
            </van-cell-group>
        </section>

        <van-popup v-model="show" position="right">
            <h2>选择重复的日期</h2>
            <p>您希望在一周里那几天执行这个习惯?</p>
        </van-popup>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import { Field, Cell, CellGroup, Popup } from "vant";

import { HabitList, RepeatingDateState } from "@/store/state";
import Circles from "@/components/common/Circle/Circle.vue";
import config from "@/config";
import _ from "@/utils";

@Component({
  components: {
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Popup.name]: Popup,
    Circles
  }
})
export default class NewHabit extends Vue {
  @State
  private habitList!: HabitList[];

  @Mutation
  private changeHabitName!: (payload: { id: number; value: string }) => void;

  private id!: number;
  private mode!: string;
  private index!: number;
  private show!: boolean;

  private data() {
    const id: number = parseInt(this.$route.query.id as string, 10);
    const mode = id > config.habitLibrary.length ? "edit" : "new";
    return {
      mode,
      show: false
    };
  }

  private created() {
    if (this.mode === "edit") {
      // 编辑习惯
      this.id = parseInt(this.$route.query.id as string, 10);
      return;
    }
    // 创建习惯
    const list = this.habitList;
    for (let i = 0; i < list.length; i++) {
      if (list[i].mode === "creating") {
        this.id = list[i].id;
        this.index = i;
        return;
      }
    }
  }

  // 计算当前图标
  private get iconComputed() {
    const habit = this.habitList[this.index];
    return habit.iconName;
  }

  // 计算当前名称
  private get nameComputed() {
    const habit = this.habitList[this.index];
    return habit.habitInfo.habitname;
  }

  private set nameComputed(name) {
    this.changeHabitName({ id: this.id, value: name });
  }

  // 计算一周内哪几天需要重复
  private get dateComputed() {
    const habit = this.habitList[this.index];
    const dates = habit.habitInfo.RepeatingDate;
    let value :string = "";
    // @ts-ignore
    const curr = dates.filter(function(element, index, self) {
        if (element.checked) {
            value += _.getDate(element.date);
        }
        return element.checked;
    });
    return {
        curr,
        value
    };
  }

  private handleShow() :any{
      this.show = true;
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/mixin.scss";
.icon {
  width: 100%;
  height: 5rem;
}
.field {
  .van-cell {
    height: 3.5rem;
    text-align: left;
    @include font(1rem, 120%);
  }
}
.van-popup{
    width: 100%;
    height: 100%;
    @include flex_layout(space-around, center, column);
}
</style>

