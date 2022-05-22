

import React from "react";
import { View , Text, StyleSheet , Image,SafeAreaView,StatusBar , Pressable , Linking } from 'react-native'

const colorGithub = '#010409'
const imageProfileGH = 'https://avatars.githubusercontent.com/u/26682838?v=4'
const colorFontGH = '#C9D1D9'
const colorDarkFontGH = '#4F565E'
const urlProfileGH = ' https://www.github.com/monteirocamis'


// teste
const rows = 6;
const cols = 13;
const marginHorizontal = 1;
const marginVertical = 1;
const width =  15;
const height = 15;


const App = () =>{

    const goToGH = async () =>{
      console.log( "verificando link ... ")
    const res =  await Linking.canOpenURL(urlProfileGH)

    if ( res ){
        console.log(" link aprovado ! carregando ... ")

        await Linking.openURL(urlProfileGH)
    }
    }


return (
    <SafeAreaView  style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle={'light-content'}/>
    <View  style={style.content}>
        <Image
         source={{uri: imageProfileGH}} 
         style={style.avatar}
         accessibilityLabel='camis olhando pra frente com fundo branco'/>
        <Text 
        style={[style.defaultText , style.title]}
        accessibilityLabel='nome camis nmonteiro'
        >
             Camis Monteiro
              </Text>

        <Text style={[style.defaultText , style.nickname]}
          accessibilityLabel='nickname monteirocamis'
          >
               monteirocamis 
               </Text>
        <Text style={[style.defaultText , style.font14 , style.marginBottom10]}
          accessibilityLabel=' Front-end , IoT Developer | Founder,Product owner @Codivas | Instructora @labenu'> 
          Front-end , IoT Developer | Founder, Product owner @Codivas | Instructor @labenu
           </Text>



                          {/* ------- 1 grid line ----------- */}

        <View style={stylesGrid.sectionContainer}>
            <View style={[stylesGrid.boxContainer , style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer , style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
      </View>


                          {/* ------- 2 grid line ----------- */}


      
      <View style={stylesGrid.sectionContainer}>
          <View style={[stylesGrid.boxContainer , style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer , style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
      </View>

                          {/* ------- 3 gridline ----------- */}


<View style={stylesGrid.sectionContainer}>
          <View style={[stylesGrid.boxContainer , style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer , style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
      </View>




                          {/* ------- 4 grid line ----------- */}




                          <View style={stylesGrid.sectionContainer}>
          <View style={[stylesGrid.boxContainer , style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer , style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
      </View>

                          {/* ------- 5 grid line ----------- */}

                          
<View style={stylesGrid.sectionContainer}>
          <View style={[stylesGrid.boxContainer , style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer , style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareLightGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
      </View>



                          {/* ------- 6 gridline ----------- */}

      
<View style={stylesGrid.sectionContainer}>
          <View style={[stylesGrid.boxContainer , style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer , style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
            <View style={[stylesGrid.boxContainer, style.squareDarkGreen]}><Text></Text></View>
      </View>
      


       <Pressable onPress={ goToGH }>

         <View >
                <Text  style={[style.button ]}>
                    Open in GitHub
                </Text>
            </View>

       </Pressable>
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

    title: {
    fontSize:24,
    fontWeight: 'bold',
    },

    nickname: {
    fontSize: 18,
    color: colorDarkFontGH,
  
    },

    font14: {
    fontSize: 14,
    },

    button: {
    backgroundColor: colorDarkFontGH,
    borderRadius: 50,
    padding: 20,
    marginTop: 20,
    fontWeight:'bold' ,
    fontSize: 16,
    color: colorFontGH,
    justifyContent:"center",
    alignContent:"center",
    },

    squareDarkGreen: {
    backgroundColor: '#005E00' ,
    borderRadius: 8 ,
    width:20,
    height: 20,

    },
    squareLightGreen: {
    backgroundColor: '#249624' ,
    borderRadius: 8 ,
    width:20,
    height: 20,
    },
    marginBottom10: {
        marginBottom: 10,
    }

})


const stylesGrid = StyleSheet.create({
    scrollContainer: {
      flex: 1,
   
    },
    sectionContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      
    },
    boxContainer: {
        marginTop: marginVertical,
        marginBottom: marginVertical,
      marginLeft: marginHorizontal,
      marginRight: marginHorizontal,
      width: width,
      height: height,
        backgroundColor: 'gold',
    },
  });
