import React from "react";

import {
  Image,
  StyleSheet,
  View,
  Text,
  Platform,
  Pressable,
  TouchableOpacity
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//imoprt constants
import { ASYNC_KEYS } from "@constants";

//imoprt constants
import { COMMON_STYLE, COLORS, IMAGES } from "@themes";

//import languages
import { localize } from "@languages";

import { Responsive } from "@helpers";

//import Screens
import * as Screen from "@screens";

const Stack = createStackNavigator();

// render custom component
function renderHeaderButton(icon, onPress) {
  return (
    <TouchableOpacity
      buttonStyle={COMMON_STYLE.headerButtonStyle}
      type={"clear"}
      icon={
        <Image source={icon} style={COMMON_STYLE.imageStyle(5, COLORS.WHITE)} />
      }
      onPress={onPress}
    />
  );
}

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerStyle: styles.headerStyle,
          headerTitleAlign: "center",
          headerTitle: "John Smith ",
          headerTitleStyle: styles.headerTitleStyle,
          headerShown: false,
          headerLeft: () =>
            renderHeaderButton(IMAGES.backArrow, () => navigation.goBack()),
        })}
      >
        <Stack.Screen name="PROFILE_SCREEN" component={Screen.ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;

const styles = StyleSheet.create({
  headerStyle: {
    shadowOpacity: 0,
    shadowOffset: { height: 0 },
    elevation: 0,
    height: 100,
  },

  headerTitleStyle: {
    ...COMMON_STYLE.textStyle(12, COLORS.WHITE, "BLACK", "center"),
  },
});
