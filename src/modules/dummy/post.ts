import { Post } from "@/types/post";
import { faker } from "@faker-js/faker";
import { createRandomImage } from "./image";
import { createRandomUser } from "./user";

function createRandomPost(): Post {
  return {
    id: faker.datatype.uuid(),
    images: Array.from({ length: 4 }).map(() => {
      return createRandomImage();
    }),
    user: createRandomUser(),
    text: faker.lorem.paragraph(),
  };
}

export const POST = createRandomPost();

export const POSTS = Array.from({ length: 100 }).map(() => {
  return createRandomPost();
});
