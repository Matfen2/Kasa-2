import "./Collapse.scss";
import { useState } from "react";

const Collapse = ({title, content}) => {
  const [isOpen, setIsOpen] = useState(false);
  
    function showInfo () {
        setIsOpen(!isOpen)
    }

  return (
    <div className="collapse">
      <div className="collapse-header">
        <p>{title}</p>
        <i className={`chevron-icon fa-solid fa-chevron-up ${isOpen ? 'open' : ''}`} onClick={showInfo}></i> 
      </div>
      <div className={`collapse-body ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  )
}

export default Collapse
