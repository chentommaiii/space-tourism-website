import React from 'react'
import "../../../App.css"
import "./Home.css"
import Button from '../../Button'
import {useEffect} from 'react'
import $ from 'jquery'

const Home = () => {

    // Add page class to body to apply background image
    const setHomePage = () => {
        $("body").removeClass()
        $("body").addClass("home-page")

        // Not ideal way to do this
        $(".nav-item").removeClass("active")
        $(".nav-item").eq(0).addClass("active")
    }

    // Call function during first render => useEffect
    useEffect(() => {
        setHomePage()
    }, [])

    return (
        <>
            <div className="grid-container grid-container--home">
                    <div className="home-intro-container flow">
                        <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
                        <span className="fs-900 ff-serif text-white d-block">Space</span></h1>
                        <p>Let’s face it; if you want to go to space, 
                            you might as well genuinely go to outer space 
                            and not hover kind of on the edge of it. Well sit back, 
                            and relax because we’ll give you a truly 
                            out of this world experience!</p>
                    </div>
                    <Button path="/" text="Explore" buttonStyle="btn--large" resourceClass="uppercase ff-serif fs-600 text-dark bg-white" />
            </div>
        </>
    )
}

export default Home
