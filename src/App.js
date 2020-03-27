import React from 'react';
import illustration from './images/illustration.png';
import './App.css';
import ModalAnt from './components/modalant'

function App() {
  return (
    <div className="container">
      <div>
        <div className="explainer">
          <div className="explainer-wrapper">En <span className="inline-color">Pustepause</span> er å finne roen inni seg selv og la <span className="inline-color">hodet</span> og <span className="inline-color">tankene</span> kunne <span className="inline-color">hvile...</span>
          </div>
        </div>
        <div className="content-wrapper">
          <img src={illustration} alt="Mann som sitter betenkt på en stol" className="illustration"></img>
          <div>
          <div className="inline-color"></div>
          <ModalAnt></ModalAnt>
          </div>
            
        </div>
        <div className="footer">
          <div className="footer-wrapper">Endelig en meditasjonsapp på norsk. Regelmessig mindfullnessbasert stressreduksjon reduserer symptomer på angst og uro. <br></br><br></br>Utviklet av helsepersonell.</div>
        </div>
      </div>
    </div>
  );
}
        

export default App;