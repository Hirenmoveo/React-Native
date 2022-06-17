import { StyleSheet } from 'react-native';

import { COMMON_STYLE, COLORS, FONTS } from '@themes';
import { Responsive } from '@helpers';

import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context';



export const styles = StyleSheet.create({
  ...COMMON_STYLE,
  container: {
    flex: 1,
    paddingTop: initialWindowSafeAreaInsets.top,
    paddingBottom: 0,
    backgroundColor: COLORS.BLACK
  },
  backgroundStyle: {
    flex: 1,
    resizeMode: 'stretch',
  },
  profileHeader: {
    backgroundColor: COLORS.BLACK,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    minHeight: Responsive.getHeight(6),
  },
  headerShape: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Responsive.getWidth(4),
    paddingVertical: Responsive.getWidth(2),
    maxWidth: Responsive.getWidth(30),
  },
  username: {
    fontSize: Responsive.getWidth(3.5),
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    marginRight: 2
  },
  budgeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Responsive.getWidth(1.2),
  },
  budgeLabel: {
    fontSize: Responsive.getWidth(2.5),
    color: COLORS.WHITE,
    fontFamily: FONTS.BASE
  },
  budge: {
    borderRadius: Responsive.getWidth(7),
    backgroundColor: COLORS.YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Responsive.getWidth(1),
    marginRight: Responsive.getWidth(1),
    paddingHorizontal: Responsive.getWidth(2.2),
    paddingVertical: Responsive.getWidth(0.6),
    shadowColor: 'rgb(252, 183, 0)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3,

    elevation: 2,
  },
  budgeSmall: {
    paddingVertical: Responsive.getWidth(0.3),
  },
  completed: {
    backgroundColor: COLORS.PINK,
    shadowColor: COLORS.PINK,
  },
  points: {
    backgroundColor: COLORS.LIGHT_PINK,
  },
  budgeText: {
    fontSize: Responsive.getWidth(3.6),
    color: COLORS.WHITE,
    fontFamily: FONTS.MEDIUM
  },
  profileIcons: {
    flexDirection: 'row',
    marginHorizontal: Responsive.getWidth(2),
  },
  clickIcon: {
    marginHorizontal: Responsive.getWidth(2),
  },
  icon: {
    width: Responsive.getWidth(7),
    height: Responsive.getWidth(7),
    resizeMode: "contain",
  },
});
