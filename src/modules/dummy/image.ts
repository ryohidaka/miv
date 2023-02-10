import { faker } from "@faker-js/faker";
import { Image } from "@/types/image";

export function createRandomImage(): Image {
  return {
    id: faker.datatype.uuid(),
    url: faker.image.cats(undefined, undefined, true),
  };
}
