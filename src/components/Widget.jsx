import React from 'react';

function Widget({ widget, removeWidget }) {
  return (
    <div className="widget">
      <span className="remove" onClick={removeWidget}>
        &times;
      </span>
      <h4>{widget.name}</h4>
      <p>{widget.content}</p>
    </div>
  );
}

export default Widget;
