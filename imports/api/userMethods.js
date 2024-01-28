import { Mongo } from 'meteor/mongo';

export const UserCollection = new Mongo.Collection('UserTable');
Meteor.methods({
    'tasks.insert'(text) {
      check(text, String);
  
      if (!this.userId) {
        throw new Meteor.Error('Not authorized.');
      }
  
      TasksCollection.insert({
        text,
        createdAt: new Date(),
        userId: this.userId,
      });
    },
})