class HomeCtrl {
  constructor(posts, auth)
  {
    'ngInject';

    this.posts = posts.posts;
    this.isLoggedIn = auth.isLoggedIn;

    this.title = '';


  }

  addPost() {
		if (this.title === '') {
			return;
		}
		posts.create({
			title : this.title,
			link : this.link,
		});
		//clear the values
		this.title = '';
		this.link = '';
	};

  upvote(post) {
		//our post factory has an upvote() function in it
		//we're just calling this using the post we have
		console.log('Upvoting:' + post.title + "votes before:" + post.upvotes);
		posts.upvote(post);
	};
	downvote(post) {
		posts.downvote(post);
	};
};

export default HomeCtrl;
