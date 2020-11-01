import React, { Component } from 'react'
import "./Portfolio_Homepage.css"
import profilePic from "../Images/logos/profilePic.jpeg"
import Contact_Logos from "./Contact_Logos"
import reactLogo from "../Images/logos/reactLogo.png"
import reduxLogo from "../Images/logos/reduxLogo1.png"
import flaskLogo from "../Images/logos/flaskLogo.png"
import profilePicAlt from "../Images/profilePicAlt.png"
import svgLogo from "../Images/logos/svgLogo.png"
import jsLogo from "../Images/logos/jsLogo.png"
import htmlLogo from "../Images/logos/htmlLogo.png"
import exchangeRate from "../Images/exchangeRate.PNG"
import sortVisualizer from "../Images/sortVisualizer.PNG"
// import {TimelineLite, TweenLite} from "gsap/all"
import {ReactComponent as ReactLogo} from "../Images/logos/IntroName.svg"
import {ReactComponent as ReactLogo1} from "../Images/logos/IntroName1.svg"
// import gsap from "react-gsap"
// import gsap from "gsap/all"
import {TimelineLite , TweenLite} from "gsap/all"

class Portfolio_Homepage extends Component {

    constructor(){
        super();
        this.tween= new TimelineLite();
        this.state={
            aboutSection:0,
            workSection:0,
            stackSection:0,
            burgerToggler: false,
            Infosys:true,
            Infosys_Trainee:false,
            DRDO:false,
            TnP:false
        }
        this.handleClick = this.handleClick.bind(this)
        this.burgerToggler = this.burgerToggler.bind(this)
    }

    componentDidMount(){
        // this.tween = TweenLite.from(this.about, 1, {y:90, opacity:0})

        // gsap.from(".intro", {duration:2, y:300, opacity:0})

        this.tween.from(".header1", {opacity:0, duration:0.5})
        this.tween.from(".header2", {opacity:0,  delay:1.5})
        this.tween.from(".nav", {opacity:0})
        this.tween.from(".sub-header", {opacity:0})
        // this.tween.from(".line", {y:-100, opacity:0, stagger:0.1})
        this.tween.from(".navbar-item", {y:-100, opacity:0, stagger:0.25})
        this.tween.from(".nav-left", {opacity:0, y:-100})
        this.tween.from(".contact-left", {opacity:0}, "+=0")
        this.tween.from(".contact-right", {opacity:0}, "+=0")

        const logoData = document.querySelectorAll("#intro svg path")
        for(var i=0; i<logoData.length; i++){
            console.log(logoData[i].getTotalLength())
        }
        window.addEventListener("scroll", ()=>{
            var value = window.scrollY;
            if(value>=200 && value<=800){
                console.log("Info");
                this.setState((prevState)=>{
                    return{
                        ...prevState,
                        aboutSection:prevState.aboutSection+1
                    }    
                })
                window.removeEventListener("scroll",()=>{
                    return;
                })
            }
            else if(value>=800 && value<=1500){
                console.log("Work Experience");
                this.setState((prevState)=>{
                    return{
                        ...prevState,
                        workSection:prevState.workSection+1
                    }    
                })
                window.removeEventListener("scroll",()=>{
                    return;
                })
            }
            else if(value>=1500){
                console.log("Tech Stack");
                this.setState((prevState)=>{
                    return{
                        ...prevState,
                        stackSection:prevState.stackSection+1
                    }    
                })
                window.removeEventListener("scroll",()=>{
                    return;
                })
            }
        })


    }

    componentDidUpdate(){
        console.log(this.state.aboutSection)
        // if(this.state.aboutSection ===1){
        //     console.log("About"+this.state.aboutSection)
        //     TweenLite.from(this.about, 2, {y:200, opacity:0})
        // }

        // if(this.state.workSection ===1){
        //     console.log("About"+this.state.aboutSection)
        //     TweenLite.from(this.work, 2, {y:500, opacity:0})
        // }

        // if(this.state.stackSection ===1){
        //     console.log("About"+this.state.aboutSection)
        //     TweenLite.from(this.stack, 2, {y:800, opacity:0})
        // }
    }

    handleClick(e){
        e.preventDefault();
        console.log(e.target.getAttribute("name"));
        const name=e.target.getAttribute("name")
        this.setState({
            Infosys:false,
            Infosys_Trainee:false,
            DRDO:false,
            TnP:false,
            [name]:true

        } , ()=>{
            console.log(this.state)
        })
    }

    burgerToggler(){
        console.log("Burger Clicked!!!")
        const updatedValue = !(this.state.burgerToggler)
        this.setState({
            burgerToggler:updatedValue
        }, ()=>{
            console.log(updatedValue)
        })
        
    }


