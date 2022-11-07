import { useState } from "react";

const TimerForm = ({
  id,
  title,
  description,
  time,
  onFormSubmit,
  onFormClose,
}) => {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescriptionInput(e.target.value);
  };
  const handleEditSubmit = () => {
    onFormSubmit({
      id: id,
      //   title: titleInput,
      description: descriptionInput,
    });
    onFormClose();
    console.log(descriptionInput);
  };

  return (
    <div className="w-screen h-screen bg-gray-100 fixed flex justify-center items-center  left-0 right-0 top-0 bottom-0">
      <div className="w-[500px] h-[500px] bg-white rounded-md shadow-sm flex flex-col justify-center items-center">
        <h2 className="text-gray-800 font-bold text-3xl"> {title} </h2>
        <h3 className="text-gray-500 text-sm">Time stamp: {time}</h3>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="bg-wihte py-8 px-6 shadow-lg rounded-lg sm:px-10">
            <div className="space-y-6 ">
              <div className="flex flex-col justify-center items-center">
                <label className=" text-lg font-medium text-gray-800 mb-2">
                  Description
                </label>
                <input
                  type="text"
                  required
                  className=" border-[2px] w-full border-gray-300 rounded-lg shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  onChange={(e) => handleDescriptionChange(e)}
                />
                <div className="mt-4 ">
                  <button
                    className="border-[1px] border-zinc-400 rounded-md px-4 py-0.5 transition delay-200"
                    onClick={() => handleEditSubmit()}
                  >
                    Update
                  </button>
                  <button
                    className="border-[1px] border-zinc-400 rounded-md px-4 py-0.5 transition delay-200"
                    onClick={() => onFormClose()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimerForm;
