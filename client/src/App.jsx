// import './App.css';
// import Header from './Components/Header'
// import AddTodo from './Components/AddTodo'
// import TodoList from './Components/Todolist'
// import 'react-toastify/dist/ReactToastify.css';
// import {ToastContainer} from 'react-toastify';

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <AddTodo/>
//       <TodoList/>
//       <ToastContainer/>
//     </div>
//   )
// }

// export default App


import "./App.css";
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/Todolist";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList />
      <ToastContainer />
    </div>
  );
};

export default App;
