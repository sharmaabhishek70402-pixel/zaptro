
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { DataProvider } from './context/DataContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from 'react-scroll-to-top'
import { clerkEnabled, clerkPublishableKey } from './config.js'

createRoot(document.getElementById('root')).render(
  <DataProvider>
    <CartProvider>
      {clerkEnabled ? (
        <ClerkProvider publishableKey={clerkPublishableKey} afterSignOutUrl="/">
          <App />
          <ScrollToTop color='white' smooth style={{backgroundColor:'#fa2d37', display:'flex', alignItems:'center', justifyContent:'center'}}/>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ClerkProvider>
      ) : (
        <>
          <App />
          <ScrollToTop color='white' smooth style={{backgroundColor:'#fa2d37', display:'flex', alignItems:'center', justifyContent:'center'}}/>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </>
      )}
    </CartProvider>
  </DataProvider>
)
