import type {
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();

  return (
    <View className="flex-row border-t border-gray-200 bg-white dark:bg-black">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title ?? route.name;

        const Icon = options.tabBarIcon
          ? options.tabBarIcon({
              focused: state.index === index,
              color: state.index === index ? colors.primary : colors.text,
              size: 28,
            })
          : null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            className="flex-1 items-center justify-center py-2"
            style={{ opacity: isFocused ? 1 : 0.6 }}
          >
            {Icon}
            <Text
              className="text-xs mt-1"
              style={{ color: isFocused ? colors.primary : colors.text }}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
