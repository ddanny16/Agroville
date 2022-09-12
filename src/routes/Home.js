import React from 'react'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar' 
import Background from "../assets/cows.svg"
import { FaSearch } from "react-icons/fa"

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImg img={Background} heading="Local. Natural. Sustainable" text=""  btn={<FaSearch size={20} style={{
                                color: "#fff",
                                marginRight: "0rem",
                            
                            

                            }} />} />

        </div>
    )
}

export default Home