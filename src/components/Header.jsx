import React, {useState, useContext} from 'react';
import NavDrawer from './NavDrawer'
import NavBar from './NavBar';
import {Context} from './NavContext'

export default function Header() {
const [abrir, setAbrir] = useContext(Context)
  const desplegar = () =>{
      setAbrir(!abrir)
  }
  return (
    <>
      <NavBar openNav={desplegar} open={abrir} />
      <NavDrawer closeNav={desplegar} open={abrir}/>
    </>
  );
}