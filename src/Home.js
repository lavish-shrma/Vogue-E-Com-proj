import React, { useEffect } from 'react';
import './index.css';
import Aos from 'aos';
import "aos/dist/aos.css";
const Home=()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
<>
<hr></hr>
<center><h3> The September Issue countdown is on </h3> <button type="button" class="btn btn-dark">SUBSCRIBE NOW</button></center>
<hr></hr>
<br></br>
<hr></hr>


<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://assets.vogue.com/photos/61d9ef2107d219576cfb7c1e/16:9/w_4495,h_2528,c_limit/VO0222_SocialCover%20(1).jpg" className="d-block w-100" height="850px" width="650px" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://assets.vogue.com/photos/63bd7a791944dc168acdf7f1/4:3/w_1999,h_1499,c_limit/VO0223_Cover_Logo.jpg" className="d-block w-100"  height="800px" width="850px" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1>Florence Pugh</h1>
        <p>Florence Pugh’s Radical Self-Acceptance.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://media.vogue.co.uk/photos/60db196665bb7d9163825c12/4:3/w_1280,h_960,c_limit/Margot%20Aug%20Cover%20Copilot%201.jpg" className="d-block w-100" height="800px" width="850px" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br></br>
<hr></hr>



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








<center><h2>MUST READ</h2></center>

<hr></hr>
<br></br>

<div className="row">
    
<div class="col-md-4 mb-3">
    <div className="card">
    <div data-aos="zoom" className='boxes'>
    <div className='boxes2'>
      <div className="card-body">
      <div className='boxes3'>
        <center><h5 className="card-title">SHOPPING</h5>
        <img src="https://assets.vogue.com/photos/6464da5d62b13e5b1bb7a861/3:4/w_1280,c_limit/5%20Under%20$300.jpg" height="250px" width="200px" />
        <p className="card-text">
        Gap x LoveShackFancy’s Just-Dropped Collab Can Dress the Whole Family—Ciara’s Included
        </p>
        <a href="#" className="btn btn-primary">
        BY KRISTEN BATEMAN
        </a></center></div>
      </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div className="card">
    <div data-aos="zoom" className='boxes'>
    <div className='boxes2'>
      <div className="card-body">
      <div className='boxes3'>
        <center><h5 className="card-title">THE RESORT WEAR SHOP</h5>
        <img src="https://assets.vogue.com/photos/6464d9c9135790a539abf018/3:4/w_1280,c_limit/1%20Resort.jpg"  height="250px" width="200px"/>
        <p className="card-text">
        We’ve pulled the best styles from swimwear brands like Eres, Tory Burch, and Hunza G. 
        </p>
        <a href="#" className="btn btn-primary">
        BY TISH WEINSTOCK
        </a></center></div>
      </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div className="card">
    <div data-aos="zoom" className='boxes'>
    <div className='boxes2'>
      <div className="card-body">
        <div className='boxes3'>
        <center><h5 className="card-title"> BEAUTY</h5>
        <img src="https://assets.vogue.com/photos/6464da0dc943a2672e3e706e/3:4/w_1280,c_limit/3-dresses%20PLP.jpg"  height="250px" width="200px"/>
        <p className="card-text">
        Planning an upcoming getaway ,20 of the Best Redheads to Inspire Your Next Salon Visit
        </p>
        <a href="#" className="btn btn-primary">
          BY KATE MOSS
        </a></center></div>
      </div>
    </div>
    </div>
    </div>
  </div>
</div>
<br></br>
<hr></hr>
<br></br>

<div class="row">
<div class="col-lg-6">
<div  className='boxes'>
<div className='boxes2'>
    <div className='boxes4'>
<center> <img src="https://assets.vogue.com/photos/64cfb924956dd488a44342d3/master/w_2240,c_limit/V20230805PI-0028.jpg" height="500px" width="625px"/>  </center>
</div>
</div>
</div>
</div>

<div  class="col-lg-6">
<div data-aos="fade">
<center><h4> FASHION </h4>
<h1>  Vice President Kamala Harris Wears Custom LaQuan Smith to Beyoncé's Latest Renaissance Stop</h1>

     <h4> BY HANNHA JACKSON</h4></center>
</div>
</div>
</div>
<br></br>
<hr></hr>
<br></br>
<hr></hr>
<center><h2> OUR ICONIC 2023 COVERS</h2></center>
<hr></hr>
<br></br>

