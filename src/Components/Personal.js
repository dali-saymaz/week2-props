import React from "react";
// import Header from './header';
import PersonelData from "../foreigners.json";
import Header from "./Header";

const Personal = () => {
  console.log(PersonelData);
  return PersonelData.map((person) => {
    console.log(person);
    return (
      <div key={person.id}>
        <div className="row">
          <div className="col-3">
            <div className="bg-danger">Person</div>

            <div className="card" style={{ width: "18rem" }}>
              <img src={person.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Firstname: {person.first_name} </p>
                <p className="card-text">Lastname: {person.last_name}</p>
                <p className="card-text">Adress: {person.adress}</p>
                <p className="card-text">Salary: {person.salary}</p>
                <p className="card-text">Gender: {person.gender}</p>
                <p className="card-text">E-mail: {person.email}</p>
              </div>
            </div>
          </div>

          <div className="col-9">
            <div className="bg-danger">Children</div>
            {person.children.map((child, index) => (
              <div key={index} className="row">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="https://robohash.org/inventoredolorumest.png?size=250x250&set=set1"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">Firstname: {child.firstName}</p>
                    <p className="card-text">Gender: {child.gender}</p>
                    <p className="card-text">Birthday: {child.birthday}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-danger">Friend</div>
            {person.friends.map((friend, ind) => (
              <div key={ind} className="row">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="https://robohash.org/inventoredolorumest.png?size=250x250&set=set1"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">Firstname: {friend.firstName}</p>
                    <p className="card-text">Gender: {friend.gender}</p>
                    <p className="card-text">Birthday: {friend.birthday}</p>
                    <p className="card-text">Phone: {friend.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  });
};

export default Personal;
