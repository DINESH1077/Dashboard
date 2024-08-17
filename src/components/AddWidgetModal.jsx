import React, { useState } from 'react';

function AddWidgetModal({ closeModal, addWidget, categoryId }) {
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');

  const handleSubmit = () => {
    const newWidget = {
      id: `widget-${Date.now()}`,
      name: widgetName,
      content: widgetContent,
    };
    addWidget(categoryId, newWidget);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Add Widget</h2>
        <input
          type="text"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          placeholder="Widget Name"
        />
        <textarea
          value={widgetContent}
          onChange={(e) => setWidgetContent(e.target.value)}
          placeholder="Widget Content"
        />
        <button onClick={handleSubmit}>Add Widget</button>
      </div>
    </div>
  );
}

export default AddWidgetModal;
