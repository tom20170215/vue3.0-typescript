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
    [6, "星期六"],
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

const utils = {
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
};

export default utils;
