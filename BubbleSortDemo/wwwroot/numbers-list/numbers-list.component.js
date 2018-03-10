angular.module('numbersList').
    component('numbersList', {
        templateUrl: 'numbers-list/numbers-list.template.html',
        bindings: {
            numbers: '<',
            onFinish: '&',
        },
        controller: ['$timeout',
            function NumbersListController($timeout) {
                var self = this;

                function check(index) {
                    if (index < self.numbers.length - 1) {
                        if (self.numbers[index] < self.numbers[index + 1]) {
                            check(index + 1);
                        }
                        else {
                            $timeout(function () {
                                swap(index);
                                check(index + 1);
                            }, 1000);
                        }
                    }
                    else {
                        $timeout(function () {
                            self.onFinish({ currentList: self.numbers });
                        }, 500);
                    }
                }

                function swap(index) {
                    var temp = self.numbers[index];
                    self.numbers[index] = self.numbers[index + 1];
                    self.numbers[index + 1] = temp;
                }

                check(0);
            }
        ]
    });