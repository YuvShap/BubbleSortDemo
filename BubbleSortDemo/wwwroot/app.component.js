angular.module('bubbleSortDemo').
    component('app', {
        templateUrl: 'app.template.html',
        controller: [
            function AppController() {
                var self = this;
                self.sorted = false;
                self.numbersLists = [];

                self.sortCurrentList = function (currentList) {
                    if (!isNumbersSorted(currentList)) {
                        self.numbersLists.push(angular.copy(currentList));
                    }
                    else {
                        self.sorted = true;
                    }
                }

                function isNumbersSorted(numbers) {
                    for (var i = 0; i < numbers.length - 1; i++) {
                        if (numbers[i] > numbers[i + 1]) {
                            return false
                        }
                    }
                    return true;
                }

                self.numbersLists.push([2, 9, 5, 3, 6, 7, 1, 4, 8]);

            }
        ]
    });