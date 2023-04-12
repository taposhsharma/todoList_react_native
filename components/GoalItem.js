import { View,Text,StyleSheet, Pressable } from "react-native"

const GoalItem = ({val,onDel})=>{
    console.log(val)

    return <View style={styles.container}>
        <Pressable onPress={()=>onDel(val.id)}>
        <Text style={styles.textContainer}>{val.value}</Text>
        </Pressable>
    </View>

}


export default GoalItem

const styles = StyleSheet.create({
    container: {
   
     
    },
  
    textContainer:{
   
      borderWidth:2,
      paddingHorizontal:70,
      paddingVertical:10,
      margin:10
  
    }
  });
  