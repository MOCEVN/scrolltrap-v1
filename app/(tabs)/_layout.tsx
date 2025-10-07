import { IconSymbol, IconSymbolName } from "@/components/ui/icon-symbol";
import { Slot, usePathname, useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

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
    <View className="flex-1 flex-row">
      {/* Sidebar */}
      <View className="w-[90] bg-[#111] py-5 justify-start items-center">
        {routes.map((route) => {
          const isActive =
            pathname === `/${route.name}` ||
            (route.name === "index" && pathname === "/");
          return (
            <TouchableOpacity
              key={route.name}
              onPress={() => handlePress(route.name)}
              className="my-3 justify-center items-center p-2"
            >
              <IconSymbol
                name={route.icon}
                size={24}
                color={isActive ? "#fff" : "#aaa"}
              />
              <Text className="text-xs text-[#aaa] mt-1">{route.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Content */}
      <View className="flex-1">
        {/* Search bar */}
        <View className="p-2 bg-black border-b border-b-black px-3">
          <View className="flex-row items-center bg-[#333] rounded-md border border-[#555] px-3 py-1 w-[500]">
            <IconSymbol name="magnifyingglass" size={16} color="#aaa" />
            <TextInput
              className="flex-1 py-1.5 text-sm ml-1.5 text-white"
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
