import { useState } from "react";
import data from "./data.js";
import "./styles.css";

function Accordion() {
  const [show, setShow] = useState(null);
  const [flag, setFlag] = useState(false);
  const [allowed, setAllowed] = useState([]);

  function handleMultipleSelection() {
    setFlag(!flag);
  }
  console.log(flag);

  function handleSingleSelection(selectedId) {
    if (flag) {
      if (allowed.includes(selectedId)) {
        setAllowed(allowed.filter((el) => el !== selectedId));
      } else {
        setAllowed([...allowed, selectedId]);
      }
    } else {
      setShow(selectedId === show ? null : selectedId);
    }
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        <div className="allow-button" onClick={handleMultipleSelection}>
          <h3>Allow multiple selection</h3>
          <span>+</span>
        </div>
        {data && data.length > 0 ? (
          data.map((d) => {
            return (
              <div key={d.id} className="item">
                <div
                  onClick={() => {
                    handleSingleSelection(d.id);
                  }}
                  className="title"
                >
                  <h3>{d.question}</h3>
                  <span>+</span>
                  {(allowed.includes(d.id) || show === d.id) && (
                    <div className="content">{d.answer} </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div>NO DATA FOUND</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
