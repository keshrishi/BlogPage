import React, { useContext, useEffect } from 'react';
import {Header} from './components/Header';  // Import Header component
import {Blogs} from './components/Blogs';    // Import Blogs component
import {Pagination} from './components/Pagination';  // Import Pagination component
import { AppContext } from './context/AppContext';
import "./App.css"
export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  },[])
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
