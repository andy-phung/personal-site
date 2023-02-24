import React, {useState, useEffect} from 'react';
import './index.css';
import { useRef } from 'react';
import { AnimateIdentities } from './util';

export class Home extends React.Component {
    constructor(props) {
      super(props);
      this.title_1 = React.createRef();
      this.title_2 = React.createRef();
      this.title_3 = React.createRef();
      this.title_4 = React.createRef();
      this.title_5 = React.createRef();
      this.title_6 = React.createRef();
      this.title_7 = React.createRef();
      this.title_8 = React.createRef();
      this.title_9 = React.createRef();
      this.strip_ref = React.createRef();
      this.intro_ref = React.createRef()

      this.titles = [
        this.title_1,
        this.title_2,
        this.title_3,
        this.title_4,
        this.title_5,
        this.title_6,
        this.title_7,
        this.title_8,
        this.title_9
      ]

      this.current_title_idx = 0;

      


    }

    // super hacky and probably bad practice, will fix later
    async componentDidMount() {
      await this.timeout(100);
      this.strip_ref.current.classList.add('slide_trigger')
      while(true) {
        this.titles[this.current_title_idx].current.classList.add('animation_trigger');  
        await this.timeout(2500);
        this.titles[this.current_title_idx].current.classList.remove('animation_trigger');

        if(this.current_title_idx < 8) {
          this.current_title_idx += 1;
        }
        else {
          this.current_title_idx = 0;
        }
      }     
      
      
    }

    timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    scroll = (event) => {
      //.current is verification that your element has rendered
      if(this.intro_ref.current){
          this.intro_ref.current.scrollIntoView({ 
             behavior: "smooth", 
             block: "start", 
             inline: 'start'
          })
      }
    }


  

    render() {
        return (
            <div className='homepg_container'>
              <div className='homepg_padding_container_top'>

              </div>

              <div ref={this.strip_ref} className='film_strip'>

              </div>
              <div>
                <p id='name'>Andy Phung</p>
                <p id='title'>
                <span ref={this.title_1} className="rotating_text">A maker.</span>
                  <span ref={this.title_2} className="rotating_text">A hacker-turned-artist.</span>
                  <span ref={this.title_3} className="rotating_text">A film aficionado.</span>
                  <span ref={this.title_4} className="rotating_text">An interdisciplinary researcher.</span>
                  <span ref={this.title_5} className="rotating_text">A self-proclaimed chef.</span>
                  <span ref={this.title_6} className="rotating_text">A poker menace.</span>
                  <span ref={this.title_7} className="rotating_text">An academic weapon.</span>
                  <span ref={this.title_8} className="rotating_text">An indie gamer.</span>
                  <span ref={this.title_9} className="rotating_text">A k-drama connoisseur.</span>
                </p>
              </div>
              <div className='homepg_padding_container_bottom'>
                <button id="scroll_arrow" onClick={this.scroll}>
                <svg width="50px" height="50px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff" /></svg>
                </button>
              </div>
              <div ref={this.intro_ref} id='intro_container'>
                  <p id='intro'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur purus vel purus tincidunt tincidunt. Fusce mattis vitae purus in facilisis. Proin eget leo luctus, tincidunt nisl at, congue leo. Praesent ultricies purus nec tellus placerat, vitae iaculis dui mollis. Quisque quis justo et lectus vulputate fringilla. Pellentesque fermentum ultricies hendrerit. <br/> <br/> Nullam malesuada lorem vel ex aliquam, quis cursus sem tempus. Fusce in tortor a velit pretium porttitor bibendum rhoncus sem. Sed dignissim orci sit amet neque ultricies, ut semper purus lacinia. Fusce bibendum interdum nulla non feugiat. Ut ac imperdiet.
                  </p>
                  <img id='polaroid' src={"/polaroid.png"} alt="me!" width="336" height="403.2"/>
              </div>
            </div>
          );
    }
}