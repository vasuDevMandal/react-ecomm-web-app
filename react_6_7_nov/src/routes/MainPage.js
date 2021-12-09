import { getAuth } from "@firebase/auth";
import { CircularProgress, Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AppContainer from "../components/AppContainer";
import getSignedInUser from "../helperFunctions/getSignedInUser";
import style from "../styles/MainPage.module.css";

export default function MainPAge(props) {
  const history = useHistory();
  const user = useRef(null);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    getSignedInUser(getAuth())
      .then(async (userCredentials) => {
        console.log(userCredentials);
        user.current = userCredentials;
        setShowLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setShowLoading(false);
        history.push("/login");
      });

    return () => {
      // cleanup
    };
  });

  return (
    <React.Fragment>
      {showLoading ? (
        <Box className={style.loader}>
          <CircularProgress />
        </Box>
      ) : (
        <AppContainer
          userId={user.current?.uid}
          userEmail={user.current?.email}
        />
      )}
    </React.Fragment>
  );
}
