import CustomSidebar from "@/components/side-bar";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

const systemScheme = useColorScheme();
const colorScheme = systemScheme ?? "dark";

export default function Layout() {
  return (
    <Tabs
      tabBar={(props) => <CustomSidebar {...props} />} 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="create" options={{ title: "Create" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
