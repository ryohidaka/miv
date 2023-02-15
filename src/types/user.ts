export type User = {
  id: string;
  name: string;
  image_url: string;
  blurhash?: string;
};

export type UserParams = {
  userId: string;
};
