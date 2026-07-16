import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { Product } from "../app/(tabs)/index";
import PlusIcon from "../assets/icons/plus.svg";
import StarIcon from "../assets/icons/star.svg";
import { ThemedText } from "./themed-text";
import Button from "./ui/Button";

interface ProductCardProps {
  product: Product;
  type: "primary" | "secondary";
  onPress: () => void;
}

export default function ProductCard({
  product,
  type,
  onPress,
}: ProductCardProps) {
  return (
    <View style={styles[`${type}Container`]}>
      <Image
        source={product.image as ImageSourcePropType}
        style={{
          width: "100%",
          height: 144,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
        resizeMode="cover"
      />
      <View style={styles[`${type}Details`]}>
        {type === "secondary" && (
          <ThemedText
            type="subtitle"
            style={{ fontSize: 10, color: "#6B6880" }}
          >
            {product.category}
          </ThemedText>
        )}
        <ThemedText
          type={type === "primary" ? "defaultBold" : "defaultSemiBold"}
          numberOfLines={1}
          style={styles[`${type}Name`]}
        >
          {product.name}
        </ThemedText>
        {type === "secondary" && (
          <View style={{ flexDirection: "row", alignItems: "center", paddingTop:4 , gap: 4 }}>
            {Array.from({ length: 5 }, (_, i) => (
              <StarIcon key={i} width={17} height={17}/>
            ))}
            <ThemedText
              type="subtitle"
              style={{ fontSize: 10, color: "#6B6880" }}
            >
              ({product.numberOfReviews})
            </ThemedText>
          </View>
        )}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 4,
            }}
          >
            <ThemedText type="title" style={styles[`${type}Price`]}>
              {product.sale
                ? `$${product.price - (product.price * product.discount * 0.01).toFixed(0)}`
                : `$${product.price}`}
            </ThemedText>
            {product.sale && (
              <ThemedText
                type="subtitle"
                style={{
                  color: "#6B6880",
                  textDecorationLine: "line-through",
                  fontSize: 10,
                  lineHeight: 15,
                }}
              >
                ${product.price}
              </ThemedText>
            )}
          </View>
          {type === "secondary" && (
            <Button
              type="secondary"
              content={<PlusIcon width={17} height={17} />}
              onPress={() => console.log("add to cart")}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryContainer: {
    width: 142,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#6D28D91F",

    // FIX: Solid color + opacity decimal (0.1 is equivalent to 1A hex)
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // FIX: Added Android elevation fallback
  },
  secondaryContainer: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#6D28D91F",

    // FIX: Solid color + opacity decimal (0.1 is equivalent to 1A hex)
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // FIX: Added Android elevation fallback
  },
  primaryDetails: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10,
    width: "100%",
  },

  primaryName: {
    color: "#130F2A",
    fontSize: 12,
  },
  secondaryDetails: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 12,
    width: "100%",
  },
  secondaryName: {
    color: "#130F2A",
    fontSize: 14,
  },
  primaryPrice: {
    color: "#6D28D9",
    fontSize: 14,
  },
  secondaryPrice: {
    color: "#6D28D9",
    fontSize: 16,
  },
});
