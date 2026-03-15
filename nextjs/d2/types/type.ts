export type Post = {
  userId: number;
  id: string;
  title: string;
  body: string;
  author?: string;
  isUserPost?: boolean;
};

export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}
