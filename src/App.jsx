import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import AddWidgetModal from './components/AddWidgetModal';
import initialData from './data.json';

function App() {
  const [dashboardData, setDashboardData] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const addWidget = (categoryId, widget) => {
    const updatedCategories = dashboardData.categories.map((category) =>
      category.id === categoryId
        ? { ...category, widgets: [...category.widgets, widget] }
        : category
    );
    setDashboardData({ categories: updatedCategories });
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategories = dashboardData.categories.map((category) =>
      category.id === categoryId
        ? {
            ...category,
            widgets: category.widgets.filter((widget) => widget.id !== widgetId),
          }
        : category
    );
    setDashboardData({ categories: updatedCategories });
  };

  const openModal = (categoryId) => {
    setActiveCategory(categoryId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <Dashboard
        data={dashboardData}
        removeWidget={removeWidget}
        openModal={openModal}
      />
      {modalOpen && (
        <AddWidgetModal
          closeModal={closeModal}
          addWidget={addWidget}
          categoryId={activeCategory}
        />
      )}
    </div>
  );
}

export default App;
