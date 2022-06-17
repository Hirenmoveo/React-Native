import {StyleSheet, Platform} from 'react-native';

import {initialWindowSafeAreaInsets} from 'react-native-safe-area-context';

//import constants
import {COLORS} from './colors';
import {FONTS} from './fonts';

//import helpers
import {Responsive} from '@helpers';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const STYLES = StyleSheet.create({
  textStyle: (size, color = COLORS.BLACK, font = 'BASE', align) => {
    return {
      fontSize: Responsive.getFontSize(size),
      fontFamily: FONTS[font],
      color: color,
      textAlign: align,
      lineHeight: Responsive.getFontSize(size) + 3,
    };
  },
  paddingStyle: (left, right, top, bottom) => {
    let paddingObj = {};
    if (left) {
      paddingObj.paddingLeft = Responsive.getWidth(left);
    }
    if (right) {
      paddingObj.paddingRight = Responsive.getWidth(right);
    }
    if (top) {
      paddingObj.paddingTop = Responsive.getHeight(top);
    }
    if (bottom) {
      paddingObj.paddingBottom = Responsive.getHeight(bottom);
    }

    return {...paddingObj};
  },
  marginStyle: (left, right = 0, top = 0, bottom = 0) => {
    let marginObj = {};
    if (left) {
      marginObj.marginLeft = Responsive.getWidth(left);
    }
    if (right) {
      marginObj.marginRight = Responsive.getWidth(right);
    }
    if (top) {
      marginObj.marginTop = Responsive.getHeight(top);
    }
    if (bottom) {
      marginObj.marginBottom = Responsive.getHeight(bottom);
    }

    return {...marginObj};
  },
});

export const COMMON_STYLE = StyleSheet.create({
  ...STYLES,
  textStyle: (size, color = COLORS.BLACK, font = 'BASE', align) => {
    return STYLES.textStyle(size, color, font, align);
  },

  borderBtnStyle: (color = COLORS.LIGHT_OPACITY, width, height = 7) => {
    return {
      height: Responsive.getHeight(height),
      width: width ? Responsive.getWidth(width) : '100%',
      borderRadius: Responsive.getWidth(2),
      borderWidth: 1,
      borderColor: color,
      backgroundColor: COLORS.TRANSPARENT,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },

  fillBtnStyle: (color = COLORS.WHITE, width, height = 7) => {
    return {
      height: Responsive.getHeight(height),
      width: width ? Responsive.getWidth(width) : '100%',
      borderRadius: Responsive.getWidth(2),
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },

  fillBtnTextStyle: (size, color = COLORS.BLACK, font = 'BASE', align) => {
    return {
      fontSize: Responsive.getFontSize(size),
      fontFamily: FONTS[font],
      color: color,
      textAlign: align,
    };
  },

  imageStyle: (size, color) => {
    return {
      width: Responsive.getWidth(size),
      height: Responsive.getWidth(size),
      resizeMode: 'contain',
      tintColor: color,
    };
  },

  safeareaHeaderSize: 100 - initialWindowSafeAreaInsets.top,

  headerButtonStyle: {
    ...STYLES.paddingStyle(5, 5),
    height: '100%',
  },

  borderLogoStyle: {
    height: Responsive.getHeight(26),
    width: Responsive.getWidth(50),
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: Responsive.getHeight(5),
    right: Responsive.getWidth(-25),
  },

  containerStyle: {...STYLES.marginStyle(6, 6), flex: 1},
  IndicatorStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content:{
    padding: Responsive.getWidth(4),
  },
});
