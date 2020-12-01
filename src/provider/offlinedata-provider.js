import React, { useState } from 'react';
import coursejson from '../json/home.json';
import mypathjson from '../json/mypaths.json';
import courseDetailjson from '../json/courseDetail.json';

export const OfflineDataContext = React.createContext();

export const OfflineDataProvider = (props) => {
  const [course, setCourse] = useState(coursejson);
  const [path, setPath] = useState(mypathjson);
  const [bookmark, setBookmark] = useState([]);
  const [courseDetailList] = useState(courseDetailjson);

  return (
    <OfflineDataContext.Provider
      value={{ course, path, bookmark, setBookmark, courseDetailList }}
    >
      {props.children}
    </OfflineDataContext.Provider>
  );
};
