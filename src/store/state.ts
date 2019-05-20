// 页面tab信息
export interface PageInfo {
  id: number;
  isActived: boolean;
  name: {
    defaultName: string;
    activedName: string;
  };
  path: string;
  tagName: string;
}

// 头部信息
export interface HeaderInfo {
  left?: string;
  title: string;
  right?: string;
}

export interface RepeatingDateState {
  id: number;
  date: string;
  checked: boolean;
}

// 习惯的状态信息
export interface HabitList {
  id: number;
  iconName: string;
  color: string;
  mode: string;
  // 是否可用
  isActive: boolean;
  // 习惯的信息
  habitInfo: {
    habitname: string;
    // 激励自己的话
    inspire: string;
    // 练习的时间段
    activeTimes: number;
    // 一周内需要重复的天数
    RepeatingDate: RepeatingDateState[] | never[];
  };
  // 习惯日志
  habitLog: {
    // 总共坚持练习的天数
    totalHabitDays: number;
    // 当前连续练习的天数
    currentconsecutive: number;
    // 连续练习最长天数
    mostConsecutiveDays: number;
    // 创建日期
    createdTime: string;
    // 创建至今的天数
    totalToday: number;
  };
}

export interface State {
  activePage: PageInfo[];
  headerInfo: HeaderInfo;
  today: {
    active: string[] | number[];
  };
  habitList: HabitList[];
}

const state: State = {
  activePage: [
    {
      id: 0,
      isActived: true,
      name: {
        defaultName: "today-o",
        activedName: "today",
      },
      path: "/",
      tagName: "日常",
    },
    {
      id: 1,
      isActived: false,
      name: {
        defaultName: "habit-o",
        activedName: "habit",
      },
      path: "/habit",
      tagName: "习惯",
    },
    {
      id: 2,
      isActived: false,
      name: {
        defaultName: "setting-o",
        activedName: "setting",
      },
      path: "/setting",
      tagName: "更多",
    },
  ],
  headerInfo: {
    left: 'letter',
    title: 'TODAY',
    right: '',
  },
  today: {
    active: [0],
  },
  habitList: [{
    id: 1524822339790,
    iconName: 'taiyang',
    color: '#ffe884',
    mode: 'done',
    isActive: true,
    habitInfo: {
      habitname: '背单词',
      inspire: '坚持的路上没有捷径',
      activeTimes: 0,
      RepeatingDate: [
        {id: 0, date: '星期日', checked: true},
        {id: 1, date: '星期一', checked: true},
        {id: 2, date: '星期二', checked: true},
        {id: 3, date: '星期三', checked: true},
        {id: 4, date: '星期四', checked: true},
        {id: 5, date: '星期五', checked: true},
        {id: 6, date: '星期六', checked: true},
      ],
    },
    habitLog: {
      totalHabitDays: 0,
      currentconsecutive: 0,
      mostConsecutiveDays: 0,
      createdTime: '0',
      totalToday: 0,
    },
  }],
};
export default state;
