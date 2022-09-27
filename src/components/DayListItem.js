import React from "react";
import "components/DayListItem.scss";
import "components/DayList"

import classnames from "classnames";

export default function DayListItem(props) {
  
  let dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !(props.spots), 
  });

  function formatspots(){
    if(props.spots === 0){
      return "no spots remaining";
    
    } else {
      return `${props.spots} spot${props.spots >= 2 ? "s" : ""}`
    }
  }

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
    <h2 className='text--regular'>{props.name}</h2>
    <h3 className='text--light'>{formatspots} spots remining</h3>
  </li>
);
}