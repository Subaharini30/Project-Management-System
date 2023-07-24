// import React, { useState } from 'react';
// import { format, startOfMonth, addDays, isSameMonth, isSameDay } from 'date-fns';
// import { v4 as uuidv4 } from 'uuid';
// import '../styles/calendar.css'; // Import your custom CSS file

// const ProjectManagementCalendar = () => {
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [tasks, setTasks] = useState([
//     { id: uuidv4(), date: '2023-07-18', title: 'Task 1', description: 'This is Task 1' },
//     { id: uuidv4(), date: '2023-07-22', title: 'Task 2', description: 'This is Task 2' },
//   ]);
//   const [newTask, setNewTask] = useState({ date: '', title: '', description: '' });

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   const renderTasksForDate = () => {
//     if (!selectedDate) return null;

//     const tasksForDate = tasks.filter((task) => task.date === selectedDate);

//     return (
//       <div className="task-container">
//         <h3>Tasks for {format(new Date(selectedDate), 'MMMM d, yyyy')}</h3>
//         {tasksForDate.length === 0 ? (
//           <p>No tasks for this date.</p>
//         ) : (
//           <ul>
//             {tasksForDate.map((task) => (
//               <li key={task.id} onClick={() => handleTaskClick(task)}>
//                 <strong>{task.title}</strong>
//                 <p>{task.description}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   };

//   const handleTaskClick = (task) => {
//     alert(`Task: ${task.title}\nDescription: ${task.description}`);
//   };

//   const renderCalendarDays = () => {
//     const monthStart = startOfMonth(currentMonth);
//     const monthEnd = addDays(startOfMonth(addDays(currentMonth, 31)), -1);
  
//     const days = [];
//     let day = monthStart;
  
//     while (day <= monthEnd) {
//       days.push(day);
//       day = addDays(day, 1);
//     }

//     return days.map((date, index) => {
//       const isCurrentMonth = isSameMonth(date, currentMonth);
//       const isSelectedDate = isSameDay(date, selectedDate);
//       const hasTask = tasks.some((task) => task.date === format(date, 'yyyy-MM-dd'));

//       return (
//         <div
//           key={index}
//           className={`calendar-day ${isCurrentMonth ? 'current-month' : 'other-month'} ${hasTask ? 'has-task' : ''} ${isSelectedDate ? 'selected' : ''}`}
//           onClick={() => handleDateClick(format(date, 'yyyy-MM-dd'))}
//         >
//           <div className="day-of-week">{format(date, 'EEE')}</div>
//             <div className="day-of-month">{format(date, 'd')}</div> 
//         </div>
//       );
//     });
//   };

//   const handlePrevMonthClick = () => {
//     setCurrentMonth(addDays(currentMonth, -31));
//     setSelectedDate(null);
//   };

//   const handleNextMonthClick = () => {
//     setCurrentMonth(addDays(currentMonth, 31));
//     setSelectedDate(null);
//   };

//   const handleAddTask = () => {
//     if (newTask.date && newTask.title) {
//       setTasks([...tasks, { id: uuidv4(), ...newTask }]);
//       setNewTask({ date: '', title: '', description: '' });
//     }
//   };

//   return (
//     <div className="project-management-calendar">
//       <div className="calendar-header">
//         <button onClick={handlePrevMonthClick}>Previous Month</button>
//         <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
//         <button onClick={handleNextMonthClick}>Next Month</button>
//       </div>
//       <div className="calendar">
//         <div className="weekdays">
//           <div>Sun</div>
//           <div>Mon</div>
//           <div>Tue</div>
//           <div>Wed</div>
//           <div>Thu</div>
//           <div>Fri</div>
//           <div>Sat</div>
//         </div>
//         {renderCalendarDays()}
//       </div>
//       {renderTasksForDate()}

//       <div className="add-task-container">
//         <h3>Add New Task</h3>
//         <input
//           type="date"
//           value={newTask.date}
//           onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Task Title"
//           value={newTask.title}
//           onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//         />
//         <textarea
//           placeholder="Task Description"
//           value={newTask.description}
//           onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
//         />
//         <button onClick={handleAddTask}>Add Task</button>
//       </div>
//     </div>
//   );
// };

// export default ProjectManagementCalendar;

// App.js
import React from 'react';
import EventCalendar from './eventCalendar';
import TaskEntry from './taskEntry';
import TaskView from './taskView';

const App1 = () => {
  // You may use a state management library to manage the selected date and task
  // For simplicity, we're using local state here
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [task, setTask] = React.useState('');

  return (
    <div>
      <h1>Project Management System</h1>
      <EventCalendar />
      {selectedDate && (
        <>
          <TaskEntry selectedDate={selectedDate} />
          {task && <TaskView selectedDate={selectedDate} task={task} />}
        </>
      )}
    </div>
  );
};

export default App1;

