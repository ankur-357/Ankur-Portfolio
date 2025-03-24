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
            <div className="about-section">
                <div className="about-left">
                    <img src={Profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;