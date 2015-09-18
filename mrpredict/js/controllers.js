angular.module('starter.controllers', [])

.controller('AppController', function($scope,$http) {
        url = 'http://api.football-data.org/alpha/'
        urlS = 'http://api.football-data.org/alpha/soccerseasons/'
        urlSs = 'http://api.football-data.org/alpha/soccerseasons'

        
      /*$http.post($rootScope.URL, {params: arguments}, {headers: {
                  "Access-Control-Allow-Origin" : "*",
                  "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
                  "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
              }
            })
      */ 


       $scope.getIdn = function(urll){
                str = urll.split("/");
                str = ((str[5]));

                return str;

                /* 
                 $http
                 .get( 'http://api.football-data.org/alpha/teams/'+str1 , {cache: true})
                  .then(function(response) {
                          $scope.crest = response.data;
                          return $scope.crest
                     })  
                        */
                     }

      $scope.getFlag = function(urll,funct){

          teamdata = 'http://api.football-data.org/alpha/teams/'+ funct(urll);

          $http
                 .get( teamdata , {cache: true})
                  .then(function(response) {
                         console.log (response.data.crestUrl);
                        
                     })  

      }


})

.controller('LoginController', function($scope,$location) {
      $scope.username = ''
      $scope.password = ''

    $scope.loginCheck = function(){
      if($scope.username == 'admin' && $scope.password =='master'){
         $location.path("/table");
      }
      else{
         $scope.notification = 'wrong credentials'
      }
    }

})

.controller('HomeController', function($scope,$http,$filter) {

      
    


})


.controller('AboutController', function($scope,$http) {
  $scope.leagues = [];
  id= 351;

     $http
          .get( urlS+id+'/fixtures?matchday=1', {cache: true})
          .then(function(response) {
              $scope.leagues = response.data.fixtures;
        })

     $http
          .get( urlS+id+'/leagueTable ', {cache: true})
          .then(function(response) {
              mDay = response.data.matchday;

           while (mDay > 0){
                 $http.get( urlS+id+'/fixtures?matchday='+mDay, {cache: true})
                        .then(function(response) {
                            $scope.teams = response.data.fixtures
                            
                             })




                mDay= mDay - 1
              }


        })







      
    

})

.controller('LeaguesCtrl', function($scope,$http) {



})

.controller('LeagueListCtrl', function($scope,$http) {
    $scope.teams = [];

   $http
      .get( 'http://api.football-data.org/alpha/soccerseasons/' +$stateParams.leagueId+
 '/teams/ ', {cache: true})
      .then(function(response) {
         /* console.log(response);
        return response.data.results;*/
          $scope.teams = response.data;
      });
 })


.controller('LeagueFixturesCtrl', function($scope,$http) {
    $scope.fixtures = [];
   $http
      .get( 'http://api.football-data.org/alpha/soccerseasons/' +$stateParams.leagueId+
'/fixtures/ ', {cache: true})
      .then(function(response) {
          /* return response.data.results;*/
          $scope.fixtures  = response.data;
      });
})



.controller('Bundesliga1Controller', function($scope,$http) {
       var id = 354
         $http.get(urlS,{cache: true}).then(function(response) {
                  $http
                            $scope.leagueList = []
                            $scope.league1 = response.data
                            /*console.log ( $scope.league1)*/
                                for(var i = 0; i < $scope.league1.length; i++) {
                                           $scope.leagueList = $scope.leagueList.concat($scope.league1[i]);
                                        }

                            $http.get( urlS+id+'/leagueTable ', {cache: true}).then(function(response) {
                                $scope.rankings = response.data
                                console.log($scope.rankings.matchday)
                                      $http.get( urlS+id+'/fixtures?matchday='+$scope.rankings.matchday, {cache: true})
                                        .then(function(response) {
                                            $scope.teams1 = response.data.fixtures
                                            console.log($scope.teams1)
                                             })
                              })


         })

})


.controller('Bundesliga2Controller', function($scope,$http) {
        var id = 352
         $http.get(urlS,{cache: true}).then(function(response) {
                  $http
                            $scope.leagueList = []
                            $scope.league = response.data
                                for(var i = 0; i < $scope.league.length; i++) {
                                           $scope.leagueList = $scope.leagueList.concat($scope.league[i]);
                                        }

                            $http.get( urlS+id+'/leagueTable ', {cache: true}).then(function(response) {
                                $scope.rankings = response.data

                                      $http.get( urlS+id+'/fixtures?matchday='+$scope.rankings.matchday, {cache: true})
                                        .then(function(response) {
                                            $scope.teams = response.data.fixtures
                                             })
                              })


         })

})


.controller('Bundesliga3Controller', function($scope,$http) {
        var id = 353
         $http.get(urlS,{cache: true}).then(function(response) {
                  $http
                            $scope.leagueList = []
                            $scope.league = response.data
                                for(var i = 0; i < $scope.league.length; i++) {
                                           $scope.leagueList = $scope.leagueList.concat($scope.league[i]);
                                        }

                            $http.get( urlS+id+'/leagueTable ', {cache: true}).then(function(response) {
                                $scope.rankings = response.data

                                      $http.get( urlS+id+'/fixtures?matchday='+$scope.rankings.matchday, {cache: true})
                                        .then(function(response) {
                                            $scope.teams = response.data.fixtures
                                             })
                              })


         })

})


