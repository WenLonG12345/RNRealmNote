import { UpdateMode } from "realm";
import RealmInstance from "./index";

const RoomDao = {
  insertAll: (roomList) => {
    const realm = RealmInstance();

    realm.write(() => {
      realm.create('Room', room, UpdateMode.Modified);
    })
  },

  findAll: () => {
    const realm = RealmInstance();

    return realm.objects('Room');
  }
}

export default RoomDao;