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

  const varurl = "https://0dcc-181-85-50-196.sa.ngrok.io"

  useEffect(() => {
    if (loading) {


      fetch(`${varurl}/api/show-tests?type=allRecords`)
        .then(response => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
  }, [loading])

  const loadImage = () => { setLoading(true) }

  //Guardar en una variable el id

  //PROBAR ESTE LOOP EN VEZ DEL QUE YA USO
  /* 
  (rowData) => {
    let items = [];
    for (let i = 1; i <= 5; i++) {
        const key = 'image' + i;
        const uri = rowData[key];
        if (!uri) continue;
        items.push(<Image key={key} source={{uri: uri}} style={{width: 100, height: 100}} />);      
    }
    return <View>{items}</View>
}
  */

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

    fetch(`${varurl}/api/eval-test?usuario=1&imagen_id=${imageIndex+1}&num_ing=${num_usuario}&profile_id=Predeterminado`, {
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





    <View style={[mainStyles.container, {paddingTop:70}]}>

      <ScrollView>
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

         <View style={{ left:25}}>
          {
            imageIndex !== data.length - 1 ?

              //1. Guardar el input del numero ingresado
              //Llamar a la funcion "enviar datos" con 3 parametros: Usuario, ID, numero ingresado


              
              <MyButton
                titulo='Siguiente imagen'
                onPress={() => siguienteImagen(numeroElegido)} /> : <MyButton
                titulo='Finalizar'
                onPress={() => goToScreen('Resultados')} />
          }
          </View>

      </ScrollView>
      </View>




  )

  function goToScreen(routeName) {
    siguienteImagen(numeroElegido);
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