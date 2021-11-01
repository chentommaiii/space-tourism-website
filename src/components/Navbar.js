import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import "../App.css"
import "./Navbar.css"
import $ from 'jquery'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [tablet, setTablet] = useState(false)
    const [desktop, setDesktop] = useState(false)

    const onClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const checkScreenSize = () => {
        if($(window).width() <= 600) {
            setTablet(false)
            setDesktop(false)
        } else if ($(window).width() <= 1025){
            setTablet(true)
            setDesktop(false)
        } else {
            setTablet(false)
            setDesktop(true)
        }
    }

    // const selectPage = () => {
    //     // Highlight checkbox when selected
    //     for (var i = 0; i < $(".nav-links").length; i++){
    //         $(".nav-links:eq(" + i + ")").on("click", function() {
    //             $(".nav-item").removeClass("active")
    //             $(this).parent().addClass("active");
    //         });
    //     }
    // }

    // Call function during first render => useEffect
    useEffect(() => {
        checkScreenSize()
        // selectPage()
    }, [])

    window.addEventListener('resize', checkScreenSize)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container flex">
                    <Link className="nav-logo" 
                    to="/" 
                    onClick={closeMobileMenu}>
                        <img src="./assets/shared/logo.svg" alt="nav-logo" />
                    </Link>
                    <div className="menu-icon" onClick={onClick}>
                        <div className={click ? 'menu-open' : 'menu-close'}>
                            <img className="close-icon" src="../assets/shared/icon-close.svg" alt="close-icon" />
                            <img className="burger-icon" src="../assets/shared/icon-hamburger.svg" alt="burger-icon" />
                        </div>
                    </div>
                    {desktop && <div className="nav-line-deco"></div>}
                    <ul className={click ? 'nav-menu active bg-nav' : ((desktop || tablet) ? 'nav-menu flex bg-nav underline-indicators' : 'nav-menu bg-nav')}>
                        <li className="nav-item flex active">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                <p className="nav-text"><span>00</span> Home</p>
                            </Link>
                        </li>
                        <li className="nav-item flex">
                            <Link to="/destination" className="nav-links" onClick = {closeMobileMenu}>
                                <p className="nav-text"><span>01</span> Destination</p>
                            </Link>
                        </li>
                        <li className="nav-item flex">
                            <Link to="/crew" className="nav-links" onClick={closeMobileMenu}>
                                <p className="nav-text"><span>02</span>Crew</p>
                            </Link>
                        </li>
                        <li className="nav-item flex">
                            <Link to="/technology" className="nav-links" onClick={closeMobileMenu}>
                                <p className="nav-text"><span>03</span>Technology</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
