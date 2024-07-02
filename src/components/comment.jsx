import React from "react";

function Comment(props) {
    return (
        <div className="box" style={{ marginTop: '-200px' }}>
                     
              <strong className="is-size-5">{props.username}</strong>
              <p className="is-size-6">{props.content}</p>
              <small className="has-text-grey">{props.date}</small>
                
        </div>
      );
}
export { Comment };
