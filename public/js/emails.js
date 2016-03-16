angular.module('emailService',[])

	.factory('emailOptions',['$http',function($http) {
		return {
			post : function() {
				return $http.post('/api/emails', form);
			}
		}
	}]);