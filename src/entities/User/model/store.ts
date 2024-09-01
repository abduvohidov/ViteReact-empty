import { create } from "zustand";
import { UserModel } from "@/entities/User/model/models";

interface UserStoreStruct {
  user: UserModel | null;
  setUser: (user: UserModel) => void;
  unsetUser: () => void;
}

export const useUserStore = create<UserStoreStruct>()(set => ({
  user: null,

  setUser(user: UserModel): void {
    set(() => ({user: user}));
  },
  unsetUser(): void {
    set(() => ({user: null}));
  }
}))
