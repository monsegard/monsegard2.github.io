import React, { useState, useEffect } from "react";
import PatternList from "../PatternList";
import list from "../css/List.module.css";
import { useSelector } from "react-redux";

const OutPatternList = ({ todoList, updateTodoList }) => {
   const [filetrCheckTrue, setFiletrCheckTrue] = useState(
      todoList.filter((todoList) => todoList.check === true)
   );
   const [filetrCheckFalse, setFiletrCheckFalse] = useState(
      todoList.filter((todoList) => todoList.check === false)
   );

   useEffect(() => {
      setFiletrCheckFalse(
         todoList.filter((todoList) => todoList.check === false)
      );
      setFiletrCheckTrue(
         todoList.filter((todoList) => todoList.check === true)
      );
   }, [todoList]);

   const all = useSelector((state) => state.boolean.all);
   const active = useSelector((state) => state.boolean.active);

   return (
      <ul id="list" className={list.list}>
         {all === true &&
            todoList.map((value, index) => {
               return (
                  <PatternList
                     key={value.id}
                     index={index}
                     out={value.todo}
                     todoList={todoList}
                     all={all}
                     active={active}
                     updateTodoList={updateTodoList}
                  />
               );
            })}

         {active === true &&
            filetrCheckFalse.map((value, index) => {
               return (
                  <PatternList
                     key={value.id}
                     index={index}
                     out={value.todo}
                     todoList={todoList}
                     all={all}
                     active={active}
                     updateTodoList={updateTodoList}
                  />
               );
            })}
         {all === false &&
            active === false &&
            filetrCheckTrue.map((value, index) => {
               return (
                  <PatternList
                     key={value.id}
                     index={index}
                     out={value.todo}
                     todoList={todoList}
                     all={all}
                     active={active}
                     updateTodoList={updateTodoList}
                  />
               );
            })}
      </ul>
   );
};

export default OutPatternList;