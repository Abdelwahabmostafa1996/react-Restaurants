import React, { Fragment } from "react";
import Header from "./Header.js";
import prideimg from "./../../assets/03.png";
import productimg from "./../../assets/2.png";
import Data from "../../Data.js";

const Home = () => {
    const blogitems = Data.map((item) => { 
        return (
            <div className="col-md-4">
                <img src={item.img} />
               <h5 className="title">{item.title} </h5>
                <span className="time">{item.time}</span>
                <h6 className="price">{item.price}</h6>


            </div>
       )
    })

    return (
        <Fragment>
            <Header />
            <section className="numbers">
            <div className="container">
            <div className="row">
                        <div className="col-md-3">
                            <h2> 1287+ </h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2> 5786+ </h2>
                            <h6>PHOTOS</h6>
                        </div>  
                        <div className="col-md-3">
                            <h2>1440+</h2>
                            <h6>ROCKETS</h6>
                        </div>  
                        <div className="col-md-3">
                            <h2> 7110+</h2>
                            <h6>GLOBES</h6>
                        </div>  
            </div>
            </div>
            </section>
            <section className="pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={prideimg} title="prideimg" />
                        </div>
                        <div className="col-md-6">
                            <h2> We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.Etiam et purus a odio finibus bibendum in sit amet leo.
                                Mauris feugiat erat tellus. </p>
                            <button className="learn-more"> learn more </button>
                        </div>
                </div>
                </div> 
            </section>
            <section className="pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2> We make everything by hand with the best possible ingredients.</h2>
                            <p className="make">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam et purus a odio finibus bibendum in sit amet leo.Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia,
                                there live the blind texts. </p>
                            <p className="make">Etiam sed dolor ac diam volutpat.</p>

                            <p className="make">Erat volutpat aliquet imperdiet.</p>

                            <p className="make">purus a odio finibus bibendum.</p>

                            <button className="learn-more"> learn more </button>
                        </div>
                        <div className="col-md-6">
                            <img src={productimg} title="productimg" />
                        </div>
                      
                    </div>
                </div>
            </section>

            <section className="cake">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2 className="When">When a man's stomach is full it makes no
                                difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                             finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        </div>                   
                    </div>
                </div>
            </section>
            <section className="blogs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2 className="Explore">Explore Our Foods.</h2>
                            <p className='Explore-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.
                                Separated they live in Bookmarksgrove.</p>
                            <p> </p>
                        </div>
                    </div>
                    <div className="row">
                        {blogitems}
                    </div>
                </div>
            </section>
        </Fragment> 
)

}

export default Home;