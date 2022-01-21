import create from 'zustand';
import { persist } from 'zustand/middleware';
import produce from 'immer';

enum StatusList {
  closed,
  opened
}

type List = {
  status: StatusList;
  datetime: string;
  title: string;
  description: string;
  thankYouMessage: string;
  highlightImageUrl: string;
  address: string;
  latitude: number;
  longitude: number;
  ownerId: string;
};

type State = {
  list: List[];
  addListItems: (newList: List | unknown) => void;
  clearList: () => void;
};

export const useListStore = create<State>(
  persist(
    (set) =>
      ({
        list: [],
        clearList: () => set({ list: [] }),
        addListItems: (newList: List) => {
          set(
            produce(({ list }) => {
              list.push(newList);
            })
          );
        }
      } as State),
    {
      name: 'useListStore'
    }
  )
);
