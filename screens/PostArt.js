import React, {Component} from 'react';
import {
  View, 
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput
} from "react-native"

import {RFValue} from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

export default class PostArt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage: "image_1",
      dropdownHeight: 40
    };
  }

  componentDidMount() {

  }

  render() {
    let preview_images = {
      image_1: require("../assets/image_1.png"),
      image_2: require("../assets/image_2.png"),
      image_3: require("../assets/image_3.png"),
      image_4: require("../assets/image_4.png"),
      image_5: require("../assets/image_5.png"),
      image_6: require("../assets/image_6.png"),
      image_7: require("../assets/image_7.png")
    };
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style = {styles.appTitle}>
          <View style = {styles.appIcon}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.iconImage}
            ></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Post Art</Text>
          </View>
        </View>
          <View style={styles.fieldContainer}>
            <ScrollView>
              <Image 
                source={preview_images[this.state.previewImage]}
                style={styles.previewImage}
              ></Image>
              <View style={{height: RFValue(this.state.dropdownHeight)}}>
                <DropDownPicker
                  items={[
                    {label: "Image 1", value: "image_1"},
                    {label: "Image 2", value: "image_2"},
                    {label: "Image 3", value: "image_3"},
                    {label: "Image 4", value: "image_4"},
                    {label: "Image 5", value: "image_5"},
                    {label: "Image 6", value: "image_6"},
                    {label: "Image 7", value: "image_7"},
                  ]}
                  defaultValue={this.state.previewImage}
                  containerStyle={{
                    height: 40,
                    borderRadius: 20,
                    marginBottom: 10
                  }}
                  onOpen={() => {
                    this.setState({dropdownHeight: 170});
                  }}
                  onClose={() => {
                    this.setState({dropdownHeight: 40});
                  }}
                  style={{backgroundColor: "transparent"}}
                  itemStyle={{
                    justifyContent: "flex-start"
                  }}
                  dropDownStyle={{backgroundColor: "#2a2a2a"}}
                  labelStyle={{
                    color: "white"
                  }}
                  arrowStyle={{
                    color: "white"
                  }}
                  onChangeItem={item =>
                    this.setState({
                      previewImage: item.value
                    })
                  }
                />
              </View>

              <TextInput
                style={styles.inputFont}
                onChangeText={caption => this.setState({caption})}
                placeholder={"Caption"}
                placeholderTextColor="white"
              />

              <TextInput
                style={styles.inputFont}
                onChangeText={caption => this.setState({caption})}
                placeholder={"Link"}
                placeholderTextColor="white"
              />
            </ScrollView>
          </View>
          <View style={{flex: 0.08}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Comic Sans MS, Comic Sans, cursive"
  },
  fieldContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Comic Sans MS, Comic Sans, cursive"
  }
})
