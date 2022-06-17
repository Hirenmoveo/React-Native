import React, { useState } from "react";
import { Image, View, Text, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, FlatList} from 'react-native';

//import components
import {SafeAreaWrapper, Header} from '@components';

//import themes
import {IMAGES, COLORS} from '@themes';

// import Third Party
import CheckBox from '@react-native-community/checkbox';

import { localize } from "@languages";

//import style
import {styles} from './style';


const ProfileScreen = () => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const listData = [{
    name:"My Focus",
    task:"3",
    point:"863"
  }, {
      name: "Backlog",
      task: "3",
      point: "863"
    }
  ]

  const renderListCell = (item) => {
    return(
      <View style={styles.listItem}>
        <Image source={IMAGES.listShape} style={styles.headerShape} />
        <View style={styles.listItem_content}>
          <Text style={styles.listTitle}>{item.name}</Text>
          <View style={styles.budgeView}>
            <View style={styles.budge}>
              <Text style={styles.budgeText}>{item.task}</Text>
            </View>
            <Text style={styles.budgeLabel}>{localize("TASKS")}</Text>
          </View>
          <View style={styles.budgeView}>
            <View style={[styles.budge, styles.points]}>
              <Text style={styles.budgeText}>{item.point}</Text>
            </View>
            <Text style={styles.budgeLabel}>{localize("POINTS")}</Text>
          </View>
        </View>
      </View>
    )
  }
    return (
      <SafeAreaWrapper backgroundColor={COLORS.BLACK} >
        <View style={styles.container}>
          <ImageBackground source={IMAGES.backgroundImage} style={styles.backgroundStyle}>
            <Header />
            <View style={{flex:1}}>
              <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={styles.content}>
                  <FlatList 
                    data={listData}
                    renderItem={({item}) => renderListCell(item)}
                  />                                
                  <View style={styles.listItem}>
                    <Image source={IMAGES.contentShape} style={styles.headerShape} />
                    <View style={styles.listItem_content}>
                      <View style={styles.subcontent}>
                        <View style={styles.CheckBoxSingle}>
                          <View style={styles.CheckBox}>
                            <CheckBox
                              hideBox={true}
                              boxType="square"
                              tintColor="#8CEAFF"
                              onCheckColor="#8CEAFF"
                              onTintColor="#8CEAFF"
                              offAnimationType="stroke"
                              value={toggleCheckBox}
                              onValueChange={(newValue) => setToggleCheckBox(newValue)}
                              style={styles.CheckBoxIcon}
                            />                      
                          </View>                      
                          <Text style={styles.CheckBoxText}>{localize("LIPSUM")}</Text>                      
                        </View>
                        <View style={styles.tagRow}>
                          <View style={styles.tagStyle}>
                            <Text style={styles.tagStyleText}>{localize("TAGS")}</Text>
                            <TouchableOpacity><Image source={IMAGES.close} style={styles.tagClose} /></TouchableOpacity>
                          </View>
                          <View style={styles.tagStyle}>
                            <Text style={styles.tagStyleText}>{localize("TAGS")}</Text>
                            <TouchableOpacity><Image source={IMAGES.close} style={styles.tagClose} /></TouchableOpacity>
                          </View>
                        </View>
                        <View style={styles.bottomRow}>                     
                          <TouchableOpacity style={styles.dpView}>
                            <Image source={IMAGES.dpImage} style={styles.dpImage} />
                          </TouchableOpacity>
                          <View style={styles.projectNameStyle}>
                            <Image source={IMAGES.nameShape} style={styles.headerShape} />
                            <Text style={styles.projectName}>ProjectName #14 </Text>
                          </View>
                          <TouchableOpacity style={styles.commentView}>
                            <Image source={IMAGES.chatIcon} style={styles.chatIcon} />
                            <View style={styles.chatCountView}>
                              <Text style={styles.chatCount}>02</Text>
                            </View>
                          </TouchableOpacity>
                          <View style={[styles.budge, styles.budgeSmall]}><Text style={[styles.budgeText, styles.budgeSmallText]}>M</Text></View>
                          <TouchableOpacity style={styles.reloadView}>
                            <Image source={IMAGES.reload} style={styles.reloadIcon} />
                          </TouchableOpacity>                      
                          <View style={styles.dueDateStyle}>
                            <Text style={styles.dueDateStyleText}>{localize("NO_DUE_DATE")}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
              <TouchableOpacity style={styles.addButtonTouch}>
                <Image source={IMAGES.addButton} style={styles.addButton} />
              </TouchableOpacity>
            </View>
            <View style={styles.bottom_progressBar}>
              <Image source={IMAGES.progressBar} style={styles.headerShape} />
              <View style={styles.content_progressBar}>
                <Text style={styles.content_h2}>{localize("FUTURISTIC_CITY")}</Text>
                <Text style={styles.content_h6}>{localize("LEVEL_POINTS")}</Text>
              </View>
              <TouchableOpacity style={styles.topArrow} >
                <Image source={IMAGES.topArrow} style={styles.topArrowIcon} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        
      </SafeAreaWrapper>
    );
}


//Connect Everything
export default ProfileScreen;
