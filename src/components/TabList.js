import React from 'react'
import "../App.css"
import $ from 'jquery'
import {useEffect} from 'react'

const STYLES = ['tab-list-destination']

const TabList = ({tabListStyle, updateTab}) => {
    const checkTabListStyle = STYLES.includes(tabListStyle) ? (tabListStyle) : ""

    useEffect(() => {
        const selectTab = () => {
            // Highlight numbered dot when selected
            for (var i = 0; i < $(".tab").length; i++){
                $(".tab:eq(" + i + ")").on("click", function() {
                    $(".tab").removeClass("active")
                    $(this).addClass("active")
                    updateTab($(this).index())
                });
             }
        }

        selectTab()
    })

    return (
        <ul className={`tab-list underline-indicators ${checkTabListStyle}`}>
            <li className="tab active">Moon</li>
            <li className="tab">Mars</li>
            <li className="tab">Europa</li>
            <li className="tab">Titan</li>
        </ul>
    )
}

export default TabList
