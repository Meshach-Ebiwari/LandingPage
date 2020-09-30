import React from 'react';
import Head from 'next/head';
import '../css/styles.css';
import { motion } from 'framer-motion';
import Link from 'next/link'

const index = () => {
  return (
  <React.Fragment>
    <Head>
      <title>El-farina</title>
    </Head>
    <div className="container">
      <header>
        <img src='/img/dugo.png' alt='logo'/>
        <ul>
          <li>Product</li>
          <li>About</li>
          <li>Career</li>
          <li>Jobs</li>
        </ul>
        <motion.button
          whileHover={{ scale: 1.1}}
          whileTap={{scale: 0.9}}
          > 
          <img src='/img/elfarina01.svg' alt=""/>
          <div className="circle">1</div>
          </motion.button>
      </header>
      <div className="contenido">
        <div className="info">
          <h1>Welcome to the best website built with Next.js</h1>
          <span className="name">Pizza box</span>
          <p>
            Lorem ipsum dolor sit amet,consectetur adipiscing 
            elit ut aliquam purus sit amet luctus venenatis, 
            lectus magna fringilia urna
          </p>
          <div className="price">$15.98</div>
          <motion.button
          whileHover={{ scale: 1.1}}
          whileTap={{scale: 0.9}}
          > 
          <img src='/img/elfarinawhite.svg' alt=""/>
          <span>Add to cart</span>
          </motion.button>
        </div>
        <div className="img-container">
          <img src="/img/dugo.png" alt="Dugo" />
        </div>
        <div className="social-buttons">
          <div className="links">
            <a href="" target="_blank">Instagram</a>
            <a href="" target="_blank">Facebook</a>
          </div>
          <div>
            <motion.button
            whileHover={{ scale:1.1 }}
            whileTap={{ scale:0.9 }}
            className="btn-l">
              <img src="/img/elfarina01.svg" alt="" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}

export default index;

