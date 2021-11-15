import React from 'react'
import "../../../App.css"
import "./Crew.css"
import DotIndicator from '../../DotIndicator'
import {useState, useEffect} from 'react'
import $ from 'jquery'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import axios from 'axios'

const Crew = () => {
    const [post, setPost] = useState(null)
    const [tab, setTab] = useState(0)

    // Add page class to body to apply background image
    const setCrewPage = () => {
        $("body").removeClass()
        $("body").addClass("crew-page")

        // Not ideal way to do this
        $(".nav-item").removeClass("active")
        $(".nav-item").eq(2).addClass("active")
    }

    const updateTab = (i) => {
        setTab(i)
    }

    // Call function during first render => useEffect
    useEffect(() => {
        setCrewPage()
        axios.get('data.json').then((response) => {
            // console.log(response.data)
            setPost(response.data)
          });
    }, [])

    if (!post) return null;

    return (
        <HelmetProvider>
            <Helmet>
                <title>Space Tourism | Crew</title>
            </Helmet>
            <div className="grid-container grid-container--crew">
                <h5 className="numbered-title"><span>02</span>Meet your crew</h5>
                <div className="crew-intro-container flow">
                    <div>
                        <h2 className="ff-serif fs-600 uppercase text-semi-trans">{post.crew[tab].role}</h2>
                        <h1 className="ff-serif fs-subtitle uppercase text-white">{post.crew[tab].name}</h1>
                    </div>
                    <p>{post.crew[tab].bio}</p>
                </div>
                <DotIndicator dotIndicatorStyle="dot-indicator--crew" updateTab={updateTab} />
                <div className="img-crew">
                    <img src={post.crew[tab].images.png} alt="Crew" />
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Crew
