import React from 'react'
import "../App.css"
import $ from 'jquery'
import {useEffect} from 'react'

const STYLES = ["dot-indicator--crew"]

const DotIndicator = ({dotIndicatorStyle, updateTab}) => {
    const checkDotIndicatorStyle = STYLES.includes(dotIndicatorStyle) ? (dotIndicatorStyle) : ''

    useEffect(() => {
        const selectDot = () => {
            // Highlight checkbox when selected
            for (var i = 0; i < $(".dot-indicator-btn").length; i++){
                $(".dot-indicator-btn:eq(" + i + ")").on("click", function() {
                    $(".dot-indicator-btn").removeClass("active")
                    $(this).addClass("active")
                    updateTab($(this).index())
                });
             }
        }

        selectDot()
    })

    return (
            <>
                <div className={`dot-indicators flex ${checkDotIndicatorStyle}`}>
                    <button className="dot-indicator-btn active"><span className="sr-only">Slide title</span></button>
                    <button className="dot-indicator-btn"><span className="sr-only">Slide title</span></button>
                    <button className="dot-indicator-btn"><span className="sr-only">Slide title</span></button>
                    <button className="dot-indicator-btn"><span className="sr-only">Slide title</span></button>
                </div>
            </>
    )
}

export default DotIndicator
