angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    //TODO Call server to get the chats
    return $http({
      url:"/api/chats",
      method: "GET"
    }).then(function (response) {
      if(response.status === 200) {
        return response.data; //response.data is the chats array from getchats in chatCrl.js
        
      }
    })
  }

  this.addChats = function(chat){
    //TODO Call server to add to chats
    return $http({
      url:"/api/chats",
      method: "POST",
      data: {
        message:chat //chat from param ^
      }
    })
  }

  this.deleteChats = function(){
    //TODO Call server to whipe all the chats
  }

  this.setScreenname = function (screenname) {
    return $http({
      url:"/api/screenname",  // comes from server.js app.post for screenname
      method: "POST",         // see ^
      data: {name: screenname} // goes in body
    })
  }
});
