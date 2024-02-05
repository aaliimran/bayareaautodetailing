import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/send">
              <button>BOOK ONLINE</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
