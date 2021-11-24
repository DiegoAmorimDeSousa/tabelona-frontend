import React from 'react';

import './Header.css';
import logo from '../../assets/logo_header.svg';
import swal from 'sweetalert2';

function Header() {

  const logout = () => {
    swal.fire({
      icon: 'atention',
      html: 'Você tem certeza que deseja sair da plataforma?',
      showCancelButton: true,
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim',
      reverseButtons: true
    }).then(result => {
      if(result.value){
        window.location.href = '/';  
      }
    })
  }

  return (
    <div className="container-header admin-use container-header">

     <a href="home"><img src={logo} alt="logo" /></a>
     <div className="logout" onClick={logout}>Logout</div>

    </div>
  )
}

export default Header