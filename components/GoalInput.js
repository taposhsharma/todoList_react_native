import { useState } from 'react'
import {TextInput,Button,StyleSheet,View,Modal} from 'react-native'


const GoalInput = ({visible,setTodo,onAdd}) => {
    const [goalInput,setGoalInput] = useState('')
    
    const onAddHandler = () =>{
   setTodo(goalInput)
   onAdd(goalInput)
    }


    return <Modal visible={visible} animationType='slide'>
     <View style={styles.container}>
        <TextInput style={styles.textConatainer} placeholder='Enter your task' onChangeText={task=>setGoalInput(task)}  />

        <Button  title='Add Task' onPress={onAddHandler} />
    </View>
    </Modal>
   
}



const styles = StyleSheet.create({
    container:{
        flex:1,
   
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textConatainer:{
        
        borderColor:"red",
        borderWidth:2,
        alignItems:'center',
        width:'50%',
        paddingLeft:10,
        marginBottom:10    }
})


export default GoalInput