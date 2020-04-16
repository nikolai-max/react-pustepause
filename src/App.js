import React from 'react';
import './App.css';
import ModalAnt from './components/modalant'
import { useMediaQuery } from 'react-responsive'

function App() {
  
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  return (
    <div className="app">
      <div>
        <div className="app-header">
          <Desktop><div className="header-wrapper-desktop">En <span className="inline-color">Pustepause</span> er å finne roen inni seg selv og la <span className="inline-color">hodet</span> og <span className="inline-color">tankene</span> kunne <span className="inline-color">hvile...</span>
          </div></Desktop>
          <Tablet><div className="header-wrapper-tablet">En <span className="inline-color">Pustepause</span> er å finne roen inni seg selv og la <span className="inline-color">hodet</span> og <span className="inline-color">tankene</span> kunne <span className="inline-color">hvile...</span>
          </div></Tablet>
          <Mobile><div className="header-wrapper-mobile">En <span className="inline-color">Pustepause</span> er å finne roen inni seg selv og la <span className="inline-color">hodet</span> og <span className="inline-color">tankene</span> kunne <span className="inline-color">hvile...</span>
          </div></Mobile>
        </div>
        <div className="app-main">
          <Mobile><img src="illustration.png" alt="Mann som sitter betenkt på en stol" className="app-main-mobile__image"></img></Mobile>
          <Tablet><img src="illustration.png" alt="Mann som sitter betenkt på en stol" className="app-main-tablet__image"></img></Tablet>
          <Desktop><img src="illustration.png" alt="Mann som sitter betenkt på en stol" className="app-main-desktop__image"></img></Desktop>         
          <div>
          <ModalAnt></ModalAnt>
          </div>   
        </div>
        <footer className="app-footer">

          <Desktop>
            <div className="app-footer-desktop">Endelig en meditasjonsapp på norsk. Regelmessig mindfullness reduserer symptomer på angst og uro. <br></br> Appen er utviklet av helsepersonell.
            </div>
          </Desktop>
          <Tablet>
            <div className="app-footer-tablet">Endelig en meditasjonsapp på norsk. Regelmessig mindfullness reduserer symptomer på angst og uro. <br></br> Appen er utviklet av helsepersonell.
            </div>
          </Tablet>
          <Mobile>
            <div className="app-footer-mobile">Endelig en meditasjonsapp på norsk. Regelmessig mindfullness reduserer symptomer på angst og uro. <br></br> Appen er utviklet av helsepersonell.
            </div> 
          </Mobile>
        </footer> 
      </div>
    </div>
  );
}
        

export default App;