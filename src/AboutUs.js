import React from 'react';
import './index.css';
const AboutUs=()=>{

return(
    <>
    
    <center><h2> TODAY'S STORIES</h2></center>
<hr></hr>
<br></br>

<div class="container text-center">
  <div class="row">
    <div class="col">
        <div data-aos="fade-up" className='boxes'>
      <img src=" https://images.ctfassets.net/6pezt69ih962/2z0V1HrVmVFkgdtcjiORi7/a2ef075787d8c35daaef46cee8a0ff1d/SIX_New_Group_Photo.jpg" height="400px" width="425px" /></div>
      <h3> A R T </h3>
      <h3> 10 Things to see On and Off Broadway This Fall</h3>
      <h5> BY CHRISTOPHER BARNARD </h5>
    </div>
    <div class="col">
        <div  data-aos="fade-up" className='boxes'>
      <img src="https://www.thequartergrill.com/wp-content/uploads/2023/06/sydney_sweeney_347249159_185321404071761_2294719583151637659_n.jpg" height="400px" width="300px" /> </div>     
       <h3> H A I R </h3>
      <h3> Everyone is London is going "Cobain Blonde" for Fall</h3>
      <h5> BY VOUGE</h5>
    </div>
  </div>
  <div class="row">
    <div class="col">
        <div  data-aos="fade-up" className='boxes'>
      <img src="https://favim.com/pd/p/orig/2018/08/25/90s-matthew-perry-fashion-Favim.com-6196761.jpg" height="400px" width="400px" /></div>
      <h3> R U N W A Y </h3>
      <h3> The Coolest 90's Style From Lollapalooza's Early Years</h3>
      <h5> BY LAIA GRACHI-FURATO  </h5>
    </div>
    <div class="col">
        <div data-aos="fade-up" className='boxes'>
      <img src="https://assets.teenvogue.com/photos/621f509e96b52cbc8f7f2bb4/4:3/w_2377,h_1783,c_limit/AE_Spring22_Members%20Always__Maitreyi%20Ramakrishnan_Michael%20Evans%20Behling_Madelyn%20Cline_Joshua%20Bassett.jpg"height="400px" width="450px"/> </div>
      <h3> S H O P P I N G </h3>
      <h3> Gap x LoveShackFancy’s Just-Dropped Collab Can Dress the Whole Family—Ciara’s Included</h3>
      <h5> BY KRISTEN BATEMAN</h5>
    </div>
    <br></br>
    <div class="col">
        <div data-aos="fade-up" className='boxes'>
      <img src="https://assets.vogue.com/photos/64c816b41e25c19bc32d16e1/master/w_2240,c_limit/00-story-5.jpg" neight="300px" width="450px" /></div>
      <h3> T R E N D S </h3>
      <h3> A Celebrity Guide to Nailing a “Smart Casual” Dress Code</h3>
      <h5> BY CHRISTIAN ALLAIRE</h5>
    </div>
  </div>
</div>
<br></br>
<hr></hr>
<br></br>

<div class="row">
<div class="col-lg-6">
<div data-aos="fade-right">
<center><h4> CELEBRITY STYLE</h4>
<h1> Harry Styles Has Mastered the Art of the Vacation Uniform</h1>
<p> Now that his much-talked-about Love On Tour concerts have come to a close,
     Harry Styles is taking a well-earned holiday in Italy—call it Love On Holiday. 
     The Harry's House singer has been rocking custom Gucci costumes onstage for almost two years,
      so we've forgotten what he dresses like outside his Alessandro Michele- and Harry Lambert-fueled wardrobe. 
      Styles bid adieu to the technicolor chevrons, polka dots, and sparkles of his bygone tour,
       and seems to favor a much more pared-down approach to his off-duty style. But if anyone seems to have the vacation uniform on lock,
        it's the British superstar.</p>
        <h4> BY HANNAH JACKSON</h4></center>
        </div>
</div>
<div class="col-lg-6">
<div data-aos="fade-left" className='boxes'>
<center><img src="https://assets.vogue.com/photos/64cbde039a401f430c2a3764/master/w_2240,c_limit/1242975659" height="700px" width="600px"></img></center>
</div>
</div>
</div>
<br></br>
<hr></hr>


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
                <br/>
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
export default AboutUs;