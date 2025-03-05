// import MainLayout from './mainlayout/page';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../app/component/sidebar/page';
import styles from './page.module.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
      <div className={styles.container}>
    <div className={styles.sidebar}>
      <Sidebar/>
     </div>
     <div className={styles.content}>
           {children}
     </div>
    </div>
      </body>
    </html>
  );
}