    render() {
        return (
            <div className="sojol">
                <div className="nav">
                    <div className="nav-left">
                        <a>Home</a>
                    </div>
                    
                    <div className="nav-right">
                        {/* <div><a href="#intro">Home</a></div> */}
                        <div className="navbar-item"><a href="#about">About</a></div>
                        <div className="navbar-item"><a href="#work">Experience</a></div>
                        <div className="navbar-item"><a href="#stack">Stack</a></div>
                        <div className="navbar-item"><a href="#projects">Projects</a></div>
                    </div>

                    <div className={this.state.burgerToggler?"burger toggle":"burger"} onClick={this.burgerToggler}>
                        <div className="line1 line"></div>
                        <div className="line2 line"></div>
                        <div className="line3 line"></div>

                        <div className={this.state.burgerToggler?"burger-items burger-active": "burger-items"}>
                            <div className="burger-item"><a href="#about">About</a></div>
                            <div className="burger-item"><a href="#work">Experience</a></div>
                            <div className="burger-item"><a href="#stack">Stack</a></div>
                            <div className="burger-item"><a href="#projects">Projects</a></div>
                            <div className="burger-item"><a href="#projects">Github</a></div>
                            <div className="burger-item"><a href="#projects">LinkedIn</a></div>
                        </div>
                        
                    </div>

                    
                    
                </div>
                <div ref={(input)=>this.intro=input} id="intro" className="intro">
                    <h1 className="header1">Hi, I'm</h1>
                    <div>
                    <ReactLogo1 />
                    </div>
                     
                    <h1 className="header2">and I build things for the Internet</h1> 
                    <br></br>
                    <br></br>
                    <p className="sub-header">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>                    
                </div> 
                
                
                <div className="contact-left">
                    <Contact_Logos/>
                    <svg >
                        <path stroke="#b2ddf7" d="M25 05 L 25 150" strokeWidth="1px"/>
                    </svg>
                </div>

                <div className="contact-right">
                    <a href="#">sojolbose@gmail.com</a>
                    <svg>
                        <path  stroke="#b2ddf7" d="M10 12 L80 12" strokeWidth="1px"/>
                    </svg>
                </div>

                <div ref={(input)=>this.about=input} id="about" className="about">
                    <div className="about-text">
                        <div>
                            I'm a web developer based out of planet earth.
                            My work emphasises on building responsive , interactive and stunning looking web-sites
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </div>
                    </div>

                    <div className="profile-pic">
                        {/* <img id="profile_pic" src={profilePic} /> */}

                    </div>
                    
                </div>

                <div ref={(input)=>this.work=input} id="work" className="work">
                    <h2>Where I've worked 
                        {/* <svg width="200px" height="20px"> <path fill="none" strokeWidth="1px" stroke="#a4def9" d="M00 10 L200 10"/></svg> */}
                    </h2>
                    <br></br>
                    <div className="experience-wrapper">
                        <div className="tabs">
                            <a href="#">
                                <div className={this.state.Infosys?"activeDiv":"none"}   name="Infosys" onClick={this.handleClick}>Infosys</div>
                            </a>
                            <a href="#">
                                <div className={this.state.Infosys_Trainee?"activeDiv":"none"}  name="Infosys_Trainee" onClick={this.handleClick}>Infosys Trainee</div>
                            </a>
                            <a href="#">
                                <div className={this.state.DRDO?"activeDiv":"none"}  name="DRDO" onClick={this.handleClick}>DRDO</div>
                            </a>
                            <a href="#">
                                <div className={this.state.TnP?"activeDiv":"none"}  name="TnP" onClick={this.handleClick}>TnP</div>
                            </a>
                        </div>
                        <br></br>
                        <div className="desc">
                            <div name="Infosys desc-item"  style={{"display":this.state.Infosys?"flex" : "none", "flexDirection":this.state.Infosys?"column":"none", "flexWrap":"wrap"}}>
                                <div>System Engineer <span>@Infosys</span></div>
                                <h4>Web Development</h4>
                                <ul>
                                    <li>Built data visualization and monitoring dashboards using React JS, Redux libraries and SVG for graphics programming that
                                    kept real-time server health checks using data from an infrastructure monitoring tool (SolarWinds)</li>
                                    <li>Interfaced Infosys’ Cloud services tool IMSS with ServiceNow and SolarWinds to create service desk tickets based on
                                    memory and CPU usage thresholds for servers and network devices</li>
                                </ul>
                                <br></br>
                                <h4>Automation</h4>
                                <ul>
                                    <li>Automated business processes, e.g. daily and weekly reporting tasks by using third party API’s which resulted in faster
                                    problem identification and reduced business impact</li>
                                    <li>Automated administrative tasks in MS Active Directory using LDAP and Python</li>
                                    <li>Strategized and optimized internal audit procedure by automating manual data entry using Python MS excel libraries</li>
                                </ul>
                            </div>
                            <div name="Infosys_Trainee" style={{"display":this.state.Infosys_Trainee?"flex" : "none", "flexDirection":this.state.Infosys?"column":"none"}}>
                                <div>System Engineer Trainee <span>@Infosys</span></div>
                                <ul>
                                    <li>Hands on experience working with REST and SOAP API’s</li>
                                    <li>Built a JAVA EE application using Spring Boot framework and AngularJS
                                    </li>
                                </ul>
                            </div>
                            <div name="DRDO"  style={{"display":this.state.DRDO?"flex" : "none", "flexDirection":this.state.Infosys?"column":"none"}}>
                                <div>Research Intern <span>@SSPL,DRDO</span></div>
                                <ul>
                                    <li>Point 1</li>
                                    <li>Point 2</li>
                                    <li>Point 3</li>
                                    <li>Point 4</li>
                                </ul>
                            </div>
                            <div name="TnP"  style={{"display":this.state.TnP?"flex" : "none", "flexDirection":this.state.Infosys?"column":"none"}}>
                                <div>Placement Executive <span>@Placement Cell, GNDEC</span></div>
                                <ul>
                                    <li>Point 1</li>
                                    <li>Point 2</li>
                                    <li>Point 3</li>
                                    <li>Point 4</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div ref={(input)=>this.stack=input} className="stack-wrapper">
                    <h2>My Technology Stack 
                        {/* <svg width="200px" height="20px"> <path fill="none" strokeWidth="1px" stroke="#a4def9" d="M00 10 L200 10"/></svg> */}
                    </h2>
                    <div className="stack">
                        <div className="card">
                            <img src={reactLogo} />
                            <br></br>
                            <div className="card-header">
                                <h3>React</h3>
                                <ul>
                                    <li>2 years of experience working with React</li>
                                    <li>Built multiple data visualization and monitoring dashboards using React</li>
                                    <li>Built a portfolio website based on React</li>
                                    <li>Built a currency plotter application in React</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <img src={reduxLogo} />
                            <br></br>
                            <div className="card-header">
                                <h3>Redux</h3>
                                <ul>
                                    <li>1+ years of experience working with Redux and redux-related libraries</li>
                                    <li>Used redux's state management to manage different states for different dashboard views</li>
                                    <li>Created a sort algorithm visualizer application using React JS and Redux</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <img src={jsLogo} />
                            <br></br>
                            <div className="card-header">
                                <h3>JavaScript</h3>
                                <ul>
                                    <li>2.5 years of experience in Javascript</li>
                                    <li>Excellent functional knowlegde of Object-oriented JS</li>
                                    <li>Experience working with Rest API's and not afraid of working with asynchronous JavaScript</li>
                                </ul>
                            </div>
                        </div> 

                        <div className="card">
                            <img src={htmlLogo} />
                            <br></br>
                            <div className="card-header">
                                <h3>HTML CSS</h3>
                                <ul>
                                    <li>2 years of experience working on HTML and CSS</li>
                                    <li>Experience in creating interactive and responsive websites and web applications</li>
                                    <li>Designed and developed my responsive portfolio website using pure CSS and JS</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <img src={svgLogo} />
                            <br></br>
                            <div className="card-header">
                                <h3>D3</h3>
                                <ul>
                                    <li>1 year of experience working in D3.js</li>
                                    <li>Developed multiple dashboard views and data visualizations for infrastructure support using D3.js</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <img src={flaskLogo} />
                            <br></br>
                            <div className="card-header">
                                <h3>Flask</h3>
                                <ul>
                                    <li>0.5 years of experience working with Flask</li>
                                    <li>Created a microblogging website with a robust back-end using Flask framework</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects">
                    <h1>My Personal Projects</h1>
                    <div>
                        <p>
                            Created a Sorting Algorithm visualizer application visualizing Bubble, Selection, Merge and Quick sort 
                            techniques with a scalable dataset.
                            <br></br>
                            <br></br>
                            <ul className="project-tech">
                                <li>React JS</li>
                                <li>Redux</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </p>
                        {/* <img src={sortVisualizer}/> */}
                        <div className="sortVisualizer project-image">
                            <div className="inside-image">
                                <a>Go to Github Source</a>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        {/* <img src={exchangeRate} /> */}
                        <div className="exchangeRate project-image">
                            <div className="inside-image">
                                <a>Go to Github Source</a>
                            </div>
                        </div>
                        <p>
                            Created an Exchange Rate Graph Plotter application for different currency rate comparisons with time period
                            scalable to upto ten years.
                            <br></br>
                            <br></br>
                            <ul className="project-tech">
                                <li>React JS</li>
                                <li>D3.js</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SVG</li>
                            </ul>
                        </p>
                    </div>
                    
                    

                </div>
                
            
                
            </div>
        )
    }
}

export default Portfolio_Homepage
