export type UserProfileToken = {
  token: string | null;
  username: string | null;
  email: string | null;
  roles: string[] | null;
};

export type UserProfile = {
  username: string | null;
  email: string | null;
  roles: string[] | null;
};

export type Auth = {};
