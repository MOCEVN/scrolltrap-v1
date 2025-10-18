import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  SymbolView,
  type SymbolViewProps,
  type SymbolWeight,
} from 'expo-symbols';
import { type ComponentProps, useMemo } from 'react';
import {
  type OpaqueColorValue,
  Platform,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

type IconMapping = Record<
  SymbolViewProps['name'],
  ComponentProps<typeof MaterialIcons>['name']
>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - See Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - See SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  // Basis
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  magnifyingglass: 'search',
  'plus.circle.fill': 'add-circle',
  'person.fill': 'person',
  'bubble.left.and.bubble.right.fill': 'chat-bubble',
  info: 'info',

  // Navigatie & UI
  'arrow.left': 'arrow-back',
  'arrow.right': 'arrow-forward',
  'arrow.up': 'arrow-upward',
  'arrow.down': 'arrow-downward',
  'arrow.uturn.left': 'undo',
  'arrow.uturn.right': 'redo',
  xmark: 'close',
  checkmark: 'check',
  gear: 'settings',
  'bell.fill': 'notifications',
  'bell.slash': 'notifications-off',
  'bookmark.fill': 'bookmark',
  'heart.fill': 'favorite',
  heart: 'favorite-border',
  'star.fill': 'star',
  star: 'star-border',
  'trash.fill': 'delete',
  pencil: 'edit',
  'square.and.pencil': 'edit-note',
  'square.and.arrow.up': 'share',
  'eye.fill': 'visibility',
  'eye.slash.fill': 'visibility-off',

  // Media
  'play.fill': 'play-arrow',
  'pause.fill': 'pause',
  'stop.fill': 'stop',
  'backward.fill': 'fast-rewind',
  'forward.fill': 'fast-forward',
  'speaker.wave.2.fill': 'volume-up',
  'speaker.slash.fill': 'volume-off',
  'music.note': 'music-note',

  // Communicatie
  'phone.fill': 'phone',
  'envelope.fill': 'mail',
  'message.fill': 'message',
  'video.fill': 'videocam',
  'mic.fill': 'mic',
  'mic.slash.fill': 'mic-off',

  // Systeem & status
  wifi: 'wifi',
  'battery.100': 'battery-full',
  'battery.25': 'battery-alert',
  'bolt.fill': 'flash-on',
  'cloud.fill': 'cloud',
  'cloud.sun.fill': 'wb-sunny',
  'moon.fill': 'dark-mode',

  // Documenten & data
  'doc.fill': 'description',
  'folder.fill': 'folder',
  paperclip: 'attach-file',
  calendar: 'calendar-today',
  'chart.bar.fill': 'bar-chart',
  'chart.pie.fill': 'pie-chart',

  // Personen & locaties
  'person.2.fill': 'group',
  'person.crop.circle.badge.plus': 'person-add',
  'location.fill': 'location-on',
  'map.fill': 'map',
  globe: 'public',

  // Commerce / Shopping
  'cart.fill': 'shopping-cart',
  'bag.fill': 'shopping-bag',
  'creditcard.fill': 'credit-card',

  // Divers
  'questionmark.circle.fill': 'help',
  'exclamationmark.triangle.fill': 'warning',
  'lock.fill': 'lock',
  'lock.open.fill': 'lock-open',
  bolt: 'flash-on',
  'leaf.fill': 'eco',
  'clock.fill': 'access-time',
  'tag.fill': 'local-offer',
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle | TextStyle>; // Allow both ViewStyle and TextStyle
  weight?: SymbolWeight;
}) {
  const isIOS = useMemo(() => Platform.OS === 'ios', []);

  return isIOS ? (
    <SymbolView
      name={name}
      size={size}
      tintColor={color}
      style={style as StyleProp<ViewStyle>} // Cast to ViewStyle for SymbolView
      weight={weight}
    />
  ) : (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style as StyleProp<TextStyle>} // Cast to TextStyle for MaterialIcons
    />
  );
}

// Export the IconSymbolName type for use in other files
export type { IconSymbolName };
