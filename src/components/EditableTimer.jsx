import { useState } from "react";
import Timer from "./Timer";

import TimerForm from "./TimerForm";

const EditableTimer = ({ id, title, description, time, onFormSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSubmit = () => {
    setIsOpen(true);
  };
  const handleEditSubmit = (timer) => {
    onFormSubmit(timer);
  };
  const handleFormClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="select-none">
      {isOpen ? (
        <TimerForm
          id={id}
          title={title}
          description={description}
          onFormSubmit={handleEditSubmit}
          onFormClose={handleFormClose}
          time={time}
        />
      ) : (
        <Timer
          title={title}
          description={description}
          onFormSubmit={handleFormSubmit}
          time={time}
        />
      )}
    </div>
  );
};
export default EditableTimer;
