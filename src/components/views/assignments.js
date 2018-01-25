import React from react;

export default function Assignments(props){
  return (
    <div className="assignment">
      <div className="assignment__header">
        <h3>Assignment 6</h3>
        <h3> 25 pts </h3>
        <h3> Due Date </h3>
        <button>Edit</button>
      </div>
      <div className="assignment__details">
        <h3>Title</h3>
        <h3> Goals </h3>
        <ul>
          <li>sine</li>
          <li>cosine</li>
          <li>tangent</li>
        </ul>
        <h3>Comments</h3>
      </div>
    </div>
  )
}
