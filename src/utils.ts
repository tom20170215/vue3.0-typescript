import { HabitList, RepeatingDateState } from "@/store/state";
import moment from "moment";

/**
 * 星期索引互相转换
 * @param date 星期或者索引值
 */
function transformDate(date: string | number) {
  const weekday = new Map([
    [0, "星期日"],
    [1, "星期一"],
    [2, "星期二"],
    [3, "星期三"],
    [4, "星期四"],
    [5, "星期五"],
    [6, "星期六"]
  ]);

  if (typeof date === "number") {
    return weekday.get(date);
  } else if (typeof date === "string") {
    for (const [key, value] of weekday) {
      if (value === date) {
        return key;
      }
    }
  }
}

function getDateList(arr: RepeatingDateState[]) {
  const list: string[] = [];
  for (const value of arr) {
    if (value.checked) {
      list.push(value.date);
    }
  }
  return list;
}

function findIndex(arr: HabitList[], id: number): number {
  return -1;
}

const utils = {
  getDate(str: string): string{
    return str.replace(/['星期']/g, '');
  },
  
  dateComparison(arr: HabitList[], preDay: number = 0) {
    let day: number;
    if (!preDay) {
      day = moment().day();
    } else {
      day = moment()
        .add(preDay, "d")
        .day();
    }
    const current = transformDate(day);
    const currentList: HabitList[] = [];
    for (const value of arr) {
      const element = value.habitInfo.RepeatingDate;
      // @ts-ignore
      if (getDateList(element).indexOf(current) > -1) {
        currentList.push(value);
      }
    }
    return currentList;
  },

  /**
   * 通过习惯id查找对应的索引值
   */
  findIndex(arr: HabitList[], id: number): number {
    // let i;
    // arr.forEach(function(ele, index) {
    //   if (ele.id === id) {
    //     i = index;
    //   }
    // });
    // if (i) {
    //   return i;
    // }else {
    //   return -1;
    // }

    let low = 0;
    let high = arr.length - 1;
    let mid: number;
    while (low <= high) {
      mid = arr[Math.floor((high - low) / 2)].id;
      if (mid > id) {
        high = Math.floor((high - low) / 2) - 1;
      }else if (mid < id) {
        low = Math.floor((high - low) / 2) + 1;
      }else {
        return Math.floor((high - low) / 2);
      }
    }
    return -1;
  },

  /**
   *
   * @param arr 通过id查找某个习惯
   * @param id
   */
  find(arr: HabitList[], id: number): HabitList | undefined {
    const index = utils.findIndex(arr, id);
    if (index > 0) {
      return arr[index];
    }
  }
};

export default utils;
