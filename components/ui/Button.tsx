import {
    Image,
    ImageSourcePropType,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

interface ButtonProps {
  type: "primary" | "secondary" | "default" | "card";
  content: React.ReactNode | string | ImageSourcePropType;
  onPress: () => void;
  showBadge?: boolean;
}

export default function Button({
  type = "primary",
  content,
  onPress,
  showBadge
}: ButtonProps) {
  return (
    <Pressable style={styles[type]} onPress={onPress}>
      {type === "card" ? (
        <Image
          source={content as ImageSourcePropType}
          style={styles[`${type}Content`]}
        />
      ) : typeof content === "string" ? ( // Check if text
        <Text style={styles[`${type}Content`]}>{content}</Text>
      ) : (
        content
      )}
      {showBadge && <View style={styles.badge} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ["default"]: {
    width: 37,
    height: 37,
    backgroundColor: "#EDEDF5",
    borderRadius: 16,
    padding: 10,
  },
  ["primary"]: {
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  ["primaryContent"]: {
    fontFamily: "Outfit_700Bold",
    color: "#6D28D9",
    fontSize: 14,
    lineHeight: 20,
  },
  ["secondaryContent"]: {
    fontFamily: "Outfit_700Bold",
    color: "#FFFFFF",
  },
  ["secondary"]: {
    width: 32, // FIX: Perfect square width
    height: 32, // FIX: Perfect square height
    borderRadius: 16, // Rounded corners
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6D28D9",
  },
  ["card"]: {
    backgroundColor: "#6D28D91A",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    height: 56,
    },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#FB2C36', 
  },
});
