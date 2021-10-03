import React, { useState } from "react";
import { datalist } from "../datalist";
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import './MainPage.css'

const MainPage = () => {
  const [people, setPeople] = useState(datalist);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [pageNumberLimit] = useState(7);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(7);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(people.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = people.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const renderCard = (people) => {
    return (
      <div>
        {people.map((person) => {
          return (
            <div className="container-fluid" key={person.id}>
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
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">{person.location}</p>
                        <p className="card-text">{person.job}</p>
                        <p className="card-text">IDR {person.price}</p>
                        <Link to={`/detail/${person.id}`}>See Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <h2 className='heading-text'>List Of Doctor</h2>
      {renderCard(currentItems)}
      <ul className="pageNumbers">
            <li>
              <button
                onClick={handlePrevBtn}
                disabled={currentPage === pages[0] ? true : false}
              >
                <FaIcons.FaChevronLeft />
                <span>Previous Page</span>
              </button>
            </li>
            <li>
              <button
                onClick={handleNextBtn}
                disabled={
                  currentPage === pages[pages.length - 1] ? true : false
                }
              >
                <span>Next Page</span>
                <FaIcons.FaChevronRight />
              </button>
            </li>
          </ul>
    </div>
  );
};



export default MainPage;
