import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Profile_img from '../../assets/Profile_img.jpeg';
const About = () => {
    return(
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={Profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Frontend Developer with over 3 years of handson experience on personal small and mid level Projects.</p>
                        <p>My passion for frontend development is not only but also in the enthusiasm and dedication I bring to each Project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width: "60%"}}/></div>
                        <div className="about-skill"><p>Git & CI/CD</p><hr style={{width: "50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>Year of Experience</p>
                </div>
                <div className='hr'></div>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Projects Completed</p>
                </div>
                <div className='hr'></div>
                <div className='about-achievement'>
                    <h1>Fast Learner</h1>
                    <p>Top 3% in JEE Mains</p>
                </div>
            </div>
        </div>
    )
}

export default About;