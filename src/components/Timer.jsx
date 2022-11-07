const Timer = ({ title, description, time, onFormSubmit }) => {
  return (
    <div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">
              {title}
            </h3>
            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
              {time}
            </span>
          </div>
          <p className="mt-1 text-gray-500 text-sm truncate">{description}</p>
        </div>
        {/* <p>time</p> */}
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <a>
              <span className="ml-3 text-gray-500">{title}</span>
            </a>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <button className="ml-3 text-gray-500" onClick={onFormSubmit}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timer;
