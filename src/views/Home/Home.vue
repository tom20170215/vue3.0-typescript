<template>
  <div class="home">
    <van-collapse v-model="today.active">
      <van-collapse-item></van-collapse-item>
    </van-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Collapse, CollapseItem } from "vant";
import { State } from "vuex-class";

import { HabitList as HabitListState } from "@/store/state";
import _ from "@/utils";

@Component({
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
  },
})
export default class Home extends Vue {
  @State
  private today!: object;
  @State
  private habitList!: HabitListState[];

  private get dayComputed() {
    const habitList = this.habitList.filter((item) => item.isActive);
    // 今天可用的习惯
    const current = _.dateComparison(habitList);
    return {
      current
    };
  }
}
</script>
