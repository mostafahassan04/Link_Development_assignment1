import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type: 'default' | 'title' | 'defaultSemiBold' | 'defaultBold' | 'uppersubtitle' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'defaultBold' ? styles.defaultBold : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'uppersubtitle' ? styles.uppersubtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultBold: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 12,
    lineHeight: 16,
  },
  defaultSemiBold: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 12,
  },
  title: {
    fontFamily: 'Outfit_900Black',
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: 0,
  },
  uppersubtitle: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 12,
    textTransform: 'uppercase',
    lineHeight: 16,
    letterSpacing: 1.2,
  },
  subtitle: {
    fontFamily: 'Outfit_400Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1.2,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
