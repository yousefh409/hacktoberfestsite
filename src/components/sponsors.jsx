import React from "react"
import JSONData from '../data/sponsorData.json'
import sponsorStyles from "../styles/sponsors.module.css"
import { graphql } from "gatsby"
import Image from '../components/image'
import Zoom from 'react-reveal/Zoom';
import { Parallax } from 'react-scroll-parallax';





export default function Sponsors() {


  return (
    JSONData.map((sponsor, index) =>
      
        <div className={sponsorStyles.sponsorImage} onClick={function (e) {
          window.open(sponsor.link, '__blank')
        }}>
          <div className="column">
              <div>
                <Image
                  className={sponsorStyles.sponsorImage}
                  alt="Profile Picture"
                  filename={sponsor.imgPath}
                />
              </div>
            </div>
        </div>
    )
  )

}

