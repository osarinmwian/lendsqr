import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Appbar, Searchbar } from 'react-native-paper'

const HomeScreen = () => {
  const[news, setNews] = useState([])
  const [isLoading, setIsLodding] = useState(true);
  const [filterData, setFilterData] = useState('');
  const [search, setSearch] = useState('');
  const fetch = require('node-fetch');
  const url = 'https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=Daily%20news&lang=en&sort_by=relevancy&page=1&media=True';
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a2bfa06f10msh4c03c1a59cfe822p197ab0jsne7609bd50fec',
    'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
        }
    };
  const fetchData = ( ) =>{
    fetch(url, options)
    .then(res => res.json())
    .then(res => {
      var data= res.articles
      setNews(data)
      console.log(data)
      setFilterData(data)
     
    }  
    )
    .catch(err => console.error('error:' + err));
  }
  useEffect(() => {
    fetchData()
    setTimeout( () => {
      setIsLodding()
    },3000);
  }, [])

  if (isLoading){
    return(
      <View style={{flex:1,justifyContent:"center", alignItem:"center" }}>
        <ActivityIndicator size="large"/></View>
    )
  } 
  const renderItem = ({ item }) => (
      <View style={styles.container}>
      <TouchableOpacity onPress={()=> alert(item.link)}>
      <Text style={styles.header}
      key={item.id}
      >{item.title} </Text>
      <Text style={styles.title}
      key={item.id}>{item.author} </Text>
      <Text style={styles.content}
      key={item.id}>{item.summary} </Text>
        </TouchableOpacity>
    </View> 
  );

  const searchFilter =(text) =>{
     if(text){
       const newData = filterData.filter((item) =>{
         const itemData = item.title ? 
         item.title.toUpperCase() : "" .toUpperCase();
         const textData = text.toUpperCase();
         return itemData.indexOf(textData) > -1;
       });
       setNews(newData)
       setSearch(text)
     } else{
       setFilterData(news)
       setSearch(text)
     }
  }
  
  return (
    <SafeAreaView>
      <View>
        <Appbar style={styles.appbar}>
          <Appbar.Content title="DAILY NEWS"/>
        </Appbar>
        <Searchbar
        placeholder='Search'
        value={search}
        onChangeText={(text) => searchFilter(text)}/>
      </View>
    <View>
    <FlatList
     data={news}
     renderItem ={renderItem}
     keyExtractor ={({id}) => id}
     />
     </View>
    </SafeAreaView>
  
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container:{
      backgroundColor:"#e1e8e3",
      marginTop:10,
      marginLeft:10,
      marginRight:10,
      borderRadius:10 
  },
  appbar:{
    backgroundColor:"#5175ae"  
  },
  header:{
  color:"black",
  fontSize:25,
  fontWeight:"600"
  },
  
  title:{
  color:"#3d3b3b",
  fontSize:18,
  fontWeight:"600"  
  },
  content: {
    color:"green",
    fontSize:15,
    fontWeight:"600" 
  } 
});
