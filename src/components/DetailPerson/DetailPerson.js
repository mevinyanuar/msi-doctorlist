import React, { useState, useEffect } from "react";
import { datalist } from "../../datalist";
import { useParams } from "react-router-dom";
import './DetailPerson.css'

const DetailPerson = () => {
  const [people, setPeople] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const newPerson = datalist.find((person) => person.id === parseInt(id));
    setPeople(newPerson);
  }, []);
  return (
    <div className="row">
      <div className="col-12 mt-3">
        <div className="card border-0">
          <div className="card-horizontal">
            <div className="img-square-wrapper">
              <img
                className=""
                src="http://via.placeholder.com/200x180"
                alt="person"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{people.id}</h5>
              <p className="card-text">Reccomendations schedule on:</p>
              <p className="card-text">Weekdays {people.schedule}</p>
            </div>
          </div>
        </div>
        <div>
          <div className='title-name'>
            <h5>{people.name}</h5>
          </div>
          <p>{people.location}</p>
          <p>{people.job}</p>
          <p>IDR {people.price}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut illo dicta, dolore, enim qui ducimus eaque placeat sunt rerum dignissimos ipsa nemo, debitis iusto in. Nihil facere in error.</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPerson;
