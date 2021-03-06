import * as React from 'react';
import { Link } from 'react-router-dom';
import Magd from '../images/Magd_Bayoumi.png';
import Oscar from '../images/Oscar_So.jpg';
import Sheetal from '../images/Sheetal_A.jpg';
import Jenna from '../images/Jenna_Kressin.jpeg';
import Souleiman from '../images/Souleiman_B.png';
import '../style/About.css';

export const About: React.StatelessComponent = (): JSX.Element => (
    <div>
        <Link to="/">
            <h3 className="home-1">MyCourseIndex</h3>
            <h3 className="home-2">Search</h3>
        </Link>
        <div className="center">
            <h4>About</h4>
            <h4><a href="https://github.com/oscarso2000/mycourseindex">Source code on Github</a></h4>
            <p> The authors of the MyCourseIndex project are: </p>

            <div className="item">
                <img src={Magd} />
                <span className="caption"><a href="https://github.com/bayoumi17m">Magd Bayoumi (mb2363)</a></span>
            </div>
            <div className="item">
                <img src={Jenna} />
                <span className="caption"><a href="https://github.com/jek343">Jenna Kressin (jek343)</a></span>
            </div>
            <div className="item">
                <img src={Souleiman} />
                <span className="caption"><a href="https://github.com/soule">Souleiman Benhida (sb2342)</a></span>
            </div>
            <div className="item">
                <img src={Sheetal} />
                <span className="caption"><a href="https://github.com/sheetal-athrey">Sheetal Athrey (spa42)</a></span>
            </div>
            <div className="item">
                <img src={Oscar} />
                <span className="caption"><a href="https://github.com/oscarso2000">Oscar So (ons4) </a></span>
            </div>
            <p></p>
            <p>MyCourseIndex is a project for CS/INFO 4300: Language and Information that acts as an essential search engine for Cornell students and their courses. This search gathers all information from Piazza posts to Textbook and Notes Resources and returns valid results for the student to utilize. </p>  
            <a href="https://v1.mycourseindex.com" target="_blank">
                <h3 className="home-1">MyCourseIndex</h3>
                <h3 className="home-2">Search V1</h3>
            </a>
            <a href="https://v2.mycourseindex.com" target="_blank">
                <h3 className="home-1">MyCourseIndex</h3>
                <h3 className="home-2">Search V2</h3>
            </a>
        </div>
    </div>
)