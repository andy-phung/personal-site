import React from 'react';
import './index.css';

export class About extends React.Component {
    render() {
        return (
            <div className='about_container'>
              <div className='about_left'>
              <p className='about_heading'><b>A little more about me</b></p>
                <p className='about_content'> I'm a native of San Jose, California, and a graduate of <a className='link' href='https://independence.esuhsd.org/'>Independence High School</a>, where I ran <a className='link' href='https://www.instagram.com/ihscsclub76/'>IHS Computer Science Club</a>, <a className='link' href='https://www.instagram.com/ihsmesa/'>IHS MESA</a>, and the <a className='link' href='https://indystemexpo.live'>Indy STEM Expo</a>. Over the past few years, I conducted research on making machine learning systems <a className='link' href='https://abstracts.societyforscience.org/Home/FullAbstract?Category=Any%20Category&Finalist=Phung&AllAbstracts=False&FairCountry=Any%20Country&FairState=Any%20State&ProjectId=22557'>safer</a> & <a className='link' href='https://arxiv.org/pdf/2103.05469.pdf'>more reliable</a>, and involved myself in a number of <a className='link' href='https://www.linkedin.com/company/beyondthefive/'>education-centered</a> <a className='link' href='https://www.rotarydistrict5170vietnamproject.org/'>organizations</a>. 
                  <br/><br/> In college, I look forward to exploring the intersection of artificial intelligence and cognitive science—how we can improve machine learning algorithms based on our understanding of the human brain, and vice versa. But beyond that, I don’t really know what I’ll be doing next. Maybe exploring the power of film in bringing things to light? Or making multimodal art that encourages us to more deeply examine ourselves? Or even looking into the interplays between language, meaning, and thought? Who knows.
                </p>
              <p className='about_heading'><b>Fun facts</b></p>
              <ul className='about_content'>
                <li>i used to breakdance (as part of ihs' <a className='link' href='https://www.instagram.com/ihscloud9/'>cloud 9</a>)</li>
                <li>i've never finished a kdrama in its entirety before</li>
                <li>my dream house is a tiny 29 m<sup>2</sup> apartment in london</li>
                <li>i have over 650 hours in terraria</li>
                <li>my first name is not, in fact, actually andrew</li>
              </ul>
              <p id='favs' className='about_heading'><b>Favorites</b></p>
                <p id='visual_media_favs' className='about_content'>Visual media (movies/films, anime/manga, k-dramas, etc):</p>
                <ol className='about_content'>
                  <li><a className='link' href='https://mangadex.org/title/f8e294c0-7c11-4c66-bdd7-4e25df52bf69/blue-period' target="_blank" rel="noopener noreferrer">Blue Period</a></li>
                  <li>Everything Everywhere All At Once</li>
                  <li><a className='link' href='https://mangadex.org/title/cade38b7-64c4-4a29-8e3c-8c283291d6c6/land-of-the-lustrous' target="_blank" rel="noopener noreferrer">Land of the Lustrous</a></li>
                  <li>Love Death + Robots</li>
                  <li>The Human Scale</li>
                  <li>Be Melodramatic</li>
                  <li><a className='link' href='https://en.wikipedia.org/wiki/Life_(South_Korean_TV_series)' target="_blank" rel="noopener noreferrer">Life</a></li>
                  <li><a className='link' href='https://www.youtube.com/watch?v=5nEyjYn9_LI&list=PL590L5WQmH8dsxxz7ooJAgmijwOz0lh2H' target="_blank" rel="noopener noreferrer">Hacking Google</a></li>
                  <li><a className='link' href='https://www.youtube.com/watch?v=bG97F6b_6o4' target="_blank" rel="noopener noreferrer">The Barkley Marathons: The Race That Eats Its Young</a></li>
                  <li><a className='link' href='https://www.youtube.com/watch?v=z73R8Yy5vcQ' target="_blank" rel="noopener noreferrer">Day In The Life Of A Taiwanese Master Chef</a></li>
                  
                </ol>
                <p className='about_content'>Podcasts:</p>
                <ol className='about_content'>
                  <li>99% Invisible</li>
                  <li>Night Science</li>
                  <li>Radiolab</li>
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