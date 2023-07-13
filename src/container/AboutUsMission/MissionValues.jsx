import React from 'react';
import './MissionValues.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const MissionValues = () => (
    <section className="mission-values">
            <h2 className="mission-values-h2">Our Mission and Values</h2>
            <div class="container">
                    <div class="box">
                        <div class="icon"><i class="fa fa-circle" aria-hidden="true"></i></div>
                        <div class="content">
                            <h3>Commitment to Excellence</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At amet incidunt magnam fugit, maiores doloribus ut obcaecati, quibusdam provident voluptates neque quo? Deleniti laudantium commodi harum autem totam doloribus mollitia.</p>
                        </div>
                        <div className='text'>Commitment to Excellence</div>
                    </div>
                <div class="box">
                    <div class="icon"><i class="fa fa-circle" aria-hidden="true"></i></div>
                    <div class="content">
                        <h3>Customer Satisfaction</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem magnam odio ratione ullam ex eaque labore porro aperiam vero! Voluptatem facilis enim dolor consequuntur exercitationem laborum aliquid mollitia reiciendis.</p>
                    </div>
                    <div className='text'>Customer Satisfaction</div>
                </div>
                <div class="box">
                    <div class="icon"><i class="fa fa-circle" aria-hidden="true"></i></div>
                    <div class="content">
                        <h3>Integrity and Transparency</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde sed enim veritatis quod exercitationem voluptates et facere fuga odio, blanditiis vel debitis atque repudiandae fugiat quis minus, maxime deleniti?</p>
                    </div>
                    <div className='text'>Integrity and Transparency</div>
                </div>
            </div>
    </section>
);

export default MissionValues;
