import { Link } from 'react-router-dom'

import './Header.scss'

import Arrow from '../../assets/images/arrow-sm-right-svgrepo-com.svg'


export const Header = () => {
    return (
    <header className='headerContainer'>
        <div className='content'>
            <h1>NORDJYSK FØDEVAREOVERSKUD</h1>
            <h2>Vi gør en forskel for miljø og udsatte mennesker</h2>
            <button>
                <p>Bliv frivilig</p>
            </button>
           
        </div>
    </header>
    )
}