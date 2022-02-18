import { UpdateMode } from "realm";
import {RealmInstance} from "./index";

const RoomDao = {
  insertAll: async (roomList) => {
    const realm = await RealmInstance();

    realm.write(() => {
      roomList.map((room) => {
        realm.create('Room', room, UpdateMode.Modified);
      })
    })
  },

  findAll: () => {
    const realm = RealmInstance();

    return realm.objects('Room');
  },

  insert: async (room) => {
    const realm = await RealmInstance();

    realm.write(() => {
      realm.create('Room', room, UpdateMode.Modified);
    })
  }
}

export default RoomDao;