import React from 'react'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import {FaGithubSquare} from '@react-icons/all-files/fa/FaGithubSquare'
import {FaTshirt} from '@react-icons/all-files/fa/FaTshirt'
import { IconContext } from 'react-icons';
import '../styles/global.scss'

const Test = () => {
    return (
        <div>
            <h1 className='working'>working</h1>
            <IconContext.Provider value={{ className: 'react-icons'}} >
                <FaTwitter />
            </IconContext.Provider>
                <FaGithubSquare/>
                <FaTshirt/>
        </div>
    )
}

export default Test
