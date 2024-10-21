import React from 'react'
import HeroImage from '../../assets/headphones.png'
import styles from './HeroSection.module.css'
const HeroSection = () => {
  return (
    <>  
        <section className={styles.Hero}>
            <div className={styles.HeroTitle}>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
                <img className={styles.HeroImage} src={HeroImage} alt='headphone'/>
        </section>
    </>
  )
}

export default HeroSection
