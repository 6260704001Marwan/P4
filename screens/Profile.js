import React, { useState, useEffect } from "react";
import { Text, View, Button,StyleSheet,TouchableHighlight, } from "react-native";
const Profile=({ route, navigation })=> {
const [user, setUser] = useState("");
useEffect(() => {
fetch("http://mgt2.pnu.ac.th/6260704001/react/profile.php" +route.params.Email)
.then((response) => response.json())
.then((json) => setUser(json))
.catch((error) => console.error(error));
}, []);
console.log(user);
return (
<View >
        <View>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => navigation.navigate("Home")}
            underlayColor="#80deea">
            <Text style={styles.submitText}>หน้าหลัก</Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => navigation.navigate("trading history")}
            underlayColor="#80deea">
            <Text style={styles.submitText}>ประวัติซื้อขาย</Text>
          </TouchableHighlight>
        </View>
</View>
);
}
const styles = StyleSheet.create({
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
      },
})


export default Profile;