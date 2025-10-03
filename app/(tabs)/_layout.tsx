import { IconSymbol, IconSymbolName } from "@/components/ui/icon-symbol";
import { Slot, usePathname, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type RouteName = "index" | "explore" | "create" | "profile";

interface Route {
  name: RouteName;
  label: string;
  icon: IconSymbolName;
}

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();

  const routes: Route[] = [
    { name: "index", label: "Home", icon: "house.fill" },
    { name: "explore", label: "Explore", icon: "magnifyingglass" },
    { name: "create", label: "Create", icon: "plus.circle.fill" },
    { name: "profile", label: "Profile", icon: "person.fill" },
  ];

  const handlePress = (routeName: RouteName) => {
    const path = routeName === "index" ? "/" : `/${routeName}` as const;
    router.push(path);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        {routes.map((route) => {
          const isActive =
            pathname === `/${route.name}` ||
            (route.name === "index" && pathname === "/");
          return (
            <TouchableOpacity
              key={route.name}
              onPress={() => handlePress(route.name)}
              style={[styles.tab]}
            >
              <IconSymbol
                name={route.icon} // Now typed as IconSymbolName
                size={24}
                color={isActive ? "#fff" : "#aaa"}
              />
              <Text style={[styles.label]}>
                {route.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.content}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: 90,
    backgroundColor: "#111",
    paddingVertical: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tab: {
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },

  label: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 4,
  },

  content: {
    flex: 1,
    backgroundColor: "#fff",
  },
});