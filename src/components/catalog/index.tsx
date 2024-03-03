import { View } from "native-base";
import { ListCatalogComponent } from "./list";
import { ListGenderComponent } from "./gender/list";

export const CatalogComponent = () => {
  return (
    <View flexDir={"row"}>
      <ListCatalogComponent />
    </View>
  );
};
