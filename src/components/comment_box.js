import React, { Component, PropTypes } from 'react';

/**
 * ComponentName
 */
export default class CommentBox extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="comment-box"> 
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button></button>
      </div>
    );
  }
}

// ComponentName.propTypes = {
//   prop: PropTypes.type.isRequired
// }

//export default CommentBox;