.controller('PremierLeagueController', function($scope,$http) {
        var id = 354
         $http.get(urlS,{cache: true}).then(function(response) {
                  $http
                            $scope.leagueList = []
                            $scope.league = response.data
                                for(var i = 0; i < $scope.league.length; i++) {
                                           $scope.leagueList = $scope.leagueList.concat($scope.league[i]);
                                        }

                            $http.get( urlS+id+'/leagueTable ', {cache: true}).then(function(response) {
                                $scope.rankings = response.data

                                console.log($scope.rankings)
                                      $http.get( urlS+id+'/fixtures?matchday='+$scope.rankings.matchday, {cache: true})
                                        .then(function(response) {
                                            $scope.teams = response.data.fixtures
                                             })
                              })


         })

})


.controller('Ligue1Controller', function($scope,$http) {
         var id = 355
         $http.get(urlS,{cache: true}).then(function(response) {
                  $http
                            $scope.leagueList = []
                            $scope.league = response.data
                                for(var i = 0; i < $scope.league.length; i++) {
                                           $scope.leagueList = $scope.leagueList.concat($scope.league[i]);
                                        }

                            $http.get( urlS+id+'/leagueTable ', {cache: true}).then(function(response) {
                                $scope.rankings = response.data

                                      $http.get( urlS+id+'/fixtures?matchday='+$scope.rankings.matchday, {cache: true})
                                        .then(function(response) {
                                            $scope.teams = response.data.fixtures
                                             })
                              })


         })

})


.controller('Ligue2Controller', function($scope,$http) {
        var id = 356
         $http.get(urlS,{cache: true}).then(function(response) {
                  $http
                            $scope.leagueList = []
                            $scope.league = response.data
                                for(var i = 0; i < $scope.league.length; i++) {
                                           $scope.leagueList = $scope.leagueList.concat($scope.league[i]);
                                        }

                            $http.get( urlS+id+'/leagueTable ', {cache: true}).then(function(response) {
                                $scope.rankings = response.data

                                      $http.get( urlS+id+'/fixtures?matchday='+$scope.rankings.matchday, {cache: true})
                                        .then(function(response) {
                                            $scope.teams = response.data.fixtures
                                             })
                              })


         })

})


.controller('SerieAController', function($scope,$http) {
        var id = 357
         $http.get(urlS,{cache: true}).then(function(response) {
                  $http
                            $scope.leagueList = []
                            $scope.league = response.data
                                for(var i = 0; i < $scope.league.length; i++) {
                                           $scope.leagueList = $scope.leagueList.concat($scope.league[i]);
                                        }

                            $http.get( urlS+id+'/leagueTable ', {cache: true}).then(function(response) {
                                $scope.rankings = response.data

                                      $http.get( urlS+id+'/fixtures?matchday='+$scope.rankings.matchday, {cache: true})
                                        .then(function(response) {
                                            $scope.teams = response.data.fixtures
                                             })
                              })


         })

})


.controller('PrimeraDivisionController', function($scope,$http) {
         var id = 358
         $http.get(urlS,{cache: true}).then(function(response) {
                  $http
                            $scope.leagueList = []
                            $scope.league = response.data
                                for(var i = 0; i < $scope.league.length; i++) {
                                           $scope.leagueList = $scope.leagueList.concat($scope.league[i]);
                                        }

                            $http.get( urlS+id+'/leagueTable ', {cache: true}).then(function(response) {
                                $scope.rankings = response.data

                                      $http.get( urlS+id+'/fixtures?matchday='+$scope.rankings.matchday, {cache: true})
                                        .then(function(response) {
                                            $scope.teams = response.data.fixtures
                                             })
                              })


         })

})


.controller('SegundaDivisionController', function($scope,$http) {
        var id = 359
         $http.get(urlS,{cache: true}).then(function(response) {
                  $http
                            $scope.leagueList = []
                            $scope.league = response.data
                                for(var i = 0; i < $scope.league.length; i++) {
                                           $scope.leagueList = $scope.leagueList.concat($scope.league[i]);
                                        }

                            $http.get( urlS+id+'/leagueTable ', {cache: true}).then(function(response) {
                                $scope.rankings = response.data

                                      $http.get( urlS+id+'/fixtures?matchday='+$scope.rankings.matchday, {cache: true})
                                        .then(function(response) {
                                            $scope.teams = response.data.fixtures
                                             })
                              })


         })

})


.controller('EhrendivisionController', function($scope,$http) {
         var id = 360
         $http.get(urlS,{cache: true}).then(function(response) {
                  $http
                            $scope.leagueList = []
                            $scope.league = response.data
                                for(var i = 0; i < $scope.league.length; i++) {
                                           $scope.leagueList = $scope.leagueList.concat($scope.league[i]);
                                        }

                            $http.get( urlS+id+'/leagueTable ', {cache: true}).then(function(response) {
                                $scope.rankings = response.data

                                      $http.get( urlS+id+'/fixtures?matchday='+$scope.rankings.matchday, {cache: true})
                                        .then(function(response) {
                                            $scope.teams = response.data.fixtures
                                             })
                              })


         })

})


.controller('SerieBController', function($scope,$http) {
         var id = 361
         $http.get(urlS,{cache: true}).then(function(response) {
                  $http
                            $scope.leagueList = []
                            $scope.league = response.data
                                for(var i = 0; i < $scope.league.length; i++) {
                                           $scope.leagueList = $scope.leagueList.concat($scope.league[i]);
                                        }

                            $http.get( urlS+id+'/leagueTable ', {cache: true}).then(function(response) {
                                $scope.rankings = response.data

                                      $http.get( urlS+id+'/fixtures?matchday='+$scope.rankings.matchday, {cache: true})
                                        .then(function(response) {
                                            $scope.teams = response.data.fixtures
                                             })
                              })


         })

})
