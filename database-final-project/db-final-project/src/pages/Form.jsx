import React from "react";
import { useState } from "react";
import { db } from "../firebase/config";

const Form = () => {
  const [title, setTitle] = useState("");
  const [minage, setMinage] = useState("");
  const [time, setTime] = useState("");
  const [text, setText] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if ((title.length > 0, minage, time, text)) {
      const newMovie = {
        title: title,
        text: text,
        minage: parseInt(minage),
        time: parseInt(time),
      };
      try {
       await db.collection("movies").add(newMovie);
      } catch (err) {
        console.log(err.message);
      }

      setTitle("");
      setMinage("");
      setTime("");
      setText("");
    }else{
      alert("Žiadne pole nesmie byť prázdne!")
    }
  };

  return (
    <div className="inputMovie">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <input
          type="number"
          placeholder="minage"
          min="0"
          onChange={(e) => {
            setMinage(e.target.value);
          }}
          value={minage}
        />
        <input
          type="number"
          placeholder="time"
          min="0"
          onChange={(e) => {
            setTime(e.target.value);
          }}
          value={time}
        />
        <input
          className="texta"
          type="text"
          placeholder="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <input type="submit" value="Pridať film" />
      </form>
    </div>
  );
};

export default Form;
