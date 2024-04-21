import NavBar from "../../components/NavBar";
import matching from './assets/matching.gif'
import styles from './homepage.module.css'
import face1 from './assets/face1.png'
import face2 from './assets/face2.png'
import face3 from './assets/face3.png'
import comp1 from './assets/component1.png'
import comp2 from './assets/component2.png'
import loop from './assets/loop.png'
import education from './assets/education.png'
import world from './assets/world.png'
import woman from './assets/woman.png'
import Footer from "../../components/Footer";


function HomePage() {
    return (
        <>
            <NavBar />
            <div className={`${styles.match} d-flex justify-content-center`}>
                <img src={matching} className="img-fluid" alt="Matching Image"></img>
            </div>

            <div className={`d-flex justify-content-center mt-5`}>
                <input className={`${styles.btn} btn btn-primary m-2`} type="button" value='Candidate space' />
                <input type="button" className="btn btn-outline-primary m-2" value='Employer space' />

            </div>
            <div className={`d-flex justify-content-around  ${styles.partnersband}`}>
                <p>logo1</p>
                <p>logo2</p>
                <p>logo3</p>
                <p>logo4</p>
                <p>logo5</p>
                <p>logo6</p>
                <p>logo7</p>


            </div>

            <div className="d-flex justify-content-center">
                <div className="text-center">
                    <span className={`${styles.rev}`}>
                        Revolutionizing
                        <img src={face3} alt="Face 3" className={`mx-2  ${styles.faces}`} />
                        the traditional workspace, our startup
                        <img src={face2} alt="Face 2" className={`mx-2 ${styles.faces}`} />
                        seamlessly integrates
                        <img src={face1} alt="Face 1" className={`mx-2 ${styles.faces}`} />
                        augmented reality and artificial intelligence
                    </span>
                </div>
            </div>


            <center><div className={`d-flex  align-items-stretch w-75   text-start mt-5 `}>
                <div className="row w-100">
                    {/* Image Column - takes full width on small screens, adjusts as needed on larger screens */}
                    <div className="col-12 col-md-6 ">
                        <img src={comp1} alt="Company Presentation" className="img-fluid  " />
                    </div>

                    {/* Text Column - takes full width on small screens, adjusts as needed on larger screens */}
                    <div className="col-12 col-md-6  mt-5">
                        <h1>For employers</h1>
                        <p>Scale your business with the best talents.</p>
                        <p>At Opptunity, we understand the value of a cohesive workforce. Our platform is dedicated to sourcing and training top-tier PSW (Personal Support Worker) talent, perfectly aligning with your organization's needs. We commit to not only finding your future employees but also preparing them to seamlessly integrate into your workforce and community.</p>
                        <input type="button" className="btn btn-outline-primary mt-2 mb-2" value="Employer space" />
                    </div>
                </div>
            </div></center>


            <center> <div className={`d-flex justify-content-between align-items-stretch w-75 mt-5 `}>
                <div className="row w-100">
                    {/* Text Column - Full width on small screens, adjusts as needed on larger screens */}
                    <div className="col-12 col-md-6 text-start">
                        <h1>For individuals</h1>
                        <p>Scale your business with the best talents.</p>
                        <p>At Opptunity, we understand the value of a cohesive workforce. Our platform is dedicated to sourcing and training top-tier PSW (Personal Support Worker) talent, perfectly aligning with your organization's needs. We commit to not only finding your future employees but also preparing them to seamlessly integrate into your workforce and community.</p>
                        <input type="button" className={`${styles.btn} btn btn-primary mt-2 mb-2`} value="Candidate space" />
                    </div>

                    {/* Image Column - takes full width on small screens, adjusts as needed on larger screens */}
                    <div className="col-12 col-md-6">
                        <img src={comp2} alt="Company Collaboration" className="img-fluid" />
                    </div>
                </div>
            </div></center>


            <div className={`${styles.quotes}`}>
                <h1 className={`${styles.quotestitle}`}>Business Quotes</h1>
                <p>Opptunity helped us elevate our hiring process extensively, I highly recommend their services</p>
                <div>
                    <img></img>
                    <p>Manager by apple california inc.</p>
                </div>
            </div>
            <div className="mt-5 mb-5">
                <h1 className="text-center">What we do</h1>
                <div className="d-flex flex-column flex-md-row justify-content-center mt-5">
                    <center><div className={`${styles.composent} ${styles.composent1}  mb-4 w-75 d-block d-md-inline-block text-start`}>
                        <img src={loop} alt="Candidate sourcing" className="mb-3 img-fluid"></img>
                        <h4 className="mb-3">Candidate sourcing</h4>
                        <p>We combine proven tutorial practices, which take advantage of the gains made in the Focus</p>
                    </div></center>

                    <center><div className={`${styles.composent}  mb-4 w-75 d-block d-md-inline-block text-start`}>
                        <img src={world} alt="Visa Sponsorship" className="mb-3 img-fluid"></img>
                        <h4 className="mb-3">Visa Sponsorship</h4>
                        <p>We combine proven tutorial practices, which take advantage of the gains made in the Focus</p>
                    </div></center>

                    <center>  <div className={`${styles.composent}  w-75 d-block d-md-inline-block text-start`}>
                        <img src={education} alt="Continuous upskilling" className="mb-3 img-fluid"></img>
                        <h4 className="mb-3">Continuous upskilling</h4>
                        <p>We combine proven tutorial practices, which take advantage of the gains made in the Focus</p>
                    </div></center>
                </div>
            </div>



            <div className={` w-50 text-center ${styles.waitlist} d-flex flex-column`}>
                <h1>Waitlist</h1>
                <p>To find out more about the services offered, including a free assessment meeting, use the form below. We will contact you quickly!</p>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" />
                    <label for="floatingInput">Email address</label>
                </div>


                <div class="row g-2">
                    <div class="col-md">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Prenom</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Nom</label>
                        </div>
                    </div>

                    <div class={`form-floating `}>
                        <textarea class={`form-control ${styles.textarea}`} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                        <label for="floatingTextarea2">Message</label>
                    </div>
                    <center><input className={`  btn btn-primary   `} type="button" value='Send message' /></center>

                </div>
                <div className="d-flex">
                    <div>
                        <img></img>
                        <p>info@mesm.com</p>
                    </div>
                    <div>
                        <img></img>
                        <p>877-255-7945</p>
                    </div>
                    <div>
                        <img></img>
                        <p>Canada</p>
                    </div>
                </div>

            </div >


            <div>
                <h1 className="text-center">Frequently asked questions</h1>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6 text-center">
                            <img src={woman} alt="FAQ" className="img-fluid px-md-5 mx-auto" />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="p-3">
                                <p>How do I create a profile on your website?</p>
                                <p>How can I improve my chances of getting a job?</p>
                                <p>Can I apply for multiple jobs at once?</p>
                                <p>What happens after I apply for a job?</p>
                                <p>Can I screen candidates based on specific criteria?</p>
                                <p>What data privacy measures do you have in place?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default HomePage