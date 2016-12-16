class NavCtrl {
  constructor(auth)
  {
    this.isLoggedIn = auth.isLoggedIn;
    this.currentUser = auth.currentUser;
    this.logOut = auth.logOut;
  }
};

export default NavCtrl;
