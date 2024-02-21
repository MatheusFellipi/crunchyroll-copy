import { appStackTabs } from "@navigation/tabs/tabs";
import { Tabs } from "expo-router";

export const NavigationTabs = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          paddingBottom: 20,
          paddingTop: 20,
          backgroundColor: "#112439",
          borderTopWidth: 0,
          height: 97,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 7
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,
          elevation: 14
        }
      }}
    >
      {appStackTabs.map((item) => (
        <Tabs.Screen
          options={{
            tabBarLabel: item.title,
            headerShown: false,
          }}
          name={item.name}
          key={item.name}
        />
      ))}
    </Tabs>
  );
};
