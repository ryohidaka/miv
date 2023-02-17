import { User } from "@/types/user";
import { faker } from "@faker-js/faker";

export function createRandomUser(): User {
  return {
    id: faker.datatype.uuid(),
    name: faker.internet.userName(),
    image_url: faker.image.cats(undefined, undefined, true),
    bannerUrl: faker.image.cats(undefined, undefined, true),
    description: faker.lorem.paragraph(undefined),
  };
}
