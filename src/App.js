import React from 'react';
import illustration from './images/illustration.png';
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
    <div className="container">
      <div>
        <div className="explainer">
          <Desktop><div className="explainer-wrapper-desktop">En <span className="inline-color">Pustepause</span> er å finne roen inni seg selv og la <span className="inline-color">hodet</span> og <span className="inline-color">tankene</span> kunne <span className="inline-color">hvile...</span>
          </div></Desktop>
          <Tablet><div className="explainer-wrapper-tablet">En <span className="inline-color">Pustepause</span> er å finne roen inni seg selv og la <span className="inline-color">hodet</span> og <span className="inline-color">tankene</span> kunne <span className="inline-color">hvile...</span>
          </div></Tablet>
          <Mobile><div className="explainer-wrapper-mobile">En <span className="inline-color">Pustepause</span> er å finne roen inni seg selv og la <span className="inline-color">hodet</span> og <span className="inline-color">tankene</span> kunne <span className="inline-color">hvile...</span>
          </div></Mobile>
        </div>
        <div className="content-wrapper">

        <Desktop><img src={illustration} alt="Mann som sitter betenkt på en stol" className="illustration-desktop"></img></Desktop>
        <Tablet><img src={illustration} alt="Mann som sitter betenkt på en stol" className="illustration-tablet"></img></Tablet>
        <Mobile><img src={illustration} alt="Mann som sitter betenkt på en stol" className="illustration-mobile"></img></Mobile>
          
          <div>
          <ModalAnt></ModalAnt>
          </div>
            
        </div>
        <div className="footer">

          <Desktop>
            <div className="footer-wrapper-desktop">Endelig en meditasjonsapp på norsk. Regelmessig mindfullness reduserer symptomer på angst og uro. <br></br> Appen er utviklet av helsepersonell.
            </div>
          </Desktop>
          <Tablet>
            <div className="footer-wrapper-tablet">Endelig en meditasjonsapp på norsk. Regelmessig mindfullness reduserer symptomer på angst og uro. <br></br> Appen er utviklet av helsepersonell.
            </div>
          </Tablet>
          <Mobile>
            <div className="footer-wrapper-mobile">Endelig en meditasjonsapp på norsk. Regelmessig mindfullness reduserer symptomer på angst og uro. <br></br> Appen er utviklet av helsepersonell.
            </div> 
          </Mobile>
        </div> 
      </div>
    </div>
  );
}
        

export default App;