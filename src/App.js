import React, { useState, useEffect } from "react";
import DateInput from "./components/DateInput";
import Photo from "./components/Photo";

function App() {
  const api = {
    key: "m2CD9YHCPhcbW9Yurs5NMohrEphMu0u86EtI3WN0",
    base: "https://api.nasa.gov/planetary/apod",
  };

  var today = new Date();

  const [date, setDate] = useState(today);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    fetch(`${api.base}?&api_key=${api.key}`)
      .then((res) => res.json())
      .catch((err) => alert(err))
      .then((res) => {
        if (res.media_type !== undefined) setPhoto(res);
        else alert(res.msg);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPhoto = (date) => {
    fetch(`${api.base}?&date=${date}&api_key=${api.key}`)
      .then((res) => res.json())
      .catch((err) => alert(err))
      .then((res) => {
        if (res.media_type !== undefined) setPhoto(res);
        else {
          alert(res.msg);
          setPhoto(
            "https://coolbackgrounds.io/images/backgrounds/black/black-contour-f41038db.svg"
          );
        }
      });
  };
  const formatDate = (date) => {
    let myDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    return myDate;
  };

  function changeDate(date) {
    setDate(date);
    getPhoto(formatDate(date));
  }

  return (
    <div className="App">
      <h1>NASA's Astronomy Picture Of The Day</h1>
      <DateInput changeDate={changeDate} date={date} />
      <Photo photo={photo} />
    </div>
  );
}

export default App;
