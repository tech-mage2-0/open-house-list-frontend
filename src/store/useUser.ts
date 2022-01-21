import create from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  users: number[];
};

export const useUser = create<State>(
  persist(
    () =>
      ({
        users: []
      } as State),
    {
      name: 'useUser'
    }
  )
);
