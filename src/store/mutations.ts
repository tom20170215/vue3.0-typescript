import { State } from "./state";

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
  changeMode(state: State, id: number, val: string) {
    const { habitList } = state;
    
  }
};
