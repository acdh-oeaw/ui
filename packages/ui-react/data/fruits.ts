import { faker } from "@faker-js/faker";

faker.seed(123456);

// eslint-disable-next-line @typescript-eslint/unbound-method
export const fruits = faker.helpers.uniqueArray(faker.food.fruit, 50).map((label) => {
	return { id: faker.string.uuid(), label };
});

export type Fruit = (typeof fruits)[number];
