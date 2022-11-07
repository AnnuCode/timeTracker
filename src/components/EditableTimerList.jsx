import EditableTimer from "./EditableTimer";

const EditableTimerList = ({ timers, onFormSubmit }) => {
  const timersList = timers.map((timer) => (
    <EditableTimer
      key={timer.id}
      id={timer.id}
      title={timer.title}
      description={timer.description}
      time={timer.time}
      onFormSubmit={onFormSubmit}
    />
  ));

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-7 ">
      {timersList}
    </div>
  );
};
export default EditableTimerList;
