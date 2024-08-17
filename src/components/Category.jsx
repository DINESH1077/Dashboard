import React from 'react';
import Widget from './Widget';

function Category({ category, removeWidget, openModal }) {
  return (
    <div className="category">
      <h3>{category.name}</h3>
      {category.widgets.map((widget) => (
        <Widget
          key={widget.id}
          widget={widget}
          removeWidget={() => removeWidget(category.id, widget.id)}
        />
      ))}
      <button onClick={() => openModal(category.id)}>+ Add Widget</button>
    </div>
  );
}

export default Category;
