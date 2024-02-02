import React from "react";
import "./Ticket.css";

const Ticket = () => {
  return (
    <>
      <div className="ticket">
        <div className="ticket-conteiner">
          <div className="ticket-content">
            <p>
              Want your vehicle to feel like new? <br /> Schedule a service
              today!
            </p>
            <a href="#" target="_blank">
              <button>BOOK ONLINE</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
