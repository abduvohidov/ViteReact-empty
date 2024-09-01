export interface UserModel {
  id: string;
  username: string;
  fullName: string
  phoneNumber: string;
  email: string;
  authSourceType: UserAuthSourceType;
  state: UserState;
  token: string;
}

export enum UserState {
  CREATED = "CREATED",
  ACTIVATED = "ACTIVATED",
  DELETED = "DELETED",
  BLOCKED = "BLOCKED",
}

export enum UserAuthSourceType {
  INTERNAL = "INTERNAL",
  FACEBOOK = "FACEBOOK",
}
