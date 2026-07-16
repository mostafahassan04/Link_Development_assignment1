import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

import HomeIcon from "../../assets/icons/tabs/home.svg";
import ShopIcon from "../../assets/icons/tabs/shop.svg";
import CartIcon from "../../assets/icons/tabs/cart.svg";
import WishlistIcon from "../../assets/icons/tabs/wishlist.svg";
import ProfileIcon from "../../assets/icons/tabs/profile.svg";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon width={20} height={20} />,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          tabBarIcon: ({ color }) => <ShopIcon width={20} height={20} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <CartIcon width={20} height={20} />,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color }) => <WishlistIcon width={20} height={20} />,
        }}
      />
      <Tabs.Screen
        name="profile "
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <ProfileIcon width={20} height={20} />,
        }}
      />
    </Tabs>
  );
}
