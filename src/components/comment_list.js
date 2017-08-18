import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


// turn comment list component into a container
// container is a react component that has access to application level state through redux
const CommentList = (props) => {

  const list = props.comments.map(comment => <li key={comment}>{comment}</li>);

  return(
    <ul className="comment-list">{list}</ul>
  );
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
