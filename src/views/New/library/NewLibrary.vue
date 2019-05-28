<template>
    <div class="habit-library">
        <section class="intro">
            <p>您可以从习惯库中挑选一个习惯，也可以新建一个新的习惯</p>
        </section>
        <!-- 新建习惯 -->
        <section class="new">
            <h4>自定义习惯</h4>
            <router-link :to="{path: 'habit', query: {id: newHabit.id}}">
                <van-cell :value="newHabit.title" @click="create(newHabit.id)">
                    <icon :name="newHabit.name" slot="icon"></icon>
                </van-cell>
            </router-link>
        </section>
        <!-- 习惯列表 -->
        <section class="list">
            <h4>从库中挑选</h4>
            <van-list>
                <van-cell
                    v-for="(item, index) in habitLibrary"
                    :key="index"
                    :value="item.title"
                    @click="create(item.id)"
                >
                    <icon :name="item.name" slot="icon"></icon>
                </van-cell>
            </van-list>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import { Cell, List } from "vant";
import moment from "moment";

import config from "@/config";
import { HabitList } from "@/store/state";

@Component({
  components: {
    [Cell.name]: Cell,
    [List.name]: List
  }
})
export default class NewLibrary extends Vue {
  @Mutation
  private createHabit!: (habit: HabitList) => any;

  private data() {
    return {
      newHabit: (config as any).newHabit,
      habitLibrary: (config as any).habitLibrary
    };
  }
  // 创建习惯
  private create(id: number) {
    const timestamp = new Date().valueOf();
    const iconInfo =
      id === 0
        ? config.newHabit
        : config.habitLibrary.find(item => item.id === id);
    const habit = {
      id: timestamp,
      iconName: iconInfo!.name,
      color: "#ffe884",
      mode: "creating",
      isActive: false,
      habitInfo: {
        habitname: iconInfo!.title,
        // 重复的日期
        RepeatingDate: [
          { id: 0, date: "星期一", checked: true },
          { id: 1, date: "星期二", checked: true },
          { id: 2, date: "星期三", checked: true },
          { id: 3, date: "星期四", checked: true },
          { id: 4, date: "星期五", checked: true },
          { id: 5, date: "星期六", checked: true },
          { id: 6, date: "星期日", checked: true }
        ],
        activeTimes: 0,
        inspire: "",
        timeSlotList: [
          {
            id: 0,
            title: "起床之后"
          },
          {
            id: 1,
            title: "晨间习惯"
          },
          {
            id: 2,
            title: "中午时分"
          },
          {
            id: 3,
            title: "午间习惯"
          },
          {
            id: 4,
            title: "晚间习惯"
          },
          {
            id: 5,
            title: "睡觉之前"
          },
          {
            id: 6,
            title: "任意时间"
          }
        ]
      },
      habitLog: {
        totalHabitDays: 0,
        currentconsecutive: 0,
        mostConsecutiveDays: 0,
        createdTime: moment(timestamp).format("YYYY-MM-DD"),
        totalToday: parseInt(moment(timestamp).fromNow(true))
      }
    };
    this.createHabit(habit);
    this.$router.push(`/new/habit?id=${id}`);
  }
}
</script>

<style lang="scss" scoped>
@import "./../../../style/mixin.scss";
.habit-library {
  section.intro {
    p {
      @include font(1rem, 120%);
      padding: 0.3rem;
      text-align: center;
    }
  }
  section.new,
  section.list {
    h4 {
      padding: 0 1.4rem;
      height: 1.6rem;
      line-height: 1.6rem;
      background-color: $grey;
      margin: 0;
    }
    .van-list {
      overflow: scroll;
      height: calc(100vh - 16rem);
    }
    .van-cell {
      align-items: center;
      svg {
        @include iconSize(2.5rem);
        margin-right: 1rem;
      }
      span {
        @include font(1rem, 120%);
      }
    }
  }
}
</style>

