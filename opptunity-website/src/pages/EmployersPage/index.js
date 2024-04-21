import NavBar from "../../components/NavBar";
import styles from './employer.module.css';
import face1 from './assets/firstgirl.png';
import face2 from './assets/firstgirl.png';
import face3 from './assets/firstgirl.png';
import comp1 from './assets/firstgirl.png';
import comp2 from './assets/firstgirl.png';
import loop from './assets/firstgirl.png';
import education from './assets/firstgirl.png';
import world from './assets/firstgirl.png';
import woman from './assets/firstgirl.png';
import computer from './assets/computer.png';
import partners from './assets/partners.png'

import Footer from "../../components/Footer";


function EmployerPage() {
    return (
        <>
            <NavBar />
            <center><div className={`d-flex justify-content-center align-items-start w-100 `}>
                <div className="container">
                    <div className="row">
                        {/* Text Column - Full width on small screens, adjusts as needed on larger screens */}
                        <div className="col-12 col-md-8  mt-5 text-start">
                            <h1>Take control, improve your hiring</h1>
                            <p>Struggle to find qualified candidates or navigate the hiring process? Opptunity is your one-stop solution. Our platform connects recruiters with top talent, simplifies matching, and offers assessment tools to ensure a perfect fit.</p>
                            <input type="button" className={`${styles.btn} btn btn-primary `} value='Start the process' />
                        </div>

                        {/* Image Column - Full width on small screens, adjusts as needed on larger screens */}
                        <div className="col-12 col-md-4">
                            <img src={comp2} className="img-fluid" alt="Company Image"></img>
                        </div>
                    </div>
                </div>
            </div>
            </center>



            <div className={`d-flex justify-content-around  ${styles.partnersband}`}>
                <p>logo1</p>
                <p>logo2</p>
                <p>logo3</p>
                <p>logo4</p>
                <p>logo5</p>
                <p>logo6</p>
                <p>logo7</p>


            </div>

            <center><div className={`d-flex  w-50 mt-5 text-start justify-content-between`}>
                <div>
                    <h2>250K</h2>
                    <p>More writing and <br />stuff.</p>
                </div>
                <div>
                    <h2>250K</h2>
                    <p>More writing and <br /> stuff.</p>
                </div>
                <div>
                    <h2>250K</h2>
                    <p>More writing and <br />stuff.</p>
                </div>
            </div></center>

            <center><div className={`d-flex justify-content-center w-75 ${styles.employers}`}>
                <div className="container">
                    <div className="row">
                        {/* Text Column - takes full width on small screens, and an adjusted width on larger screens */}
                        <div className="col-12 col-lg-8  text-start">
                            <h1>Why Opptunity</h1>
                            <p>Scale your business with the best talents.</p>
                            <p>Opptunity bridges borders. We assist with visa sponsorships, ensuring a smooth relocation process for talented individuals. Recruiters can tap into a global pool of talent, while candidates can explore career opportunities worldwide.</p>
                            <input type="button" className={`${styles.btn} btn btn-primary `} value='Candidate space' />
                        </div>

                        {/* Image Column - takes full width on small screens, and an adjusted width on larger screens */}
                        <div className="col-12 col-lg-4">
                            <img src={computer} className="img-fluid" alt="Opptunity Platform" />
                        </div>
                    </div>
                </div>
            </div>
            </center>








            <div className={`${styles.quotes}`}>
                <h1 className={`${styles.quotestitle}`}>Business Quotes</h1>
                <p>Opptunity helped us elevate our hiring process extensively, I highly recommend their services</p>
                <div>
                    <img></img>
                    <p>Manager by apple california inc.</p>
                </div>
            </div>


            <center><div className={`d-flex  mt-5 align-items-stretch text-start w-100 align-items-center container  `}>
                <div className="row">

                    <img src={partners} className="col-12 col-md-6"></img>


                    <div className=" col-md-6 col-12 mt-5 ">
                        <h2 className="mt-3">Trusted partners</h2>
                        <p>Scale your buisness with the best talents</p>
                        <p>
                            At Opptunity, we recognize the power of collaboration. That's why we partner with leading organizations who share our passion for fostering exceptional talent experiences. Together, we combine our expertise to offer a comprehensive suite of services, from skills assessments and upskilling resources to seamless visa sponsorship solutions.
                        </p>
                    </div>
                </div>

            </div></center>
            <Footer />
        </>
    )
}
export default EmployerPage