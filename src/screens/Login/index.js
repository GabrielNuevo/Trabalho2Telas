import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Container, InputForm, Button, ContIcons } from "../../components/Global";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/header";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

export default function Login() {

    return (
        <>
          <Header name="Connect Outlook"/>
          <Container>
            <ContIcons>
              <Icon size={22} color="lightgray" name="square" style={{marginHorizontal: 10}} />
              <Image source={require("../../../assets/cloudIcon.jfif")}
                style={{
                  width: 22, height: 22, marginHorizontal: 10
                }} 
              />
              <Image source={require("../../../assets/OutlookIcon.x3m-kAy9cD_H_6nWXY7-AAAAAA")}
                style={{
                  width: 22, height: 22, marginHorizontal: 10
                }} />
              <Image source={require("../../../assets/IconMicrosoft.jfif")}
                style={{
                  width: 50, height: 50
                }} 
              />
              <Image source={require("../../../assets/xboxIcon.jfif")}
                style={{
                  width: 20, height: 20, marginHorizontal: 10
                }} 
              />
              <Icon size={22} color="lightgray" name="logo-skype" style={{marginHorizontal: 10}} />
              <Image source={require("../../../assets/DriveIcon.png")}
                style={{
                  width: 22, height: 22, marginHorizontal: 10
                }} 
              />
            </ContIcons>
            <Text style={{ marginBottom: 40, marginTop: 24 , fontSize: 40, color: "gray", fontWeight: 100 }}>Sign in</Text>
            <Text style={{ fontWeight: 500, marginBottom: 5 }}>Use your microsoft account.</Text>
            <Text style={{ color: '#298fca', paddingBottom: 20, marginBottom: 20 }}>What's this?</Text>
            <InputForm placeholder="Email" placeholderTextColor="#616161" style={{ marginBottom: 12 }}/>
            <InputForm placeholder="Password" placeholderTextColor="#616161" style={{ marginBottom: 12 }}/>
            <Button >
              <Text style={{ color: "#f1f1f1" }}>Sign in</Text>
            </Button>
        
            <View style={{flexDirection:"row", marginBottom: 60}}>
              <View>
                <Text style={{justifyContent: 'flex-start', marginTop: 4}}>No account? </Text>
              </View>
              <View>
                <Text style={{justifyContent: 'flex-end', color: '#298fca', marginTop: 4}}>Create one!</Text>
              </View>
            </View>

            <Text style={{ color: '#298fca', paddingBottom: 20 }}>Forgot my password</Text>
       
          </Container>
          <StatusBar style="" />
        </>
    )
}