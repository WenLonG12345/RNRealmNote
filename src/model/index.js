import Realm from 'realm';

export const RoomSchema = {
  name: 'Room',
  primaryKey: 'id',
  properties: {
    content: 'string?',
    id: 'string',
  },
};

const RealmInstance = () => new Realm({
  schema: [
    RoomSchema,
  ],
  schemaVersion: 1,
  deleteRealmIfMigrationNeeded: true
});

export default RealmInstance;