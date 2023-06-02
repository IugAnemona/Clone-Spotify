import { Component } from 'react';
import '../../App.css'
import { Btn } from '../Button';

export class Content extends Component {
    render() {
        return (
            <main>
                <div className='flex flex-col justify-center text-center py-72 
                 px-4 bg-spotify-theme-mobile md:bg-spotify-theme bg-banner-mobile md:bg-banner bg-195% md:bg-175% bg-purple-main text-green-main'>
                    <h1 className='text-5xl md:text-9xl mb-10 font-bold max-w-4xl mx-auto '>Escutar muda tudo</h1>
                    <p className='text-md md:text-lg mb-10'>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito</p>
                    <Btn></Btn>
                </div>
            </main>
        )
    }
}