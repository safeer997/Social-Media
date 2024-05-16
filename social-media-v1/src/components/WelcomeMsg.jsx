const WelcomeMsg = ({handleAddPostsClick}) => {
  return (
    <center className="welcome-msg">
      <h1>No Posts to show</h1>
      <button onClick={()=>handleAddPostsClick()} type="button" className="btn btn-primary">
        View Posts
      </button>
    </center>
  );
};
export default WelcomeMsg;
