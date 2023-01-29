angular.module("bicas", []);
angular.module("bicas").controller("bicasCtrl", ['$scope', function ($scope) {

    //- DATA -----------------------------------------------------------------------------------------------------------
    
    $scope.partialSelectorInHall = true;
    $scope.partialSelectorInLobby = false;
    $scope.partialSelectorInLounge = false;

    $scope.player = null;
    // player obj: nick, sessionCode
    $scope.session = null;
    // session obj: sessionCode, players

    //- FUNCTIONS ------------------------------------------------------------------------------------------------------

    // PARTIAL CONTROL METHODS

    $scope.showHall = function () {
        $scope.partialSelectorInHall = true;
        $scope.partialSelectorInLobby = false;
        $scope.partialSelectorInLounge = false;
    }

    $scope.showLobby = function () {
        $scope.partialSelectorInHall = false;
        $scope.partialSelectorInLobby = true;
        $scope.partialSelectorInLounge = false;
    }

    $scope.showLounge = function () {
        $scope.partialSelectorInHall = false;
        $scope.partialSelectorInLobby = false;
        $scope.partialSelectorInLounge = true;
    }

    // HALL CONTROL METHODS

    $scope.hallStageCreateNickPlayer = function (playerParams) {
        $scope.player = $scope.hallStageCreatePlayerObjSessionNull(angular.copy(playerParams));
        delete playerParams;
        $scope.showLobby();
    }

    $scope.hallStageCreatePlayerObjSessionNull = function (playerParam) {
        return { nick: playerParam.nick.toLowerCase(), session: "" };
    }

    // LOBBY CONTROL METHODS

    $scope.lobbyStageCreateSession = function () {
        $scope.session = $scope.lobbyStageCreateSessionObjWhenCreate();
        $scope.showLounge();
    }

    $scope.lobbyStageCreateSessionObjWhenCreate = function () {
        return { session: "testcode", players: $scope.player.nick };
    }

    // LOUNGE CONTROL METHODS


    
    //------------------------------------------------------------------------------------------------------------------
}]);