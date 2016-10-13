angular.module("myChats").controller("mainCtrl", function($scope, mainSrvc, $interval){

  $scope.chatAppName = "Name my chatapp";

  //Dummy data to show what the chat messages should look like
  // to work with the frontend
  // TODO Remove once server is integrated;
  $scope.chats = [{
    screenname:"Mr Wiggles",
    message:"I canz sit still"
  },{
    screenname:"Mr Loud",
    message:"I canz use my inside voice"
  },{
    screenname:"Mr Author",
    message:"I canz write childrenz books"
  }]

  $scope.addChat = function(chatmessage){
    // TODO Call service to add chats
    mainSrvc.addChats(chatmessage)
  }

  function getChats(){
    // TODO Tell service to get chats
    mainSrvc.getChats()
    .then(function (serverchats) {
      $scope.chats = serverchats
    })
  }

  $scope.deleteChats = function(){
    // TODO Tell service to delete all chats
  }

  // Gets initial chats
  getChats();

  // Set up repeating call to get chats
  $interval(getChats, 3000);

  $scope.setScreenname = function (screenname) { //screename is passed in when set screename button on http is pushed passing in the name given
    mainSrvc.setScreenname(screenname)
  }

})
