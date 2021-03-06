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

export interface HeaderInfo {
  left?: string;
  title: string;
  right?: string;
}

export interface State {
  activePage: PageInfo[];
  headerInfo: HeaderInfo;
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
};
export default state;
