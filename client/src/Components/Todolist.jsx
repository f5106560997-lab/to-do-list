// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { AiFillDelete, AiFillEdit } from "react-icons/ai";

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentTodo, setCurrentTodo] = useState({ _id: null, message: "" });

//   // Fetch all todos and sanitize messages
//   const getAllTodos = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/todolist/getall");
//       const safeTodos = response.data.data.map((todo) => ({
//         ...todo,
//         message: typeof todo.message === "string" ? todo.message : String(todo.message),
//       }));
//       setTodos(safeTodos);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to fetch todos.");
//     }
//   };

//   useEffect(() => {
//     getAllTodos();
//   }, []);

//   // Delete a todo
//   const handleDelete = async (id) => {
//     try {
//       const result = await axios.delete(`http://localhost:8000/todolist/deleteTodo/${id}`);
//       if (result.data.success === "deleted") {
//         toast.success("Todo deleted successfully!");
//         getAllTodos();
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to delete todo.");
//     }
//   };

//   // Start editing
//   const handleEdit = (todo) => {
//     setIsEditing(true);
//     setCurrentTodo({ _id: todo._id, message: todo.message });
//   };

//   // Update input value while editing
//   const handleEditInputChange = (e) => {
//     setCurrentTodo({ ...currentTodo, message: e.target.value });
//   };

//   // Update todo
//   const handleUpdate = async () => {
//     if (currentTodo.message.length < 4 || currentTodo.message.length > 20) {
//       toast.error("Message must be between 4 and 20 characters.");
//       return;
//     }
//     try {
//       const result = await axios.put(
//         `http://localhost:8000/todolist/updateToDo/${currentTodo._id}`,
//         { message: currentTodo.message }
//       );
//       if (result.data.success === "updated") {
//         toast.success("Todo updated successfully!");
//         getAllTodos();
//         setIsEditing(false);
//         setCurrentTodo({ _id: null, message: "" });
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to update todo.");
//     }
//   };

//   // Cancel editing
//   const handleCancelEdit = () => {
//     setIsEditing(false);
//     setCurrentTodo({ _id: null, message: "" });
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
//       {isEditing && (
//         <div style={{ marginBottom: "1rem" }}>
//           <input
//             type="text"
//             value={currentTodo.message}
//             onChange={handleEditInputChange}
//             style={{ padding: "0.5rem", width: "70%", marginRight: "10px" }}
//           />
//           <button onClick={handleUpdate} style={{ padding: "0.5rem 1rem" }}>
//             Update
//           </button>
//           <button
//             onClick={handleCancelEdit}
//             style={{ padding: "0.5rem 1rem", marginLeft: "5px" }}
//           >
//             Cancel
//           </button>
//         </div>
//       )}

//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {todos.map((todo) => (
//           <li
//             key={todo._id}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               padding: "0.5rem",
//               borderBottom: "1px solid #ccc",
//             }}
//           >
//             <span>{typeof todo.message === "string" ? todo.message : String(todo.message)}</span>
//             <div style={{ display: "flex", gap: "10px" }}>
//               <AiFillEdit
//                 style={{ cursor: "pointer", color: "#007bff" }}
//                 onClick={() => handleEdit(todo)}
//               />
//               <AiFillDelete
//                 style={{ cursor: "pointer", color: "#dc3545" }}
//                 onClick={() => handleDelete(todo._id)}
//               />
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const TodoList = ({ reload }) => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ _id: null, message: "" });

  // Fetch all todos
  const getAllTodos = async () => {
    try {
      const response = await axios.get("https://to-do-list-backend-zow8.onrender.com/todolist/getall");
      const safeTodos = response.data.data.map((todo) => ({
        ...todo,
        message: typeof todo.message === "string" ? todo.message : String(todo.message),
      }));
      setTodos(safeTodos);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch todos.");
    }
  };

  useEffect(() => {
    getAllTodos();
  }, [reload]);

  // Delete a todo
  const handleDelete = async (id) => {
    try {
      const result = await axios.delete(`https://to-do-list-backend-zow8.onrender.com/todolist/deleteTodo/${id}`);
      if (result.data.success) {
        toast.success("Todo deleted successfully!");
        getAllTodos();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete todo.");
    }
  };

  // Start editing
  const handleEdit = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ _id: todo._id, message: todo.message });
  };

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, message: e.target.value });
  };

  // Update todo
  const handleUpdate = async () => {
    if (currentTodo.message.length < 4 || currentTodo.message.length > 20) {
      toast.error("Message must be between 4 and 20 characters.");
      return;
    }
    try {
      const result = await axios.put(
        `https://to-do-list-backend-zow8.onrender.com/todolist/updateToDo/${currentTodo._id}`,
        { message: currentTodo.message }
      );
      if (result.data.success) {
        toast.success("Todo updated successfully!");
        getAllTodos();
        setIsEditing(false);
        setCurrentTodo({ _id: null, message: "" });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update todo.");
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentTodo({ _id: null, message: "" });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
      {isEditing && (
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            value={currentTodo.message}
            onChange={handleEditInputChange}
            style={{ padding: "0.5rem", width: "70%", marginRight: "10px" }}
          />
          <button onClick={handleUpdate} style={{ padding: "0.5rem 1rem" }}>
            Update
          </button>
          <button
            onClick={handleCancelEdit}
            style={{ padding: "0.5rem 1rem", marginLeft: "5px" }}
          >
            Cancel
          </button>
        </div>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo._id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem",
              borderBottom: "1px solid #ccc",
            }}
          >
            <span>{todo.message}</span>
            <div style={{ display: "flex", gap: "10px" }}>
              <AiFillEdit
                style={{ cursor: "pointer", color: "#007bff" }}
                onClick={() => handleEdit(todo)}
              />
              <AiFillDelete
                style={{ cursor: "pointer", color: "#dc3545" }}
                onClick={() => handleDelete(todo._id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
