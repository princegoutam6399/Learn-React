import React from 'react'
import Header from '../common/Header';
import {blogs} from '../Blog Data/BlogData.jsx'
import { useLocation } from 'react-router-dom';
export default function BlogDetails() {
  let uselocation = useLocation();
  let curid = uselocation.pathname.split('/')[2];
  let details = blogs.filter((v)=>v.id==curid)[0];
  return (
    <div>
    <Header/>
        <h2>{details.title}</h2>

    </div>
  )
}
