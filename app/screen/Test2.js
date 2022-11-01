import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import MyTextInput from '@components/MyTextInput'
import MyButton from '@components/MyButton'
import color from '@styles/Colors'
import { mainStyles, loginStyles } from '@styles/styles'



export default function App(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [imageIndex, setImageIndex] = useState(0)
  const [numeroElegido, setNumeroElegido] = useState(null)
  // const [numerosElegidos, setNumerosElegidos] = useState([]);

  const numImagen = 0




  const url = "https://3a1c-181-12-251-211.sa.ngrok.io/api/show-tests?type=allRecords"


  useEffect(() => {
    if (loading) {


      fetch(url)
        .then(response => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
  }, [loading])

  const loadImage = () => { setLoading(true) }

  //Guardar en una variable el id

  function siguienteImagen(num_usuario) {
    enviarDatos(num_usuario)
    if (imageIndex !== data.length - 1) {
      setImageIndex(imageIndex + 1)
      //setNumerosElegidos.p(numeroElegido)
      // numImagen = imageIndex + 1
      setNumeroElegido(null)
    }
  }
  function enviarDatos(num_usuario) {

    //Tiene que recibir 3 parametros
    //fetch('https://b8af-181-12-251-211.sa.ngrok.io/api/eval-test?usuario=1&imagen_id=4(<== aca hay que concatenar) &num_ing=7(<== aca tmb)'
    //Tengo que hacer que sean variables. Que cambien segun lo que se lea.

    //setNumerosElegidos.push(numeroElegido)
    console.log(numeroElegido);

    fetch(`https://3a1c-181-12-251-211.sa.ngrok.io/api/eval-test?usuario=1&imagen_id=${imageIndex}&num_ing=${num_usuario}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    }).then((response) =>
      response.json()
    ).then((data) => {
      // Recibo si contesto bien o no
      console.log(data);
    })
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

            //Hacer un if para comparar el numero ingresado con el numero correcto, haciendolo como esta aca arriba.

          }
          <MyTextInput onChangeText={(text) => setNumeroElegido(text)} keyboardType="number-pad" placeholder='Escriba el numero de arriba' image='user' />

          {/* enviarDatos(setNumeroElegido) */}

          {
            imageIndex !== data.length - 1 ?

              //1. Guardar el input del numero ingresado
              //Llamar a la funcion "enviar datos" con 3 parametros: Usuario, ID, numero ingresado



              <MyButton
                titulo='Siguiente imagen'
                onPress={() => siguienteImagen(numeroElegido)} /> : <MyButton
                titulo='Finalizar'
                onPress={() => goToScreen('Login')} />
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