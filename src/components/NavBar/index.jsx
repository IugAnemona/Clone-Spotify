import { Component } from "react";
import "../../App.css";
import Logo from "../img/spotify-logo.png";

export class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="flex fixed bg-black w-full px-3 md:px-20 py-4">
          <div className="container flex items-center mx-auto">
          <div>
            <a href="#home">
              <img src={Logo} alt="spotify" className="w-20 md:w-125px"></img>
            </a>
          </div>
          <div className="flex justify-end flex-1 md:hidden text-white text-3xl">
            <i className="fas fa-bars"></i>
          </div>
          <div className="items-end flex-1 text-white font-bold hidden md:flex">
            <nav className="flex-1">
              <ul className="flex justify-end flex-1">
                <li className="px-4">
                  <a href="#home" className="hover:text-hoverspt text-sm">Premium</a>
                </li>
                <li className="px-4">
                  <a href="#home" className="hover:text-hoverspt text-sm">Ajuda</a>
                </li>
                <li className="px-4">
                  <a href="#home" className="hover:text-hoverspt text-sm">Baixar</a>
                </li>
                <li className="px-4">
                  <span className="border-r border-white"></span>
                </li>
                <li className="px-4">
                  <a href="#home" className="hover:text-hoverspt text-sm">Inscrever-se</a>
                </li>
                <li className="px-4">
                  <a href="#home" className="hover:text-hoverspt text-sm">log In</a>
                </li>
              </ul>
            </nav>
          </div>
          </div>
        </div>
      </header>
    );
  }
}
