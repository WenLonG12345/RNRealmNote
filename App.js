import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import RoomDao from './src/model/RoomDao'

const data = [
  { id: 1, content: 'test1' },
  { id: 2, content: 'test2' },
  { id: 3, content: 'test3' },
  { id: 4, content: 'test4' },
  { id: 5, content: 'test5' },
  { id: 6, content: 'test6' },
  { id: 7, content: 'test7' },
  { id: 8, content: 'test8' },
  { id: 9, content: 'test9' },
]

const App = () => {

  const [roomList, setRoomList] = useState();

  const RoomRow = ({ room }) => {
    <View>
      <Text>{room.content}</Text>
    </View>
  }

  const onAdd = () => {

  }

  useEffect(() => {
    // set initial value to useState
    setRoomList(data);

    // get latest data from db
    const dbRoom = RoomDao.findAll();
    setRoomList([...dbRoom]);

    try {
      // listen for db changes to update UI instantly
      dbRoom.addListener((roomList, changes) => {
        setRoomList([...dbRoom]);
      });
    } catch (err) {
      // throw error - Cannot create asynchronous query while in a write transaction
      console.error('listener error', err);
    }

    return () => dbRoom.removeAllListeners();
  }, [])


  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={roomList}
        renderItem={({ item, index }) => (
          <RoomRow room={item} />
        )}
      />
      <TouchableOpacity onPress={onAdd}>
        <Text>Add New Room</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App
