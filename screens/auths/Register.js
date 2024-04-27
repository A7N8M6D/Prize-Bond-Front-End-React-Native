import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import InputBox from "../../component/Forms/InputBox";
import SubmitButton from "../../component/Forms/SubmitButton";
import { ApiBackend } from "../../utils/Backend.Api";
import axios from "axios";
const Register = ({navigation}) => {
  const [fullname, setFullName] = useState("");
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [Location, setLocation] = useState("");
  const [number, setNumber] = useState("");
  const [username, setUSerName] = useState("");
  const [loading, setLoading]=useState(false)

  const handleSubmit = async()=>{
   try{
    setLoading(true)
      if(!fullname || !email || !password || !Location || !number || !username)
      {
        Alert.alert(" PLease Fill All Fields")
        setLoading(false);
        return;
      }
      setLoading(false)
      const dataa={
        fullname:fullname,
        email:email,
        Location:Location,
        number:number,
        password:password,
        username:username,
        userType:"user"
      }
      console.log("Enter Data",{fullname , email , password, Location , number , username})
      console.log("Object Data",dataa)
      try{
          const res= await axios.post( "https://prize-bond-backend.vercel.app/api/v1/users/register", dataa)
       // const res=ApiBackend({ methode:"post" ,route:"users",endpoint:"register",data:dataa })
        console.log("Registered Successfully",res);

      }catch(Error)
      {
        console.log(Error,"while requesting")
      }
   }catch(error)
   {
          setLoading(false)
        console.log(error)
   } 
  }
  return (
    <View style={styles.container}>
      <Text style={styles.PageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <InputBox
          inputTitle={"FullName"}
          value={fullname}
          setValue={setFullName}
        />
        <InputBox
          inputTitle={"username"}
          value={username}
          setValue={setUSerName}
        />
        <InputBox
          inputTitle={"E Mail"}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEMail}
        />
        <InputBox
          inputTitle={"Phone Number"}
          value={number}
          setValue={setNumber}
        />
        <InputBox
          inputTitle={"Location"}
          value={Location}
          setValue={setLocation}
        />
        <InputBox
          inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      <SubmitButton btnTitle="Register" loading={loading} handleSubmit={handleSubmit}/>
      <Text style={styles.LinkText}>Already Register Please<Text style={styles.Link} onPress={()=>navigation.navigate("Login")}>Login</Text> </Text>
      <View>
        {/* <Text>{JSON.stringify({fullname , email ,Location ,password,number,username},null,4)} </Text> */}
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
    // borderRadius: 10,
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
  LinkText:{
    textAlign:"center",
  
  },
  Link:{
    color:"red"
  }
});
export default Register;
