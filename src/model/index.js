import { createRealmContext } from '@realm/react';
import Realm from 'realm';

export const RoomSchema = {
  name: 'Room',
  primaryKey: 'id',
  properties: {
    content: 'string?',
    id: 'int',
  },
};

const config = {
  schema: [
    RoomSchema,
  ],
  schemaVersion: 1,
  deleteRealmIfMigrationNeeded: true
}

const RealmInstance = async() => Realm.open(config);

const RealmContext = createRealmContext(config);

export {RealmInstance, RealmContext};
