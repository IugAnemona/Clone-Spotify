import { Component } from "react";
import Logo from "../img/spotify-logo.png";
//import '../../App.css'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="grid grid-cols-1 md:grid-cols-6 bg-black text-white p-4 md:p-20">
          <div className="md:col-span-1 pt-10 md:pt-0">
            <a href="google.com">
              <img src={Logo} alt="Spotify" className="w-20 md:w-132px"></img>
            </a>
          </div>
          <div className="md:col-span-1 pt-10 md:pt-4">
            <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">Empresa</h3>
            <ul>
                <li className="mb-5"><a href="google.com">Sobre</a></li>
                <li className="mb-5"><a href="google.com">Empregos</a></li>
                <li className="mb-5"><a href="google.com">For the Record</a></li>
            </ul>
          </div>
          <div className="md:col-span-1 pt-10 md:pt-4">
            <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">Comunidades</h3>
            <ul>
                <li className="mb-5"><a href="google.com">Para Artistas</a></li>
                <li className="mb-5"><a href="google.com">Desenvolvedores</a></li>
                <li className="mb-5"><a href="google.com">Publicidade</a></li>
                <li className="mb-5"><a href="google.com">Investidores</a></li>
                <li className="mb-5"><a href="google.com">Fornecedores</a></li>
            </ul>
          </div>
          <div className="md:col-span-1 pt-10 md:pt-4">
            <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">Comunidades</h3>
            <ul>
                <li className="mb-5"><a href="google.com">Ajuda</a></li>
                <li className="mb-5"><a href="google.com">Player da web</a></li>
                <li className="mb-5"><a href="google.com">Aplicativo móvel grátis</a></li>
            </ul>
          </div>
          <div className="md:col-span-2 pt-10 md:pt-4">
            <ul className="flex md:justify-end">
                <li className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
                    <a href="google.com"><i className="fab fa-instagram"></i></a>
                </li>
                <li className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
                    <a href="google.com"><i className="fab fa-twitter"></i></a>
                </li>
                <li className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
                    <a href="google.com"><i className="fab fa-facebook-f"></i></a>
                </li>
            </ul>
          </div>
          <div className="md:col-span-4 mt-20">
            <ul>
                <li className="inline-block text-xs text-gray-600 mr-4"><a href="google.com">Legal</a></li>
                <li className="inline-block text-xs text-gray-600 mr-4"><a href="google.com">Centro de Privacidade</a></li>
                <li className="inline-block text-xs text-gray-600 mr-4"><a href="google.com">Política de Privacidade</a></li>
                <li className="inline-block text-xs text-gray-600 mr-4"><a href="google.com">Cookies</a></li>
                <li className="inline-block text-xs text-gray-600 mr-4"><a href="google.com">Sobre anúncios</a></li>
            </ul>
          </div>
          <div className="md:col-span-2 mt-20">
            <div>
                <p className="flex justify-end text-gray-500 text-xs">&copy; 2023 Spotify AB</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