<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
    <div data-aos="zoom" className='boxes'>
    <div className='boxes2'>
        <div className='boxes3'>
      <img src="https://assets.vogue.com/photos/622b6938f1c0bf717ac69d00/master/w_2240,c_limit/VO0422_SocialCover_Logo.jpg" height="800px" width="600px" className="card-img-top" alt="..." />
      <div className="card-body">
       <center><h2 className="card-title"><i><b>WELLNESS</b></i></h2></center>
        <p className="card-text">
       
        </p>
      </div>
      </div></div></div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div data-aos="zoom" className='boxes'>
    <div className='boxes2'>
        <div className='boxes3'>
      <img src="https://www.usmagazine.com/wp-content/uploads/2018/08/hailey-baldwin-vogue.jpg?quality=86&strip=all" height="800px" width="600px" className="card-img-top" alt="..." />
      <div className="card-body">
        <center><h2 className="card-title"><b><i>BEAUTY</i></b></h2></center>
        <p className="card-text">
        
        </p>
      </div>
      </div></div></div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div data-aos="zoom" className='boxes'>
    <div className='boxes2'>
        <div className='boxes3'>
      <img src="https://assets.vogue.in/photos/60485eb369b9550dcd36b695/master/w_2625,h_3263,c_limit/Vogue%20US%20March%202021%20Cover.jpg" height="695px" width="869" className="card-img-top" alt="..." />
      <div className="card-body">
      <center><h2 className="card-title"><i><b>LIVING</b></i></h2></center>
        
        <p className="card-text">
       
        </p>
      </div>
      </div>
      </div>
    </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div data-aos="zoom" className='boxes'>
    <div className='boxes2'>
        <div className='boxes3'>

      <img src="https://assets.vogue.in/photos/60485eb569b9550dcd36b696/master/w_1181,h_1476,c_limit/British%20Vogue%20March%202021%20Covers.jpg"  height="695px" width="869" className="card-img-top" alt="..." />
      <div className="card-body">
      <center><h2 className="card-title"><i><b>OPINION</b></i></h2></center>
        
        <p className="card-text">
       
        </p>
      </div>
    </div>
    </div>
    </div>
    </div>
  </div>
</div>

<br></br>
<hr></hr>
<center>
<hr></hr>

<h2> Meet our SuperModels </h2>
<hr></hr>
<br></br>


<div className="conatiner">
  <div className="row">
    <div className="col-4">
      <center>
        <div className='boxes' data-aos="fade-left">
            <div className='boxes3'>

            
        <img
          style={{ borderRadius: "50% !important" }}
          src="https://images.squarespace-cdn.com/content/v1/57c9299a3e00bec03eb57b8d/1520071173370-I0ETLBKTSOBIJK0EULBC/VOGUEP1.jpg"
          height="250px"
          width="200px"
        /></div>
        </div>
      </center>
      <h2 style={{ textAlign: "center" }}> Barbra Palvin </h2>
      <div onmouseover="mouseOver(this)" onmouseout="mouseOut (this)">
        <p style={{ textAlign: "center" }} id="para">
          {" "}
          Barbara Sprouse (née Palvin; born 8 October 1993) is a Hungarian model. She first appeared in the Sports Illustrated Swimsuit Issue in 2016. In 2019, she became a Victoria's Secret Angel. She is also an Armani Beauty ambassador.
        </p>
        <center>
          <button
            type="button"
            id="btn"
            onclick="hide()"
            className="btn btn-dark"
          >
            view more
          </button>
        </center>
      </div>
    </div>
    <div className="col-4">
      <center>
      <div className='boxes' data-aos="fade-left">
            <div className='boxes3'>
        <img
          style={{ borderRadius: "50% !important" }}
          src="https://i.pinimg.com/originals/de/a2/4c/dea24c8d0fdb5d4b68b61adc13803b65.jpg"
          height="250px"
          width="200px"
        /></div> </div>
      </center>
      <h2 style={{ textAlign: "center" }}> Gemma Ward</h2>
      <div onmouseover="mouseOver(this)" onmouseout="mouseOut (this)">
        <p style={{ textAlign: "center" }} id="para1">
          {" "}
          Gemma Louise Ward is an Australian model and actress. Born in Perth, Western Australia, Ward was first scouted at the age of 14, and made her Australian Fashion Week debut aged 15.
        </p>
        <center>
          <button
            type="button"
            id="btn1"
            onclick="hide1()"
            className="btn btn-dark"
          >
            view more
          </button>
        </center>
      </div>
    </div>
    <div className="col-4">
      <center>
      <div className='boxes' data-aos="fade-left">
            <div className='boxes3'>
        <img
          style={{ borderRadius: "50% !important" }}
          src="https://thenativemag.com/wp-content/uploads/2018/04/vbrazilmay16-2-1-1.jpg"
          height="250px"
          width="200px"
        /></div></div>
              </center>
      <h2 style={{ textAlign: "center" }}> Naomi Campbell </h2>
      <div onmouseover="mouseOver(this)" onmouseout="mouseOut (this)">
        <p style={{ textAlign: "center" }} id="para2">
        Naomi Elaine Campbell is an English model. Beginning her career at the age of 15, Campbell was one of six models of her generation declared supermodels by the fashion industry and the international press
        </p>
        <center>
          <button
            type="button"
            id="btn2"
            onclick="hide2()"
            className="btn btn-dark"
          >
            view more{" "}
          </button>
        </center>
        <br />
        <br />
      </div>
    </div>
  </div>

