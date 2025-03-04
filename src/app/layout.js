
import MainLayout from './mainlayout/page'

import 'bootstrap/dist/css/bootstrap.min.css';


export default function RootLayout(children) {
  return (
    <html lang="en">
     <head>
      
     <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          />
     </head>
      <body>
      <MainLayout>
        {children}
        </MainLayout>
      </body>
    </html>
  );
}
