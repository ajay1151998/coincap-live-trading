import React, { useState } from "react";
import "../components/Navbar.css";
import useSWR from "swr";

function Coincap() {
  const { data: myData } = useSWR(
    "https://api.coincap.io/v2/assets",
    async (url) => {
      const res = await fetch(url);
      const result = await res.json();
      return result;
    }
  );

  const [limit, setLimit] = useState(20);
  console.log(limit);

  const viewMore = () => {
    if (limit < myData?.data?.length) {
      setLimit(limit + 10);
    } else {
      alert("You have reached the end");
    }
  };

  return (
    <>
      <div className="container  bg-light my-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Market Cap</th>
              <th scope="col">Volume (24 Hrs)</th>
              <th scope="col">Changes (24 Hrs)</th>
            </tr>
          </thead>
          <tbody>
            {myData?.data?.slice(0, limit).map((items, index) => (
              <tr key={index}>
                <th scope="row">{items?.rank}</th>
                <td>
                  <h6>{items?.name}</h6>
                  <p>{items?.symbol}</p>
                </td>
                <td>{items?.priceUsd}</td>
                <td>{items?.marketCapUsd}</td>
                <td>{items?.volumeUsd24Hr}</td>
                <td>{items?.changePercent24Hr}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="row">
          <div classMame="col-4"></div>
          <div classMame="col-4">
            <button
              className="btn btn-primary mt-2 bg-success"
              onClick={viewMore}
            >
              View More
            </button>
          </div>
          <div classMame="col-4"></div>
        </div>
      </div>
    </>
  );
}
export default Coincap;
