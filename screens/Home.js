import React from "react";
import {StyleSheet, Text, View, Button, SafeAreaView, TouchableHighlight, Image, ImageBackground} from "react-native";
const Home = ({ navigation }) => {
  return (
    <ImageBackground source={require('../im/bg1.jpg')}style={{width: '100%', height: '100%', }}>
      <View style={{ justifyContent: "center" }}>
       <Image source={require('../im/bg2.png')} style={styles.logoImage}></Image>
      <View>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => navigation.navigate("Login")}
            underlayColor="#80deea"
          >
            <Text style={styles.submitText}>เข้าสู่ระบบ</Text>
          </TouchableHighlight>
        </View>
        <Text></Text>
        <View>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => navigation.navigate("Register")}
            underlayColor="#80deea"
          >
            <Text style={styles.submitText}>สมัครสมาชิก</Text>
          </TouchableHighlight>
        </View>
      </View>
      </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
   borderColor: "#fff",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },
  submitText: {
    paddingTop: 15,
    paddingBottom: 15,
    color: "#000000",
    fontSize: 22,
    //fontStyle: "Garuda Book",
    textAlign: "center",
    backgroundColor: "#80deea",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffff",
  },
  headertitle:{
    flexDirection: 'row',
  },
 logoImage:{
    width:150,
    height:150,
    alignItems: 'center',
    alignContent:'center',
    marginHorizontal: 20,
    marginBottom: 10,
    marginRight: 100,
    marginLeft: 100,
    marginTop: 10,

  },
});
export default Home;