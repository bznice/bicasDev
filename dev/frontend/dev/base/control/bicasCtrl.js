angular.module("bicas", []);
angular.module("bicas").controller("bicasCtrl", ['$scope', function ($scope) {

    //- DATA -----------------------------------------------------------------------------------------------------------
    
    $scope.partialSelectorInHall = true;
    $scope.partialSelectorInLobby = false;
    $scope.partialSelectorInLounge = false;

    $scope.player = null;
    //- FUNCTIONS ------------------------------------------------------------------------------------------------------

    // PARTIAL CONTROL METHODS
    $scope.goToHall = function () {
        $scope.partialSelectorInHall = true;
        $scope.partialSelectorInLobby = false;
        $scope.partialSelectorInLounge = false;
    }

    $scope.goToLobby = function () {
        $scope.partialSelectorInHall = false;
        $scope.partialSelectorInLobby = true;
        $scope.partialSelectorInLounge = false;
    }

    $scope.goToLounge = function () {
        $scope.partialSelectorInHall = false;
        $scope.partialSelectorInLobby = false;
        $scope.partialSelectorInLounge = true;
    }

    // HALL CONTROL METHODS
    $scope.hallStageCreatePlayer = function (playerParam) {
        $scope.player = $scope.hallStageConfigPlayerNotInSession(angular.copy(playerParam));
        delete playerParam;
        $scope.goToLobby();
    }

    $scope.hallStageConfigPlayerNotInSession = function (playerParam) {
        return { nick: playerParam.nick.toLowerCase(), sessionCode: "" };
    }

    // LOBBY CONTROL METHODS

    // LOUNGE CONTROL METHODS
    
    //------------------------------------------------------------------------------------------------------------------
}]);