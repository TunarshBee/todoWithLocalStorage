import React, { useState, useEffect } from "react";


const TodoForm = () => {
  const [items, setItems] = useState([]);
  const [containers, setcontainers] = useState(()=>{
    return JSON.parse(localStorage.getItem("items")) || []
  });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(containers));
  }, [containers]);

  const onMovieChange = (e) => {
    return setItems({ ...items, movies: e.target.value });
  };
  const onDirectorChange = (e) => {
    return setItems({ ...items, directors: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("items:", items);
    console.log("containers", containers);
    setItems({ movies: "", directors: "" });
    setcontainers([...containers, items]);
  };
  const onDelete = (id) => {
    const filtered = containers.filter((elem, indx) => indx !== id);
    setcontainers(filtered);
  };

  return (
    <div>
      Todo Form
      <form action="" onSubmit={onSubmit}>
        <input type="text" value={items.movies} onChange={onMovieChange} />
        <input
          type="text"
          value={items.directors}
          onChange={onDirectorChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      {containers &&
        containers.map((items, indx) => {
          return (
            <div key={indx}>
              <span>{items.movies}</span>
              <span>{items.directors}</span>
              <button onClick={(e) => onDelete(indx)}> Delete </button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoForm;
