import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="container post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div>{post}</div>;
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Post);
