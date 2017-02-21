(function () {
    'use strict';

    ToDoController.$inject = ['$scope'];
    function ToDoController($scope) {
        var _this = this;
        _this.github = '';
        $scope.test = "My test app";
    }

    module.exports = ToDoController;
})();
