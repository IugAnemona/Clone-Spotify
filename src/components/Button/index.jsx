import { Component } from 'react'
import '../../App.css'

export class Btn extends Component {
    render() {
        return(
            <a href='google.com' className='bg-green-main hover:bg-white text-purple-main text-sm rounded-full
                    px-10 py-3 uppercase font-bold max-w-xl mx-auto tracking-widest
                    transition duration-500'>Obtenha o Spotify Free</a>
        )
    }
}