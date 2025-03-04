import React from 'react';
import styles from './project.module.css';
import Link from 'next/link';
import Image from 'next/image';


function Project() {
  return (
    <div>
      <h4 style={{marginBottom:"25px"}}>Projects</h4>
      <div className={styles['card-container']}>
        <div className={styles.card}>
          <div className={styles['card-image']}>
             <Image src="/ecommerce.png" alt="Project Image" width={300} height={200} /> 
          </div>
          <div className={styles['card-body']}>
            <h3 className={styles['card-title']}>Ecommerce by Next JS</h3>
            <p className={styles['card-description']}>
            This eCommerce project features a dynamic product listing page where users can browse through various products. Each product is displayed with key details such as the product name, image, price, and brief description. Additionally, users can click on individual products to view more detailed information, including a larger image, detailed description, and pricing options.
            </p>
            <Link href="https://dineshnextecommerce.netlify.app/">
            <button className={styles['card-button']}>View Project</button>
            </Link>
            
            
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles['card-image']}>
           <Image src="/moviefinder.png" alt="Project Image" width={300} height={200} /> 
          </div>
          <div className={styles['card-body']}>
            <h3 className={styles['card-title']}>Movie Finder</h3>
            <p className={styles['card-description']}>
            This project allows users to view a list of movies with key details like title, genre, and release year. It features a search functionality that enables users to quickly find specific movies by typing keywords into the search bar. The design is simple and intuitive, making it easy for users to explore the movie collection and discover new titles based on their interests.
            </p>
            <Link href="https://dineshmoviefinder.netlify.app">
            <button className={styles['card-button']}>View Project</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
