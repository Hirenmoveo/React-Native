import {StyleSheet} from 'react-native';

import {COMMON_STYLE, COLORS, FONTS} from '@themes';
import {Responsive} from '@helpers';

import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context';



export const styles = StyleSheet.create({
  ...COMMON_STYLE,
  container: {
    flex: 1,
    paddingTop: initialWindowSafeAreaInsets.top,
    paddingBottom: initialWindowSafeAreaInsets.top,
    backgroundColor: COLORS.BLACK
  },
  backgroundStyle:{
    flex: 1,
    resizeMode: 'stretch',    
  },
  profileHeader:{
    backgroundColor: COLORS.BLACK,
    flexDirection:'row',
    justifyContent:'space-between',
    position:'relative',
    minHeight: Responsive.getHeight(6),
  },
  headerShape:{
    position:'absolute',
    width:'100%',
    height:'100%',
    resizeMode: 'stretch',
  },
  profileInfo:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal: Responsive.getWidth(4),
    paddingVertical: Responsive.getWidth(2),
    maxWidth: Responsive.getWidth(30),
  },
  username:{
    fontSize: Responsive.getWidth(3.5),
    color:COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    marginRight: 2
  },
  budgeView:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft: Responsive.getWidth(1.2),
  },
  budgeLabel: {
    fontSize: Responsive.getWidth(2.5),
    color: COLORS.WHITE,
    fontFamily: FONTS.BASE
  },  
  budge:{    
    borderRadius: Responsive.getWidth(7),
    backgroundColor: COLORS.YELLOW,
    justifyContent:'center',
    alignItems:'center',
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
  
  completed:{
    backgroundColor: COLORS.PINK,
    shadowColor: COLORS.PINK,
  },
  points:{
    backgroundColor: COLORS.LIGHT_PINK,
  },
  budgeText: {
    fontSize: Responsive.getWidth(3.6),
    color: COLORS.WHITE,
    fontFamily: FONTS.MEDIUM
  },
  profileIcons:{
    flexDirection:'row',
    marginHorizontal: Responsive.getWidth(2),
  },
  clickIcon:{
    marginHorizontal: Responsive.getWidth(2),
  },
  icon:{
    width: Responsive.getWidth(7),
    height: Responsive.getWidth(7),
    resizeMode: "contain",
  },
  listItem:{
    marginBottom:20
  },
  listItem_content:{
    minHeight: Responsive.getHeight(5.5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:8,
    paddingHorizontal: Responsive.getWidth(5),
  },
  listTitle:{
    fontSize: Responsive.getWidth(4),
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    marginRight:4
  },
  subcontent:{
    flex:1,
    paddingLeft: Responsive.getWidth(7),
    paddingTop:5,
    paddingBottom:10
  },
  CheckBoxSingle:{
    flexDirection:'row',
    marginLeft: -Responsive.getWidth(7)
  },
 
  CheckBoxText:{
    fontSize: Responsive.getWidth(3),
    color: COLORS.WHITE,
    fontFamily: FONTS.BASE,
    lineHeight: Responsive.getWidth(5),
  },
  CheckBox:{
    borderWidth: 2, 
    backgroundColor:'#2A0F4C',
    borderColor: '#8CEAFF', 
    height: Responsive.getWidth(5),
    width: Responsive.getWidth(5),
    borderRadius: 2,
    justifyContent:'center',
    alignItems:'center',
    marginTop:4,
    marginRight: Responsive.getWidth(2),
  },
  CheckBoxIcon:{
    height: Responsive.getWidth(3),
    width: Responsive.getWidth(3),
  },
  tagRow:{
    flexDirection:'row',
  },
  tagStyle:{
    backgroundColor: COLORS.PINK,
    paddingHorizontal: Responsive.getWidth(2.5),
    paddingVertical: Responsive.getWidth(1.5),
    borderRadius: Responsive.getWidth(7),
    shadowColor: COLORS.PINK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,

    elevation: 5,    
    marginRight: Responsive.getWidth(2),
    marginTop: Responsive.getWidth(2),
    marginBottom: Responsive.getWidth(2),
    flexDirection:'row',
    alignItems:'center'
  },
  tagStyleText:{
    fontSize: Responsive.getWidth(2.5),
    color: COLORS.WHITE,
    fontFamily: FONTS.MEDIUM,
  },
  tagClose:{
    width: Responsive.getWidth(2),
    height: Responsive.getWidth(2),
    resizeMode:'contain',
    marginLeft: Responsive.getWidth(1),
  },
  bottomRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:10
  },
  dpImage:{
    width: Responsive.getWidth(4),
    height: Responsive.getWidth(4),
    borderRadius: Responsive.getWidth(4),
  },
  projectNameStyle:{
    justifyContent:'center',
    height: Responsive.getWidth(5),
  },
  projectName:{
    fontSize: Responsive.getWidth(2),
    color: COLORS.WHITE,
    fontFamily: FONTS.MEDIUM,
    paddingHorizontal: Responsive.getWidth(4),
    paddingVertical: Responsive.getWidth(0.5),
  },
  commentView:{
    paddingTop: Responsive.getWidth(1.5),
    paddingRight: Responsive.getWidth(2),
    flexDirection:'row'
  },
  chatIcon:{
    width: Responsive.getWidth(3),
    height: Responsive.getWidth(3),
    resizeMode:'contain'
  },
  chatCountView:{
    backgroundColor: COLORS.PINK,
    height: Responsive.getWidth(3),
    minWidth: Responsive.getWidth(2),
    borderRadius: Responsive.getWidth(3),
    paddingHorizontal: Responsive.getWidth(1),
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:0,
    right:0
  },
  chatCount:{    
    fontSize: Responsive.getWidth(1.5),
    color: COLORS.WHITE,
    fontFamily: FONTS.EXTRA_BOLD,        
  },
  budgeSmall: {
    paddingVertical: Responsive.getWidth(0.3),
    paddingHorizontal: Responsive.getWidth(1.5),
  },
  budgeSmallText:{
    fontSize: Responsive.getWidth(2),
    color: COLORS.WHITE,
    fontFamily: FONTS.MEDIUM
  },
  reloadIcon:{
    width: Responsive.getWidth(3.5),
    height: Responsive.getWidth(3.5),
    resizeMode: 'contain'
  },
  dueDateStyle:{
    backgroundColor: COLORS.BLUE_02,
    paddingVertical: Responsive.getWidth(0.8),
    paddingHorizontal: Responsive.getWidth(4),
    borderRadius: Responsive.getWidth(4),
  },
  dueDateStyleText: {
    fontSize: Responsive.getWidth(2),
    color: COLORS.BLACK,
    fontFamily: FONTS.BASE
  },
  addButtonTouch:{
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginRight: Responsive.getWidth(4),  
  },
  addButton:{
    width: Responsive.getWidth(15),
    height: Responsive.getWidth(15),    
    resizeMode:'contain'
  },
  bottom_progressBar:{
    minHeight: Responsive.getWidth(25),    
    flexDirection:'row',
    justifyContent:'space-between'
  },
  content_progressBar:{
    padding: Responsive.getWidth(4),
    maxWidth: Responsive.getWidth(70),
  },
  content_h2:{
    fontSize: Responsive.getWidth(4.5),
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    textTransform:'uppercase'
  },
  content_h6: {
    fontSize: Responsive.getWidth(2.8),
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    textTransform: 'uppercase'
  },
  topArrow:{
    margin: Responsive.getWidth(4),
    alignSelf:'flex-end'
  },
  topArrowIcon:{
    width: Responsive.getWidth(5),
    height: Responsive.getWidth(5),
    resizeMode: 'contain',
  },
});
