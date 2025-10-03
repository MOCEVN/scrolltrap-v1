import { IconSymbol } from "@/components/ui/icon-symbol";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomSidebar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.sidebar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        let iconName = "circle.fill";
        if (route.name === "index") iconName = "house.fill";
        if (route.name === "explore") iconName = "paperplane.fill";
        if (route.name === "create") iconName = "paperplane.fill";
        if (route.name === "profile") iconName = "paperplane.fill";

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tab]}
          >
            <IconSymbol name={iconName as any} size={24} color={isFocused ? "#fff" : "#aaa"} />
            <Text style={[styles.label]}>{label as any}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
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
  },
  label: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 4,
  },

});

export default CustomSidebar;
