import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const SubmitButton = ({handleSubmit,btnTitle ,Loading}) => {
  return (
    <TouchableOpacity style={styles.SubmitBtn} onPress={handleSubmit}>

        <Text style={styles.btnText}>{Loading?"Please Wait":btnTitle}</Text>
    </TouchableOpacity>

  )
}
const styles=StyleSheet.create(
    {
        SubmitBtn:{
            backgroundColor:"blue",
            height:50,
            marginHorizontal:20,
            // borderRadius:"center",
            justifyContent:"center",
             marginBottom:20,                    
        },
        btnText:{
            color:"white",
            textAlign:"center",
            fontSize:24,
            fontWeight:"400",
        }
    }
)
export default SubmitButton