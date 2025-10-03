import { IconSymbol, IconSymbolName } from "@/components/ui/icon-symbol";
import { Slot, usePathname, useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type RouteName = "index" | "explore" | "create" | "profile";

interface Route {
  name: RouteName;
  label: string;
  icon: IconSymbolName;
}

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/explore?query=${searchQuery}`);
    }
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
                name={route.icon}
                size={24}
                color={isActive ? "#fff" : "#aaa"}
              />
              <Text style={[styles.label]}>{route.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <IconSymbol name="magnifyingglass" size={16} color="#aaa" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#aaa"
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
              returnKeyType="search"
            />
          </View>
        </View>
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
    width: 60,
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
  },
  searchContainer: {
    padding: 8,
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingHorizontal: 10,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#555",
    paddingHorizontal: 12,
    width: 500, 
    paddingVertical: 4,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 6,
    fontSize: 14,
    marginLeft: 6,
    color: "#fff",
  },
});