import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialPinterest,TiSocialYoutube} from "react-icons/ti";
// im
export default function Footer() {
  return (
  <div>
     <footer id="footer">

<div class="footer-newsletter">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <h4>Join Our Newsletter</h4>
        <p>For update in many and special events</p>
        <form action="" method="post">
          <input type="email" name="email" /><input type="submit" value="Subscribe"/>
        </form>
      </div>
    </div>
  </div>
</div>

<div class="footer-top">
  <div class="container">
    <div class="row">

      <div class="col-lg-4 col-md-6 footer-contact">
        <h3>Arsha</h3>
        <p>
          Surulere Ojuelegba <br/>
          Lagos <br/>
          Nigeria <br/>
          <strong>Phone:</strong> +2348145933039<br/>
          <strong>Email:</strong> info@ayobami.com<br/>
        </p>
      </div>

      <div class="col-lg-4 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Contact</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Menu</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Gallery</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
        </ul>
      </div>

      {/* <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
        </ul>
      </div> */}

      <div class="col-lg-4 col-md-6 footer-links">
        <h4>Our Social Networks</h4>
        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
        <div class="social-links mt-3">
          <a href="#" class="twitter"><TiSocialFacebook/></a>
          <a href="#" class="facebook"><TiSocialInstagram/></a>
          <a href="#" class="instagram"><TiSocialTwitter/></a>
          <a href="#" class="google-plus"><TiSocialPinterest/></a>
          <a href="#" class="linkedin"><TiSocialYoutube/></a>
        </div>
      </div>

    </div>
  </div>
</div>

<div class="container footer-bottom clearfix" style={{background:"#000", display:"flex", justifyContent:"center"}}>
  {/* <div class="copyright">
    &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
  </div> */}
  <div class="credits" style={{justifyContent:"center" }}>
    Designed by <a href="#" style={{textDecoration:"none"}}>Ayobami</a>
  </div>
</div>
</footer>
    </div>
  );
}
