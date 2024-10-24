
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';



function App() {




  return (
    <>

      <MainLayout>
        <Outlet />
      </MainLayout>




    </>
  )
}

export default App
