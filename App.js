import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import tradinghisory from "./screens/tradinghistory";
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            title: "",
            headerStyle: {
              backgroundColor: "#80deea",
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            title: "โปรไฟล์",
            headerStyle: {
              backgroundColor: "#80deea",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
            title: "สมัครสมาชิก",
            headerStyle: {
              backgroundColor: "#80deea",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            title: "เข้าสู่ระบบ",
            headerStyle: {
              backgroundColor: "#80deea",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;