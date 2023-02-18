import { Post } from "@/types/post";
import { faker } from "@faker-js/faker";
import { createRandomImage } from "./image";
import { createRandomUser } from "./user";

function createRandomPost(): Post {
  const imagesLength = faker.datatype.number({
    min: 1,
    max: 4,
  });
  return {
    id: faker.datatype.uuid(),
    images: Array.from({ length: 2 }).map(() => {
      return createRandomImage();
    }),
    user: createRandomUser(),
    text: faker.lorem.paragraph(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraph(),
    isLiked: true,
  };
}

export const POST = createRandomPost();

export const POSTS = Array.from({ length: 40 }).map(() => {
  return createRandomPost();
});

export const USER_PAGE_POSTS = Array.from({ length: 12 }).map(() => {
  return createRandomPost();
});
