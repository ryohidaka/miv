export type User = {
  id: string;
  name: string;
  image_url: string;
  blurhash?: string;
  bannerUrl?: string;
  bannerBlurhash?: string;
  description?: string;
  username?: string;
};

export type UserParams = {
  userId: string;
};
