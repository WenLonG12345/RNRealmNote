import { FlatList, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import RoomDao from './src/model/RoomDao'
import { RealmContext } from './src/model'

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
];

const { useQuery, RealmProvider } = RealmContext;

const App = () => {

  const roomList = useQuery('Room');

  const RoomRow = ({ room }) => {
    return (<View>
      <Text>{room.content}</Text>
    </View>)
  }

  // add new random value to db, and listener should update UI instantly
  const onAdd = () => {
    console.log("hello")
    const id = Math.floor((Math.random() * 100) + 1);
    const room = { id, content: `test${id}` }
    RoomDao.insert(room);
  }

  useEffect(() => {
    async function initData() {
      await RoomDao.insertAll(data);
    }

    initData();
  }, [])

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item) => item.id}
        data={roomList}
        renderItem={({ item, index }) => {
          return (
            <RoomRow room={item} />
          )
        }}
      />
      <TouchableOpacity onPress={onAdd}>
        <Text>Add New Room</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const AppWrapper = () => {
  return (
    <RealmProvider>
      <App/>
    </RealmProvider>
  )
}

export default AppWrapper
