import React from 'react'
import "./Technology.css"
import "../../../App.css"
import NumberedDotIndicator from '../../NumberedDotIndicator'
import {useState, useEffect} from 'react'
import $ from 'jquery'
import axios from 'axios'

const Technology = () => {
    const [post, setPost] = useState(null)
    const [content, setContent] = useState(0)
    // Add page class to body to apply background image
    const setTechPage = () => {
        $("body").removeClass()
        $("body").addClass("tech-page")

        // Not ideal way to do this
        $(".nav-item").removeClass("active")
        $(".nav-item").eq(3).addClass("active")
    }

    const updateContent = (tab) => {
        setContent(tab)
    }

    // Call function during first render => useEffect
    useEffect(() => {
        setTechPage()
        axios.get('data.json').then((response) => {
            console.log(response.data)
            setPost(response.data)
          });
    }, [])

    if (!post) return null;

    return (
        <div className="grid-container grid-container--technology">
            <h5 className="numbered-title"><span>03</span>Space launch 101</h5>
            <NumberedDotIndicator indicatorStyle="numbered-dot-indicator--tech" updateContent={updateContent} />
            <div className="tech-intro-container flow">
                <h1 className="ff-serif fs-subtitle uppercase text-white"><span className="ff-sans-cond fs-300 letter-spacing-3 text-light d-block">The terminology…</span>{post.technology[content].name}</h1>
                <p>{post.technology[content].description}</p>
            </div>
            <div className="tech-img-container">
                <img className="portrait" src={post.technology[content].images.portrait} alt="technology-portrait" />
                <img className="landscape" src={post.technology[content].images.landscape} alt="technology-landscape" />
            </div>
        </div>
    )
}

export default Technology
