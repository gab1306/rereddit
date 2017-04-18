app.controller('CommentController', function($scope, $stateParams, postFactory) {

  $scope.addComment = function() {
    // console.log($scope.text);
    postFactory.addComment($stateParams.id,$scope.body)
      .then(function(newPost) {
        $scope.post = newPost;
      })
      //this is new
      .catch(function(err) {
        alert(err.data)
      });
  }


  $scope.upvote = function() {
    if(scope.vote.downValue === 1) {
          scope.vote.downValue = 0;
          scope.vote.downvotes--;
        }

        if(scope.vote.upValue === 1) {
          scope.vote.upvotes++;
        } else {
          scope.vote.upvotes--;
        }
      };

  $scope.downvote = function() {
    if(scope.vote.upValue === 1) {
           scope.vote.upValue = 0;
           scope.vote.upvotes--;
         }

         if(scope.vote.downValue === 1) {
           scope.vote.downvotes++;
         } else {
           scope.vote.downvotes--;
         }
       };

  $scope.deleteComment = function() {
    postFactory.deleteComment($stateParams.id, this.review._id)
      .then(function(post) {
        $scope.post = post;
  })
}





// // postFactory.getComments($stateParams.id).then(function(comments) {
// //   $scope.post = comments;
// })

});
