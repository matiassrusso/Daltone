import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
const [data,setData] = useState([]);
const [loading,setLoading] = useState(true)

 const url = "https://3eea-181-95-43-12.sa.ngrok.io/api/show-tests?cantidad=3&type=allRecords"

 useEffect(()=>{
   fetch(url)
   .then(response => response.json())
   .then((json)=>setData(json))
   .catch((error)=>console.log(error))
   .finally(()=> setLoading(false))
 },[])
  return (
    <View style={styles.container}>
      {
        loading ? <Text>Loading ...</Text>:
        data.map((post)=>(
          <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{fontSize:15, color: 'black'}}>{post.path}</Text>
            <Text style={{fontSize:15, color:'black'}} >{post.id}</Text>
            <Text style={{fontSize:15, color:'black'}} >{post.num_corr}</Text>
            <Image source={{uri:`data:image/jpg;base64,${post.img_testeo}`}}
            style={{width:100, height:100}} />
          </View> 
          
        ))
        
      }
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});