</div>

<div className="conatiner">
  <div className="row">
    <div className="col-4">
      <center>
      <div className='boxes' data-aos="fade-right">
            <div className='boxes3'>
        <img
          style={{ borderRadius: "50% !important" }}
          src="https://www.fashiongonerogue.com/wp-content/uploads/2018/06/Bella-Hadid-Sexy-Photoshoot02.jpg"
          height="250px"
          width="200px"
        /></div></div>
      </center>
      <h2 style={{ textAlign: "center" }}> Bella Hadid</h2>
      <div onmouseover="mouseOver(this)" onmouseout="mouseOut (this)">
        <p style={{ textAlign: "center" }} id="para">
        sabella Khairiah Hadid (born October 9, 1996) is an American model. Throughout her career, she has made 29 appearances on international Vogue covers.
          
        </p>
        <center>
          <button
            type="button"
            id="btn"
            onclick="hide()"
            className="btn btn-dark"
          >
            view more
          </button>
        </center>
      </div>
    </div>
    <div className="col-4">
      <center>
      <div className='boxes' data-aos="fade-right">
            <div className='boxes3'>
        <img
          style={{ borderRadius: "50% !important" }}
          src="https://www.designscene.net/wp-content/uploads/2023/02/Vogue-Netherlands-Gigi-Hadid-2.jpg"
          height="250px"
          width="200px"
        /></div></div>
      </center>
      <h2 style={{ textAlign: "center" }}> Gigi Hadid</h2>
      <div onmouseover="mouseOver(this)" onmouseout="mouseOut (this)">
        <p style={{ textAlign: "center" }} id="para1">
          {" "}
         Jelena Noura "Gigi" Hadid is an American model and television personality. In November 2014, she made her debut in the Top 50 Models ranking at Models.com.
        </p>
        <center>
          <button
            type="button"
            id="btn1"
            onclick="hide1()"
            className="btn btn-dark"
          >
            view more
          </button>
        </center>
      </div>
    </div>
    <div className="col-4">
      <center>
      <div className='boxes' data-aos="fade-right">
            <div className='boxes3'>
        <img
          style={{ borderRadius: "50% !important" }}
          src="https://voguegraphy.files.wordpress.com/2016/02/carmen-kass-by-michael-thompson-vogue-paris-november-1997.jpg"
          height="250px"
          width="200px"
        /></div></div>
      </center>
      <h2 style={{ textAlign: "center" }}> Carmen Kass</h2>
      <div onmouseover="mouseOver(this)" onmouseout="mouseOut (this)">
        <p style={{ textAlign: "center" }} id="para2">
        Carmen Kass is an Estonian model and former political candidate. She has worked as the face of brands such as Chanel, Versace, Yves Saint Laurent, Gucci, Valentino,
        </p>
        <center>
          <button
            type="button"
            id="btn2"
            onclick="hide2()"
            className="btn btn-dark"
          >
            view more{" "}
          </button>
        </center>
        <br />
        <br />
      </div>
    </div>
  </div>
  <hr />
</div>


 
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
  



</center>
</>

    )
}
export default Home;