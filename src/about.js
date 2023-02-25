import React from 'react';
import './index.css';

export class About extends React.Component {
    render() {
        return (
            <div className='about_container'>
              <div className='about_left'>
              <p className='about_heading'><b>About me</b></p>
                <p className='about_content'>Hi! I'm Andy, an incoming freshman at <a className='link' href="https://bcs.mit.edu/academic-program/course-6-9-computation-and-cognition">MIT</a>. <br/><br/> (supposed to be more here, just don't feel like writing it out rn)</p>
              
              <p className='about_heading'><b>Fun facts</b></p>
              <ul className='about_content'>
                <li>i used to breakdance (as part of ihs' <a className='link' href='https://www.instagram.com/ihscloud9/'>cloud 9</a>)</li>
                <li>i've never finished a kdrama in its entirety before</li>
                <li>my dream house is a tiny 29 m<sup>2</sup> apartment in london</li>
                <li>i have over 650 hours in terraria</li>
                <li>my first name is not, in fact, actually andrew</li>
              </ul>
              <p className='about_heading'><b>Favorites</b></p>
                <p id='visual_media_favs' className='about_content'>Visual media (movie/films, anime/manga, k-dramas, etc):</p>
                <ol className='about_content'>
                  <li>Blue Period</li>
                  <li>Everything Everywhere All At Once</li>
                  <li>Land of the Lustrous</li>
                  <li>Love Death + Robots</li>
                  <li>Be Melodramatic</li>
                  <li>Attack on Titan</li>
                  <li>Vinland Saga</li>
                  <li>Castlevania</li>
                  <li>Golden Kamuy</li>
                  <li>Life</li>
                </ol>
                <p className='about_content'>Podcasts:</p>
                <ol className='about_content'>
                  <li>99% Invisible</li>
                  <li>Night Science</li>
                </ol>
                <p className='about_content'>Games:</p>
                <ol className='about_content'>
                  <li>Subnautica</li>
                  <li>Hollow Knight</li>
                  <li>Don't Starve Together</li>
                  <li>Valorant</li>
                  <li>Baba Is You</li>
                </ol>
              </div>
              <div className='about_right'>
                <img className='about_polaroids' src={"/polaroids/polaroid_me_again.png"} alt="me (again)" width="252" height="302.4"/>
                <img className='about_polaroids' src={"/polaroids/polaroid_la_hacks.png"} alt="at los altos hacks!" width="252" height="302.4"/>
                <img className='about_polaroids' src={"/polaroids/polaroid_choi_bois.png"} alt="choi bois <3" width="252" height="302.4"/>
              </div>
            </div>
          );
    }
}