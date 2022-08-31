import {useState, useEffect} from 'react';
import cupcake from '../Images/cupcake.jpeg';
import hbd from '../Images/hbd.jpg';
import Navbar from '../Components/Navbar';
import styles from '../Styles/Testimonial.style.css'
import Bottom from '../Components/Bottom';

const Testimonials = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='Title'>Recomendaciones de clientes</h1>
            <div className='TopTestimonialBox'>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."</p>
                <h3>Name 1</h3>
            </div>
           
            <Bottom></Bottom>
        </div>
    );
}

export default Testimonials;