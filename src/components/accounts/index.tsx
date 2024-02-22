import { Avatar, Center, FlatList, Heading } from "native-base";
import { Pressable } from "react-native";
import { TextComponent } from "@shared/components/text";
import { useAuth } from "@context/auth.context";
import { useRouter } from "expo-router";

export function AccountsComponent() {
  const router = useRouter();
  const { user } = useAuth();
  return (
    <Center paddingTop={"20"}>
      <Heading color={"white"}> Quem esta assistindo?</Heading>
      <FlatList
        data={user?.accounts}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push("/(tabs)")}>
            <Center marginTop={"10"}>
              <Avatar
                size="xl"
                bgColor={"black"}
                source={{
                  uri:
                    item.avatar ||
                    "https://xsgames.co/randomusers/avatar.php?g=pixel",
                }}
              />
              <TextComponent label={item.name} color={"white"} />
            </Center>
          </Pressable>
        )}
      />
    </Center>
  );
}
