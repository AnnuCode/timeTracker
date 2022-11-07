import React, { useState } from "react";

function modal({ closeModal, savedTasks, setSavedTasks, timer, reset }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const funcTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };
  const closeHandler = () => {
    closeModal(false);
  };
  const saveHandler = () => {
    setSavedTasks((tasks) => [
      ...tasks,
      {
        id: new Date().getTime().toString(),
        title: title,
        description: description,
        time: funcTime(),
      },
    ]);

    reset();

    closeModal(false);
  };

  const titleHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const descriptionHandler = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  return (
    <div className="w-screen h-screen bg-gray-100 fixed flex justify-center items-center">
      <div className="w-[500px] h-[500px] bg-white rounded-md shadow-sm flex flex-col justify-center items-center p-5 ">
        <label className="my-4 text-gray-800">Title</label>
        <input
          type="text"
          className="border-2 w-full rounded-md border-gray-300"
          onChange={(e) => titleHandler(e)}
        />
        <label className="my-4 text-gray-800">Description</label>
        <input
          type="text"
          className="border-2 w-full rounded-md border-gray-300"
          onChange={(e) => descriptionHandler(e)}
        />

        <div className="flex justify-between items-center mt-4">
          <div>
            <button
              className="px-5 border-[1px] border-gray-300 rounded-lg"
              onClick={saveHandler}
            >
              Save
            </button>
          </div>
          <div>
            <button
              className="px-5 border-[1px] border-gray-300 rounded-lg"
              onClick={closeHandler}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default modal;
