class PostsCtrl{
  constructor(posts, post, auth){
    'ngInject';

    this.post = post;
    this.isLoggedIn = auth.isLoggedIn;

  }

  addComment() {
    if (this.body === '') {
      return;
    }
    posts.addComment(post._id, {
      body : this.body,
      author : 'user'
    }).success(function(comment) {
      this.post.comments.push(comment);
    });
    this.body = '';
  };
  upvote(comment) {
    posts.upvoteComment(post, comment);
  };

  downvote(comment) {
    posts.downvoteComment(post, comment);
  }
}

export default PostsCtrl;
