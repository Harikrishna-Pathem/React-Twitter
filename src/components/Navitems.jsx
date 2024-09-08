import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { useState } from 'react';
import Tweet from "./Tweet";
import Modal from 'react-bootstrap/Modal';

function Navitems({ tab, setTab }) {

    const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  return (
    <>
      <div className="menu">
        <ul className="list">
          <li
            className="item"
            onClick={() => {
              setTab("home");
            }}
          >
            <FaHome /> <p>Home</p>
          </li>
         
          <li className="item" variant="primary" onClick={handleShow}>
            <FaSearch />
            <p>Search</p>
          </li>
          
          <li
            className="item"
            onClick={() => {
              setTab("notification");
            }}
          >
            <IoNotifications /> <p>Notifications</p>
          </li>
          <li
            className="item"
            onClick={() => {
              setTab("chat");
            }}
          >
            <IoChatbubble /> <p>Chat</p>
          </li>
          <li
            className="item"
            onClick={() => {
              setTab("bookmark");
            }}
          >
            <FaBookmark /> <p>Bookmark</p>
          </li>
          <li
            className="item"
            onClick={() => {
              setTab("profile");
            }}
          >
            <MdAccountCircle /> <p>Profile</p>
          </li>
        </ul>
        <div className="button">
          <Tweet setTab={setTab}></Tweet>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body closeButton  style={{backgroundColor : "#3D3B40",gap: "10px", display : "flex", borderRadius: "8px"}}>
          <input  type="search" className="form-control" />
          <button className="btn btn-primary">Search</button>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default Navitems;
