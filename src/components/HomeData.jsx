import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeData = () => {
  const dataUrl = "https://restcountries.com/v2/all?fields=name,region,flag";
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: dataUrl,
    })
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page_content">
      <div className="row">
        {items.map((flags, index) => (
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="each_flag_box" key={index}>
              <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                  <span className="flag_img">
                    <img src={flags.flag} alt="FlagImage" />
                  </span>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                  <div className="flag_details">
                    <h3>{flags.name}</h3>
                    <span>{flags.region}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeData;
