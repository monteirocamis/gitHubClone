import React from "react";
import { View , Text, StyleSheet , Image,SafeAreaView,StatusBar  } from 'react-native'
 
const colorGithub = '#010409'
const imageProfileGH = 'https://avatars.githubusercontent.com/u/26682838?v=4'
const colorFontGH = '#C9D1D9'
const colorDarkFontGH = '#4F565E'

const App = () =>{
    return (
        <SafeAreaView  style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle={'light-content'}/>
        <View  style={style.content}>
            <Image
             source={{uri: imageProfileGH}} 
             style={style.avatar}
             accessibilityLabel='camis olhando pra frente com fundo branco'/>
            <Text style={[style.defaultText , style.name]}> Camis Monteiro </Text>
            <Text style={[style.defaultText , style.nickname]}>monteirocamis </Text>
            <Text style={style.defaultText}> Front-end , IoT Developer | Founder @Codivas | Instructor @labenu </Text>
           
        </View>
        </SafeAreaView>
     )
}

export default App

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent:"center",
    },
    content: {
        alignItems:"center",
        padding:40,
    },
    defaultText: {
        color: colorFontGH
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth:2,
    },
    name: {
        fontSize:24,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGH
    },
    decription: {
        fontSize: 14,
    }


})