import React from 'react';
import Category from './Category';

function Dashboard({ data, removeWidget, openModal }) {
  return (
    <div className="dashboard">
      {data.categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          removeWidget={removeWidget}
          openModal={openModal}
        />
      ))}
    </div>
  );
}

export default Dashboard;
