export interface UserBase {
  username: string | null;
  email: string | null;
  roles: string[] | null;
}

export interface UserProfileToken extends UserBase {
  token: string | null;
}

export interface UserProfile extends UserBase {}

export interface UserRequest extends UserBase {
  password: string | null;
}

export type Auth = {};
