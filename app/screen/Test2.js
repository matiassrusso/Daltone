import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import MyTextInput from '@components/MyTextInput'
import MyButton from '@components/MyButton'
import color from '@styles/Colors'
import { mainStyles, loginStyles } from '@styles/styles'



export default function App(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [imageIndex, setImageIndex] = useState(0)
  const [numeroElegido, setNumeroElegido] = useState(null)



  const url = "https://337e-2800-2147-f400-396-fcea-8132-d80-77b7.sa.ngrok.io/api/show-tests?type=allRecords"


  useEffect(() => {
    if (loading){

    
    fetch(url)
      .then(response => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
    }
    }, [loading])

    const loadImage = ()=> {setLoading(true)}
    
    function siguienteImagen(){
      if(imageIndex !== data.length - 1){
      setImageIndex(imageIndex + 1)
      }
      }
    
  return (
    
    <SafeAreaView>
      
      <ScrollView>
      <View style={[mainStyles.container, { padding: 25 }]}>
            <Text style={[mainStyles.btntxt, { color: color.BLACK, fontSize: 66, textAlign: 'left' }]}>Evaluacion</Text>
            <StatusBar backgroundColor={color.BLACK} translucent={true} />

          {
              data.length > 0 && 
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={{ uri: `data:image/jpg;base64,${data[imageIndex].img_testeo}` }}
                    style={{ width: 100, height: 100 }} />
                </View>
              
          }
          <MyTextInput keyboardType="number-pad" placeholder='Escriba el numero de arriba' image='user'/>
         {
          imageIndex !== data.length -1 ? 
          <MyButton
          titulo='Siguiente imagen'
          onPress={() => siguienteImagen()}/> : <MyButton
          titulo='Finalizar'
          onPress={() => goToScreen('Login')}/>
         }
        </View>
      </ScrollView>
    </SafeAreaView>




  )


function goToScreen(routeName) {
  props.navigation.navigate(routeName)
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});