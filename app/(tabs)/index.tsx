
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageSourcePropType,
  useWindowDimensions,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import NotificationIcon from "../../assets/icons/notification.svg";
import CartIcon from "../../assets/icons/cart.svg";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import { ThemedText } from "@/components/themed-text";

import { LinearGradient } from "expo-linear-gradient";
import Container from "@/components/Container";

export interface Product {
  id: number;
  name: string;
  category: string;
  sale: boolean;
  discount: number;
  price: number;
  image: ImageSourcePropType;
  rate: number;
  numberOfReviews: number;
}

interface PromoItem {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
}

export default function HomeScreen() {
  let categoriesData = [
    { id: 1, name: "Fashion", icon: require("../../assets/icons/fashion.png") },
    {
      id: 2,
      name: "Electronics",
      icon: require("../../assets/icons/electronics.png"),
    },
    { id: 3, name: "Beauty", icon: require("../../assets/icons/beauty.png") },
    { id: 4, name: "Home", icon: require("../../assets/icons/home.png") },
    { id: 5, name: "Sports", icon: require("../../assets/icons/sports.png") },
  ];

  let productsData: Product[] = [
    {
      id: 1,
      name: "Air Jordan 1 Retro High",
      category: "Fashion",
      sale: true,
      discount: 25,
      price: 199,
      image: require("../../assets/images/Air Jordan 1 Retro High.png"),
      rate: 5,
      numberOfReviews: 120,
    },
    {
      id: 2,
      name: "Premium Smart Watch",
      category: "Electronics",
      sale: false,
      discount: 0,
      price: 299,
      image: require("../../assets/images/Premium Smart Watch.png"),
      rate: 5,
      numberOfReviews: 567,
    },
    {
      id: 3,
      name: "Luxury Face Cream",
      category: "Beauty",
      sale: true,
      discount: 26,
      price: 120,
      image: require("../../assets/images/Luxury Face Cream.png"),
      rate: 5,
      numberOfReviews: 128,
    },
    {
      id: 4,
      name: "Modern Velvet Sofa",
      category: "Home",
      sale: false,
      discount: 0,
      price: 1299,
      image: require("../../assets/images/Modern Velvet Sofa.png"),
      rate: 5,
      numberOfReviews: 89,
    },
    {
      id: 5,
      name: "Pro Running Shoes",
      category: "Sports",
      sale: true,
      discount: 24,
      price: 169,
      image: require("../../assets/images/Pro Running Shoes.png"),
      rate: 5,
      numberOfReviews: 45,
    },
  ];

  let onSaleProducts = productsData.filter((product) => product.sale);

  const { width: screenWidth } = useWindowDimensions();
  // Adjust width based on the parent ScrollView's padding (16 on each side = 32)
  const sliderWidth = screenWidth - 32;

  // Active slide state for pagination
  const [activeIndex, setActiveIndex] = useState(0);

  // Slider data
  const promoData: PromoItem[] = [
    {
      id: 1,
      tag: "limited offer",
      title: "Beauty Essentials",
      subtitle: "Premium brands",
      image: require("../../assets/images/promo.png"),
    },
    {
      id: 2,
      tag: "hot deals",
      title: "Summer Collection",
      subtitle: "Up to 50% off",
      image: require("../../assets/images/promo.png"), // Replace with separate image if available
    },
    {
      id: 3,
      tag: "exclusive",
      title: "Smart Gadgets",
      subtitle: "Next Gen Tech",
      image: require("../../assets/images/promo.png"), // Replace with separate image if available
    },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / slideSize);
    setActiveIndex(index);
  };

  return (
    <View style={styles.HomeContainer}>
      <View style={styles.searchContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 44,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <ThemedText type="uppersubtitle" style={{ color: "#6B6880" }}>
              welcome back,
            </ThemedText>
            <ThemedText
              type="title"
              style={{ color: "#130F2A", lineHeight: 28 }}
            >
              Mostafa 👋
            </ThemedText>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              width: 82,
              height: 37,
            }}
          >
            <Button
              type="default"
              content={<NotificationIcon width={17} height={17} />}
              onPress={() => console.log("Notification button pressed")}
              showBadge={true}
            />
            <Button
              type="default"
              content={<CartIcon width={17} height={17} />}
              onPress={() => console.log("Cart button pressed")}
            />
          </View>
        </View>

        <View style={{ marginTop: 16 }}>
          <SearchBar
            placeholder="Search products..."
            onSearch={(text) => console.log(text)}
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Carousel Slider Container */}
        <View style={{ width: sliderWidth, height: 176, borderRadius: 24, overflow: 'hidden' }}>
          <FlatList
            data={promoData}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={sliderWidth}
            decelerationRate="fast"
            keyExtractor={(item) => item.id.toString()}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            renderItem={({ item }) => (
              <View style={{ width: sliderWidth, height: 176 }}>
                <Image source={item.image} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                <LinearGradient
                  colors={[
                    'rgba(0, 0, 0, 0.75)',
                    'rgba(0, 0, 0, 0.3)',
                    'rgba(0, 0, 0, 0)',
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradientOverlay}
                > 
                  <ThemedText type='uppersubtitle' style={{ color: '#FFFFFFB2'}}>
                    {item.tag}
                  </ThemedText>
                  <ThemedText type='title' style={{ color: '#FFFFFF', lineHeight: 25, marginVertical: 4 }}>
                    {item.title}
                  </ThemedText>
                  <ThemedText type='subtitle' style={{ color: '#FFFFFFCC' }}>
                    {item.subtitle}
                  </ThemedText>
                </LinearGradient>
              </View>
            )}
          />

          {/* Custom Pagination Indicator Dots (Anchored Bottom-Right) */}
          <View style={styles.paginationContainer}>
            {promoData.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  activeIndex === index ? styles.activeDot : styles.inactiveDot
                ]}
              />
            ))}
          </View>
        </View>

        <Container
          type="categories"
          title="Categories"
          onPress={() => console.log("See All pressed")}
          data={categoriesData}
        ></Container>
        <Container
          type="horizontalproducts"
          title="Flash Sale"
          onPress={() => console.log("See All pressed")}
          data={onSaleProducts.slice(0, 4)}
        ></Container>
        <Container
          type="verticalproducts"
          title="Featured Products"
          onPress={() => console.log("See All pressed")}
          data={productsData.slice(0, 4)}
        ></Container>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    backgroundColor: "#F4F2FF",
  },
  searchContainer: {
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    height: 145,
    borderBottomWidth: 1,
    borderBottomColor: "#6D28D91F",
  },
  gradientOverlay: {
    position: 'absolute', 
    padding: 20 , 
    top: 0, 
    right: 0, 
    left: 0, 
    bottom: 0,
    justifyContent: 'flex-end', 
    alignItems: 'flex-start',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
  activeDot: {
    width: 20, // Stretching the active pill
    backgroundColor: '#FFFFFF',
  },
  inactiveDot: {
    width: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});
