import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import InputBox from "../../component/Forms/InputBox";
import SubmitButton from "../../component/Forms/SubmitButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
const Login = ({ navigation }) => {
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading , setLoading]=useState("")
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert(" PLease Fill All Fields");
        setLoading(false);
        return;
      }
      setLoading(false);
      const dataa={
        email:email,
        password:password
      }
      try{
        const res= await axios.post( "https://prize-bond-backend.vercel.app/api/v1/users/login", dataa)
     // const res=ApiBackend({ methode:"post" ,route:"users",endpoint:"register",data:dataa })
      console.log("Registered Successfully",res.data.data.user);
      try {
        await AsyncStorage.setItem('userData', JSON.stringify(res.data.data.user));
        console.log('User data stored successfully');
      } catch (error) {
        console.log('Error storing user data:', error);
      }
      
      // Retrieving the user data from AsyncStorage
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData !== null) {
          console.log('User data retrieved successfully:', JSON.parse(userData));
        } else {
          console.log('No user data found');
        }
      } catch (error) {
        console.log('Error retrieving user data:', error);
      }
    }catch(Error)
    {
      console.log(Error,"while requesting")
    }
      console.log("Login Data", { email, password });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.PageTitle}>Login</Text>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <InputBox
          inputTitle={"E Mail"}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEMail}
        />

        <InputBox
          inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      <SubmitButton
        btnTitle="Login"
        loading={Loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.LinkText}>
        Not a User Please
        <Text
          style={styles.Link}
          onPress={() => navigation.navigate("Register")}
        >
          Reagister
        </Text>{" "}
      </Text>
      <View>
        {/* <Text>
          {JSON.stringify(
            {  email, password },
            null,
            4
          )}{" "}
        </Text> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e1d5c9",
  },
  inputBox: {
    //    fontSize:20,
    height: 40,
    backgroundColor: "white",
    // boer: 10,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "black",
  },
  PageTitle: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: "blue",
  },
  LinkText: {
    textAlign: "center",
  },
  Link: {
    color: "red",
  },
});

export default Login;
