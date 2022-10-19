import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {  
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS xkasjnxkjasx askxjnaskjxa sxkjasnxkjasx askjxnaksjx asjxnakjsx asxkjansxkjas xakjsxnakjsx askjxakjsxnas xkajsxnkjasnx ', code: '#7f8c8d' },
  ]);    
  const [active,setActive] = React.useState(0);
  function prev(){
    if(items.length-1 === active){
      return setActive(0)
    }    
    setActive(active+1)    
    
  }
  function next(){
    if(items.length-1 === active){
      return setActive(0)
    }    
    setActive(active-1)        
  }
  return (
    <View style={[styles.container, {      
      flexDirection: "row"
    }]}>
      <View style={{ flex: .5,justifyContent:'center'}} >
        <Text style={[styles.all,styles.bt]} onPress={prev}>&larr;</Text>
      </View>
      <View style={{ flex: 5,justifyContent:'center',backgroundColor:items[active].code }} >
      <Text style={[styles.all,styles.another]}>{items[active].name}</Text>
      </View>
      <View style={{ flex: .5 ,justifyContent:'center' }} >        
        <Text style={[styles.all,styles.bt]} onPress={active==0 ?()=> setActive(0): next}>&rarr;</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },all:{
    textAlign:'center',
    fontSize:50,

    
  },another:{
    fontSize:20,    
  },
  bt:{
    backgroundColor:"red",
  }
});
