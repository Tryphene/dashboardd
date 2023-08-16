import React, { useState } from 'react'
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsPersonGear } from 'react-icons/bs';
import { SlPeople } from 'react-icons/sl';
import "../App.css"
import { Link, Outlet, } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { LiaBookSolid, LiaChalkboardTeacherSolid } from 'react-icons/lia';


 const Sidebar = () => {
    const links = [
          {
            title: "Dashboard",
            to: "/",
            icon: <LuLayoutDashboard />,
            size: 20,
          },
          {
            title: "Les facturiers",
            to: "/",
            icon: <BsPersonGear />,
            size: 23,
          },
          {
            title: "Les clients",
            to: "/",
            icon: <SlPeople />,
            size: 20,
          },
          {
            title: "Espace Pub",
            to: "/",
            icon: <LiaBookSolid />,
            size: 20,
          },
          {
            title: "Messagerie",
            to: "/",
            icon: <LiaChalkboardTeacherSolid />,
            size: 20,
          },
          {
            title: "Gérer les comptes",
            to: "/",
            icon: <LiaChalkboardTeacherSolid />,
            size: 20,
          },
   ];

   if (!localStorage.getItem("select")) {
     localStorage.setItem("select", 0)
   }
     let selectStorage = parseInt(localStorage.getItem("select"));
   let [select, setSelect] = useState(selectStorage);


   

   return (
     <>
           <div className=''>
             <div className="sidebar">
               {/* <Link to={"/"}> */}
               <div className="contain-logo">
                 {/* <img className="" width={70} alt='Logo' src={Logo} /> */}
                 <p className="p">ADMINISTRATION</p>
               </div>
               {/* <hr className="border border-secondary border-1 opacity-50"></hr> */}
               {/* <hr /> */}
              {/* </Link> */}
           {links.map((link, index) => {
             return (
                  <Link to={link.to} onClick={(() => { setSelect(index); localStorage.setItem("select", index); })} className={select === index ? "sidebar-item active" : "sidebar-item"} key={index} style={{ fontSize: `${link.size}px`, }}>
                      <div className="sidebar-icon" >{link.icon}</div>
                      <div className="sidebar-title fw-semibold">{link.title}</div>
                    </Link>
                )
           })}
                   <div className="bas" style={{ color: "black", borderRadius: 0, fontSize: 12 }}> 
                       <p className='text-center fw-bolder my-0' style={{ fontSize: 13 }}>Gestionnaire de facture</p>
                       <p className='text-center text-muted my-0'>&copy; 2023 Tous droits réservés</p>
                       <p className='text-center text-muted'>Développe pas <span style={{color: '#ED7900'}}>Propulse Group</span></p>
                   </div>
               </div>
         <div className="content">
              <Outlet/>
         </div>
         {/* style={{ backgroundColor: "#f7f7ff"}} */}
         </div>
     </>
  )
}

export default Sidebar
