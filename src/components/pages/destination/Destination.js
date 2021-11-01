import React from 'react'
import "../../../App.css"
import "./Destination.css"
import TabList from '../../TabList'
import {useState,useEffect} from 'react'
import $ from 'jquery'
import axios from "axios";

const Destination = () => {
    const [post, setPost] = useState(null)
    const [tab, setTab] = useState(0)

    // Add page class to body to apply background image
    const setDestPage = () => {
        $("body").removeClass()
        $("body").addClass("destination-page")

        // Not ideal way to do this
        $(".nav-item").removeClass("active")
        $(".nav-item").eq(1).addClass("active")
    }

    const updateTab = (i) => {
        setTab(i)
    }

    // Call function during first render => useEffect
    useEffect(() => {
        setDestPage()
        axios.get('data.json').then((response) => {
            // console.log(response.data)
            setPost(response.data)
          });
    }, [])

    if (!post) return null;

    return (
    <div>
        <div className="grid-container grid-container--destination">
            <div>
                <h2 className="numbered-title"><span>01</span>Pick your destination</h2>
                <img className="img-planet" src={post.destinations[tab].images.png} alt="moon" />
            </div>
            <div>
                <TabList tabListStyle="tab-list-destination" updateTab={updateTab} />
                <div className="dest-intro-container">
                    <h1 className="fs-800 ff-serif uppercase text-white">{post.destinations[tab].name}</h1>
                    <p>{post.destinations[tab].description}</p>
                </div>
                <div className="dest-info-container">
                    <div className="dest-info-item">
                        <h5 className="ff-sans-cond fs-300 uppercase letter-spacing-3">Avg. distance</h5>
                        <span className="ff-serif uppercase text-white">{post.destinations[tab].distance}</span>
                    </div>
                    <div className="dest-info-item">
                        <h5 className="ff-sans-cond fs-300 uppercase letter-spacing-3">Est. travel time</h5>
                        <span className="ff-serif uppercase text-white">{post.destinations[tab].travel}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Destination