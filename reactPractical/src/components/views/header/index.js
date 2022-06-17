import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import { Responsive } from "@helpers";

//import languages
import { localize } from "@languages";

//import style
import { styles } from "./style";

//import themes
import { COLORS, COMMON_STYLE, IMAGES } from "@themes";

export default class Header extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <View style={styles.profileHeader}>
        <Image source={IMAGES.headerShape} style={styles.headerShape} />
        <View style={styles.profileInfo}>
          <Text style={styles.username}>John Smith</Text>
          <View style={styles.budgeView}>
            <Text style={styles.budgeLabel}>Open</Text>
            <View style={[styles.budge, styles.budgeSmall]}><Text style={styles.budgeText}>31</Text></View>
          </View>
          <View style={styles.budgeView}>
            <Text style={styles.budgeLabel}>Completed</Text>
            <View style={[styles.budge, styles.budgeSmall, styles.completed]}><Text style={styles.budgeText}>31</Text></View>
          </View>
        </View>
        <View style={styles.profileIcons}>
          <TouchableOpacity style={styles.clickIcon}>
            <Image source={IMAGES.filterIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.clickIcon}>
            <Image source={IMAGES.infoIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
