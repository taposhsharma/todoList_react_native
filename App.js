
import { useState } from 'react';
import { StyleSheet, Text, View , TextInput,Button, Pressable, FlatList} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { ToastAndroid } from 'react-native';


const  App=()=> {

  const [todo,setTodo] = useState('')
  const [taskList,setTaskList] = useState([])
  const [isAddMode,setIsAddMode] = useState(false)
  

  const onPressHandler =(task)=>{
    let newArr = [...taskList]
    
    newArr.push({id:Math.random()*100+'--'+Math.random()*20,value:task})
    
    setTaskList(newArr)
    console.log(taskList)
    setIsAddMode(false)

  }


  const onDeleteHandler =(id)=>{
    const newArr = taskList.filter(task=>task.id!==id)
    setTaskList(newArr)

  }

  const changeVisiblity =()=>{
    setIsAddMode(true)
  }


  return (<View style={styles.screen} >

    <Button title="Add New Task" onPress={changeVisiblity} />
  <GoalInput visible={isAddMode} setTodo={setTodo} onAdd={onPressHandler}/>
  
  <FlatList
  data={taskList}
  renderItem={(item)=><GoalItem val={item.item} onDel={onDeleteHandler}/>}/>
 
  </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    padding:50 
  }
});



export default App
