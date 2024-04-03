import { connection } from "@services/connection";

const base = "anime";

export const controllerAnime = {
  GetSortAlphabet: async (page: number) => {
    const { data } = await connection.GetData<any>(`${base}?sort=slug&page[limit]=20&page[offset]=${page}`);
    return data.data;
  },
};
