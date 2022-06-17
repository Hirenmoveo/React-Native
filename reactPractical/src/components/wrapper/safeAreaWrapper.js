// COMOPONENT OR LIBRARY IMPORT
import React, {Fragment} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';

//import third-party packages
import {connect} from 'react-redux';

// import themes
import {COLORS, IMAGES, COMMON_STYLE} from '@themes';

// import helpers
import {Responsive} from '@helpers';

//import languages
import {localize} from '@languages';

class Wrapper extends React.PureComponent {
  static defaultProps = {
    backgroundColor: COLORS.GRAY_DB,
    statusBarColor: COLORS.BLACK,
    bgImage: '',
    isTranslucent: true,
  };

  render() {
    const {
      isTranslucent,
      backgroundColor,
      statusBarColor,
      containerStyle,
      children,
      bgImage,
    } = this.props;
    return (
      <Fragment>
        <StatusBar
          backgroundColor={statusBarColor}
          translucent={isTranslucent}
          barStyle="light-content"
          hidden={false}
        />

        <View style={styles.safeAreaViewStyle(backgroundColor)}>
          <View style={[styles.containerViewStyle]}>            
              {children}
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaViewStyle: color => {
    return {
      flex: 1,
      backgroundColor: color,
    };
  },
  backgroundStyle: {
    flex:1,
    resizeMode: 'stretch',
  },
  containerViewStyle: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  containerStyle: {
    flex: 1,
  },
  statusBarStyle:{
    backgroundColor:'#f00'
  }
});


//Connect Everything
export const SafeAreaWrapper = connect(
)(Wrapper);
