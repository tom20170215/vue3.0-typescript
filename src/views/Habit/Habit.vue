<template>
    <div class="habit">
        <van-tabs @click="changeTitle">
            <van-tab v-for="(item, index) in tabsComputed" :key="index" :title="item">
              <List :leftValue='leftValue' :rightValue='rightValue' v-for="item in changeTab" :key="item.id" :iconName="item.iconName" :habitInfo="item.habitInfo"></List>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Tab, Tabs } from "vant";
import { State } from "vuex-class";
import { HabitList } from "@/store/state";
import List from '@/components/common/HabitList/List.vue';

@Component({
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    List,
  },
})
export default class Habit extends Vue {
  @State
  private habitList!: HabitList[];

  private currentTitle!: string;

  private leftValue: string = '编辑';

  private rightValue: string = '归档';

  private data() {
    return {
      currentTitle: '全部',
    }
  }

  // 全部tab标签
  private get tabsComputed() {
    const total: string[] = [];
    (this.habitList as any).forEach((item: any) => {
      if (item.mode === "done") {
        item.habitInfo.timeSlotList.forEach((ele: any) => {
          total.push(ele.title);
        });
      }
    });
    const tabs = [...new Set(total)];
    tabs.unshift("全部");
    return tabs;
  }

  // tab标签改变后的列表
  private get changeTab() {
    const total: HabitList[] = [];
    if (this.currentTitle !== '全部') {
      this.habitList.forEach((item: HabitList) => {
        if (item.isActive && item.mode === 'done') {
          const {activeTimes, timeSlotList} = item.habitInfo;
          // @ts-ignore
          const timeSlot =  timeSlotList.find((ele: any) => ele.id === activeTimes);
          if (timeSlot!.title === this.currentTitle) {
            total.push(item);
          }
        }
      })
    } else {
      this.habitList.forEach((item: HabitList) => {
        if (item.isActive && item.mode === 'done') {
          total.push(item);
        }
      })
    }
    return total;
  }

  private changeTitle(index: number, title: string) {
    this.currentTitle = title;
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.habit{
  width: 100%;
  height: calc(100vh - 7rem);
}
</style>
