export const getRandomInt = (max: number) => Math.floor(Math.random() * max);
export const getRandomEntry = <T>(arr: T[]) => arr[getRandomInt(arr.length)];
