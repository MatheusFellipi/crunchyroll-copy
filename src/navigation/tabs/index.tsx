import { HeaderComponent } from "@components/header";
import { appStackTabs } from "@navigation/tabs/tabs";
import { Tabs } from "expo-router";

export const NavigationTabs = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: "white",
        tabBarActiveTintColor: "orange",
        tabBarItemStyle: {
          borderRadius: 50,
          marginVertical: 6,
          alignItems: "center",
          height: 52,
        },
        headerStyle:{
          backgroundColor:"black"
        },
        tabBarStyle: {
          position: "absolute",
          bottom: 30,
          left: 20,
          right: 20,
          borderRadius: 50,
          elevation: 5,
          borderTopWidth: 0,
          height: 64,
          paddingHorizontal: 6,
        },
      }}
    >
      {appStackTabs.map((item) => (
        <Tabs.Screen
          options={{
            headerRight: () => <HeaderComponent />,
            tabBarLabel: item.title,
            headerTitle: item.title,
            tabBarAccessibilityLabel: item.title,
            tabBarIcon: ({ focused }) => item.Icon,
          }}
          name={item.name}
          key={item.name}
        />
      ))}
    </Tabs>
  );
};
