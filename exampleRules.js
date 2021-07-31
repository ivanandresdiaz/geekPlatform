function isChatMessage(message){
  return message.size() == 4 
  && message.username is string
  && message.userId is string
  && message.createdAt is timestamp
  && message.messageText is string
  && message.messageText.size() <= 160;
}

function isUser (user){
  return user.size() ==1
  && (user.role == 'editor' || user.role == 'reader')
}

function isAdminUser(user){
  return user.size() ==1
  &&user.role == 'admin' 
}

service cloud.firestore{
  match / databases / {database}/documents {
    match /rooms / {roomId}{
      function getRoleForUser(userId){
        return get(/databases/$(database)/documents/rooms/$(roomId)/users/$(userId)).data.role
      }
      function roomExist (roomId){
        return exists(/databases/$(database)/documents/rooms/$(roomId));
      }
      match /messages / {messageId}{
        allow create : if isChatMessage(request.resource.data)
                      && request.resource.data.userId == request.auth.uid
                      &&getRoleForUser(request.auth.uid)== 'editor';
                      // request.resource.data == messageId
        allow get, list : if getRoleForUser(request.auth.uid) in ['editor', 'reader'];
      }
      // match /users/{userId}{
      //   allow create : if isUser(request.resource.data)
      // }
      match /users/{userId}{
       allow create : if (!roomExist(roomId)
       &&request.auth.uid == userId
       &&isAdminUser(request.resource.data))
       || (getRoleForUser(request.auth.uid)== 'admin'
       && request.auth.uid =! userId
       && isUser(request.resource)
       )
       )
      }
    }
  }
}