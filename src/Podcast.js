import React from 'react';
import './index.css';
const Podcast = () => {
    return (
        <>
            <h1> The run-through with VOGUE Podcast </h1>

            <div>
                <p>
                    Each episode of The Run-Through with Vogue features conversations with
                    editors, creatives, and cover stars. Hosts Chioma Nnadi (head of editorial
                    content, British Vogue) and Chloe Malle (editor, Vogue.com) take you inside
                    the world of Vogue: Who's the new designer you should be paying attention
                    to? And what are Vogue editors buzzing about this week? Listen to The
                    Run-Through for the most riveting news in fashion and culture.
                </p>
            </div>

            <h3>Recent episodes</h3>

            <div className="card-group">
                <div className="card">
                    <img src="https://assets.vogue.com/photos/66984ab54cb9579ec948eb79/master/w_1920,c_limit/SW-WEBFM-0107241.jpg" className="card-img-top" alt="..." height={420} />
                    <div className="card-body">
                        <h5 className="card-title">Music</h5>
                        <p className="card-text">
                            On the Podcast: Suki Waterhouse on Her British Vogue Cover
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">BY CHELSEA DANIEL
                            July 18, 2024</small>
                    </div>
                </div>
                <div className="card">
                    <img src="https://assets.vogue.com/photos/668f2e49bd81a3fe76a82b23/1:1/w_1920,c_limit/GettyImages-2159235361.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Art</h5>
                        <p className="card-text">
                            On the Podcast: Cole Escola Talks Oh, Mary!
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">BY SUZIE LECHTENBERG
                            July 11, 2024</small>
                    </div>
                </div>
                <div className="card">
                    <img src="https://assets.vogue.com/photos/667f43016f831b7709ef4094/1:1/w_1920,c_limit/GettyImages-2158562743.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Culture</h5>
                        <p className="card-text">
                            On the Podcast: Lanvin and Sports and Maxxxine, Oh, My!
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">BY ALEX JHAMB BURNS
                            July 1, 2024</small>
                    </div>
                </div>
            </div>


            {/*new card group  */}

            <div className="card-group">
                <div className="card">
                    <img src="https://assets.vogue.com/photos/667af66e86115b7369439567/master/w_1920,c_limit/image%20(3).jpg" className="card-img-top" alt="..." height={420} />
                    <div className="card-body">
                        <h5 className="card-title">Fashion</h5>
                        <p className="card-text">
                            On the Podcast: Bows at Chanel—And Dries’s Final Bow
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">BY ALEX JHAMB BURNS
                            June 25, 2024</small>
                    </div>
                </div>
                <div className="card">
                    <img src="https://assets.vogue.com/photos/6679b7a628263dcf3d20c8c1/4:3/w_1920,c_limit/GettyImages-2158899677.jpg" className="card-img-top" alt="..." height={420} />
                    <div className="card-body">
                        <h5 className="card-title">Culture</h5>
                        <p className="card-text">
                            On the Podcast: Recapping Vogue World: Paris

                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">BY ALEX JHAMB BURNS
                            June 24, 2024</small>
                    </div>
                </div>
                <div className="card">
                    <img src="https://assets.vogue.com/photos/66737db57c8146b4bb350192/1:1/w_1920,c_limit/GettyImages-2158043591.jpg" className="card-img-top" alt="..." height={420} />
                    <div className="card-body">
                        <h5 className="card-title">Tv & Movies</h5>
                        <p className="card-text">
                            On the Podcast: Lily Gladstone on Native Fashion and Her New Film Fancy Dance
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">BY ALEX JHAMB BURNS
                            May 7, 2024</small>
                    </div>
                </div>
            </div>






            {/* <button type="button" class="btn btn-light">Light</button> */}

            <>
                <div className='boxes' data-aos="fade-up">
                    <div className='boxes2'>
                        <div className='boxes3'>


                            <div className="conatiner">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div data-aos="fade-right">
                                            <center><iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.036111732!2d-74.30933532275674!3d40.69753995607612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1691419964931!5m2!1sen!2sin"
                                                width={550}
                                                height={300}
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            /></center></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <h2> Sign Up for our membership </h2>
                                        <table height="200px" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label> First Name </label>
                                                        <br />
                                                        <input type="text" placeholder="first name" />
                                                    </td>
                                                    <td>
                                                        <label> Last Name</label>
                                                        <input type="text" placeholder="last name" />
                                                    </td>
                                                    <td>
                                                        <label> Username</label>
                                                        <br />
                                                        <input type="text" placeholder="@" />
                                                        <br />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label> City </label>
                                                        <input type="text" />
                                                    </td>
                                                    <td>
                                                        <label> State </label>
                                                        <select>
                                                            <option value="ind">Chandigarh </option>
                                                            <option value="ger">Mohali </option>
                                                            <option value="nep">Panchkula</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <label> Zip </label>
                                                        <input type="password" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <label> Agree to Terms and Conditions </label>
                                        <input type="radio" />
                                        <br></br>
                                        <button type="button" className="btn btn-primary">
                                            Submit Form
                                        </button>
                                        <br></br>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>





        <center>
                <div className='boxes' >
                    <div className='boxes2'>
                        <div className='boxes3'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <h5> VOGUE </h5>
                                        <p>Our Subscription includes </p>
                                        <p>magizines , fashion insights , bts runway shoes etc...</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <h5>INFORAMTION</h5>
                                        <p style={{ color: "blue" }}>
                                            <a href="#" className="link-underline-primary">
                                                Headlines {" "}
                                            </a>
                                        </p>
                                        <p style={{ color: "blue" }}>
                                            <a href="#" className="link-underline-primary">
                                                Beauty{" "}
                                            </a>
                                        </p>
                                        <p style={{ color: "blue" }}>
                                            <a href="#" className="link-underline-primary">
                                                Fashion{" "}
                                            </a>
                                        </p>
                                        <p style={{ color: "blue" }}>
                                            <a href="#" className="link-underline-primary">
                                                Lifestyle
                                            </a>
                                        </p>
                                    </div>
                                    <div className="col-lg-3">
                                        <h5>USEFUL LINKS </h5>
                                        <p style={{ color: "blue" }}>
                                            <a href="#" className="link-underline-primary">
                                                {" "}
                                                Youtube{" "}
                                            </a>
                                        </p>
                                        <p style={{ color: "blue" }}>
                                            <a href="#" className="link-underline-primary">
                                                Twitter{" "}
                                            </a>
                                        </p>
                                        <p style={{ color: "blue" }}>
                                            <a href="#" className="link-underline-primary">
                                                Instagram
                                            </a>
                                        </p>
                                        <p style={{ color: "blue" }}>
                                            <a href="#" className="link-underline-primary">
                                                Help
                                            </a>
                                        </p>
                                    </div>
                                    <div className="col-lg-3">
                                        <h5> CONTACT </h5>
                                        <p> Penn state,6th Avenue, NY </p>
                                        <p>marylsteep@gmail.com</p>
                                        <p> +919859901984</p>
                                        <p> +919914843013</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
            <center>
                <div className='boxes2'>
                    <div className='boxes3'>
                        <p> © 2023 Copyright:</p>
                        <p />
                        <p style={{ color: "blue" }}>
                            <a href="#" className="link-underline-primary">
                                {" "}
                                marylsteep@gmail.com{" "}
                            </a>
                        </p>
                    </div></div>
            </center>




        </>

        
    )
}
export default Podcast;
