
import React from 'react'
import Sidebar from '../component/sidebar/page';
import styles from './layout.module.css'; // Import the CSS module



function MainLayout() {
  return (
    <div className={styles.container}>
    <div className={styles.sidebar}>
      <Sidebar/>
     </div>
     <div className={styles.content}>
          {/* {children} */}
     </div>
    </div>
  )
}

export default MainLayout