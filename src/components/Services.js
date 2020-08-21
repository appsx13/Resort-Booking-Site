import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    
    state = {
        services : [
            {
                icon : <FaCocktail/>,
                title : "free cocktails",
                info : 
                    `csbik lnaol
                     asdasdasdadwa `,
            },
            {
                icon : <FaHiking/>,
                title : "Endless Hiking",
                info : `daynkammhasm9hmiwa
                nmhwomassnm9hhhhhhhh
                hhhhhhhhhhddajlllllllll
                lllllllllllllllllllllllllll !!`,
            },
            {
                icon : <FaShuttleVan/>,
                title : "Free Shuttle",
                info : `daynkammhasm9hmiwanmhwo
                massnm9hhhhhhhhhhhhhh
                hhhhddajlllllllllll
                llllllllllllllllllllll
                lll !!`,
            },
            {
                icon : <FaBeer/>,
                title : "Strongest Beer",
                info : `daynkammhasm9hmiwanmhwomass
                nm9hhhhhhhhhhhhhhhhhh
                ddajlllllllllll !!`,
            }
        ]
    }
    
    render() {
        return (
            <section className="services" >
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                            <article key={index} className="service">
                                <span> {item.icon} </span>
                                <h6> {item.title} </h6>
                                <p> {item.info} </p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
