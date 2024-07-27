import React, { useState } from "react";
import "./app.css";
let data = [
  {
    id: 1,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
  },
  {
    id: 2,
    question: "Who wrote 'To Kill a Mockingbird'?",
    answer: "Leonardo da Vinci",
  },
  {
    id: 3,
    question: "What is the capital of France?",
    answer: "H2O",
  },
  {
    id: 4,
    question: "What is 2 + 2?",
    answer: "Harper Lee",
  },
  {
    id: 5,
    question: "Who painted the Mona Lisa?",
    answer: "H2O",
  },
];
function Box() {
  const [singleSelected, setSingleSelected] = useState(null);
  const [multiselection, setMultiselection] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  function handleOpen(id) {
    if (multiselection) {
      let temp = [...multiSelected];
      let currId = temp.indexOf(id);
      console.log(currId);
      currId === -1 ? temp.push(id) : temp.splice(currId, 1);
      // console.log(temp);

      setMultiSelected(temp);
      console.log(multiSelected);
    } else {
      if (id == singleSelected) setSingleSelected(null);
      else setSingleSelected(id);
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="accordian">
          <div onClick={() => setMultiselection(!multiselection)}>
            Enable multiselection
          </div>
          {data && data.length > 0 ? (
            data.map((item) => (
              <div className="item">
                <div onClick={() => handleOpen(item.id)} className="title">
                  <h2>{item.question}</h2>
                </div>
                {multiselection ? (
                  multiSelected.indexOf(item.id) !== -1 && (
                    <div className="answer">
                      <p>{item.answer}</p>
                    </div>
                  )
                ) : singleSelected == item.id ? (
                  <div className="answer">
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <div>detail is empty</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Box;
