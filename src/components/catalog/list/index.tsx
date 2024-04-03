import { FlatList, View } from "native-base";
import { CardCatalogComponent } from "./card";
import { useEffect, useState } from "react";
import { controllerAnime } from "@services/animes";

export const ListCatalogComponent = () => {
  const [data, setData] = useState<AnimeListResponse[]>([]);
  const [loader, setLoader] = useState(true);
  const [offset, setOffset] = useState(0);

  const getAnimes = (page: number) => {
    setOffset(page);
    controllerAnime.GetSortAlphabet(page).then((res) => {  data.length > 0 ? setData([data,...res]): setData(res) }).finally(() => setLoader(false));
  };

  useEffect(() => { getAnimes(0) }, []);



  return (
    <View w={"full"}>
      <FlatList data={data} keyExtractor={(item) => item.id} numColumns={2} onEndReached={() => getAnimes(offset + 1)}
      ListFooterComponent={()=>(<View marginBottom={"1/4"}/>)}
        renderItem={({ item }) => (
          <CardCatalogComponent id={item?.id} img={item?.attributes?.posterImage?.small} title={item?.attributes?.canonicalTitle} />
        )}
      />
    </View>
  );
};


