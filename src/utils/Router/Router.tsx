import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { UserPage } from "../../components/UserPage/UserPage";
import { UserPageContainer } from "../../components/UserPage/UserPageContainer";
import { Users } from "../../components/Users/Users";
import { UsersContainer } from "../../components/Users/UsersContainer";


export const Router = () => {
  return (
    <Routes>
      <Route path="/user/:id" element={<UserPageContainer />} />
      <Route path="/" element={<UsersContainer />} />
    </Routes>
  );
};
