import React from "react";
import {Navigate, Route,Routes} from "react-router-dom";
import { useSelector } from "react-redux";
import CommonAccess from "../CommonAccess/CommonAccess";
import AuthorizationMain from "../Authorization/Authorization";
import SearchPage from "../SearchPage/SearchPage";
import ResultPage from "../ResultPage/ResultPage";

const Main = () => {
  let companyInfo = useSelector(state => state.profile.companyInfo)
  return companyInfo ? (
        <Routes> 
          <Route path="/" element={<CommonAccess />}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/result" element={<ResultPage/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes> 
  ) : (
    <Routes>
        <Route path="/" element={<CommonAccess />}/>
        <Route path="/login" element={<AuthorizationMain/>} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}


export default Main
