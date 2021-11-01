import React from 'react'
import "../App.css"
import $ from 'jquery'
import {useEffect} from 'react'

const STYLES = ['numbered-dot-indicator--tech']

const NumberedDotIndicator = ({indicatorStyle, updateContent}) => {

    const checkIndicatorStyle = STYLES.includes(indicatorStyle) ? (indicatorStyle) : ""

    useEffect(() => {
        const selectNumberedDot = () => {
            // Highlight numbered dot when selected
            for (var i = 0; i < $(".numbered-dot-indicator-btn").length; i++){
                $(".numbered-dot-indicator-btn:eq(" + i + ")").on("click", function() {
                    $(".numbered-dot-indicator-btn").removeClass("active")
                    $(this).addClass("active");
                    updateContent($(this).index())
                });
             }
        }

        selectNumberedDot()
    })

    return (
        <>
            <div className={`numbered-dot-indicator flex ${checkIndicatorStyle}`}>
                <button className="numbered-dot-indicator-btn active"><span>1</span></button>
                <button className="numbered-dot-indicator-btn"><span>2</span></button>
                <button className="numbered-dot-indicator-btn"><span>3</span></button>
            </div>
        </>
    )
}

export default NumberedDotIndicator
