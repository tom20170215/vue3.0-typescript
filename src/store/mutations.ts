import { State, HabitList } from "./state";
import _ from "@/utils";

export default {
  // 改变当前页
  getActivePage(state: State, id: number) {
    state.activePage.forEach(item => {
      if (item.id === id) {
        item.isActived = true;
      } else {
        item.isActived = false;
      }
    });
  },
  // 改变header
  changeHeader(state: State, id: number) {
    const { headerInfo } = state;
    switch (id) {
      case 0:
        headerInfo.left = "letter";
        headerInfo.title = "TODAY";
        headerInfo.right = "";
        break;
      case 1:
        headerInfo.left = "file";
        headerInfo.title = "我的习惯";
        headerInfo.right = "new";
        break;
      case 2:
        headerInfo.left = "";
        headerInfo.title = "设置";
        headerInfo.right = "";
        break;
    }
  },
  // 改变习惯的状态
  changeMode(state: State, payload: { id: number; value: string }) {
    const { habitList } = state;
  },

  // 创建习惯
  createHabit(state: State, habit: HabitList) {
    state.habitList.push(habit);
  },

  // 删除新创建的习惯
  removeHabit(state: State) {
    state.habitList.pop();
  },

  changeHabitName(state: State, payload: { id: number; value: string }) {
    const { habitList } = state;
    const habit = _.find(habitList, payload.id);
    habit!.habitInfo.habitname = payload.value;
  }
};
