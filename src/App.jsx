import { useRef } from "react";
import { useState } from "react";

import EditableTimerList from "./components/EditableTimerList";

import Modal from "./components/SaveModal";


function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [savedTasks, setSavedTasks] = useState([]);

  const timerId = useRef();

  const funcTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const handleStart = () => {
    setIsActive(true);

    timerId.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const handlePause = () => {
    setIsActive(false);

    clearInterval(timerId.current);
    timerId.current = 0;
  };
  const handleReset = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
    setTimer(0);
  };
  const handleSave = () => {
    console.log(`Time is ${funcTime()}`);
    handlePause();
    setOpenModal(true);
  };
  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleEditFormSubmit = (attributes) => {
    updateTimer(attributes);
  };

  const updateTimer = (attributes) => {
    const editedTask = savedTasks.find((task) => task.id === attributes.id);
    // editedTask.title = attributes.title
    editedTask.description = attributes.description;
    const filteredArray = savedTasks.filter(
      (task) => task.id !== attributes.id
    );
    const unorderArray = [...filteredArray, editedTask];
    console.log(unorderArray);
    setSavedTasks(
      unorderArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    );
  };

  return (
    <div className="flex flex-col justify-between items-center select-none">
      <div>
        <p className="px-2 py-0.5 mt-3 rounded-full font-medium bg-green-100 text-green-800 text-base">
          {funcTime()}
        </p>
      </div>

      <div className="flex justify-between items-center my-4">
        <div className="mx-2">
          <button
            onClick={handleStart}
            disabled={isActive}
            className={
              isActive
                ? "rounded-md px-4 border-[1px] border-gray-300 bg-white text-gray-300 font-semibold"
                : "rounded-md px-4 border-[1px] border-gray-300 bg-white text-gray-600 font-semibold"
            }
          >
            Start
          </button>
        </div>
        <div className="mx-2">
          <button
            onClick={handlePause}
            disabled={!isActive}
            className={
              !isActive
                ? "rounded-md px-4 border-[1px] border-gray-300 bg-white text-gray-300 font-semibold"
                : "rounded-md px-4 border-[1px] border-gray-300 bg-white text-gray-600 font-semibold"
            }
          >
            Pause
          </button>
        </div>

        <div className="mx-2">
          <button
            onClick={handleSave}
            className="rounded-md px-4 border-[1px] border-gray-300 bg-white text-gray-600 font-semibold"
          >
            Save
          </button>
        </div>
      </div>

      {openModal && (
        <Modal
          closeModal={setOpenModal}
          savedTasks={savedTasks}
          setSavedTasks={setSavedTasks}
          timer={timer}
          reset={handleReset}
        />
      )}

      <EditableTimerList
        timers={savedTasks}
        onFormSubmit={handleEditFormSubmit}
      />
    </div>
  );
}

export default App;
