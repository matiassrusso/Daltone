import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import MyTextInput from '@components/MyTextInput'
import MyButton from '@components/MyButton'
import color from '@styles/Colors'
import { mainStyles, loginStyles } from '@styles/styles'



export default function App(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  const url = "https://1457-181-12-251-211.sa.ngrok.io/show-tests?cantidad=3&type=allRecords"

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={[mainStyles.container, { padding: 25 }]}>
            <Text style={[mainStyles.btntxt, { color: color.BLACK, fontSize: 66, textAlign: 'left' }]}>Evaluacion</Text>
            <StatusBar backgroundColor={color.BLACK} translucent={true} />

          {
              data.map((post) => (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={{ uri: `data:image/jpg;base64,${post.img_testeo}` }}
                    style={{ width: 100, height: 100 }} />
                </View>

              ))
              
          }
          <MyTextInput keyboardType="number-pad" placeholder='Escriba el numero de arriba' image='user'/>
            <MyButton
                titulo='Siguiente imagen'
                onPress={() => goToScreen('Test')}/>
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