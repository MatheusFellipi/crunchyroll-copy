import { Stack } from "expo-router";

import { appStackRoutes } from "./routes";

export const NavigationScreens = () => (
  <Stack>
    {appStackRoutes.map((item) => (
      <Stack.Screen
        key={item.name}
        name={item.name}
        options={{ headerShown: false }}
      />
    ))}
  </Stack>
);
