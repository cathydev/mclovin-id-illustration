import './App.css';
import Image from "./barcode.svg";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="photo"></div>
        <div style={{position: "relative", top: "10px", left: "3px"}}>
          <img src={Image} alt='barcode' width="160px" height="80px" />
        </div>
        <div className="info">
          <span className='state'>HAWAII</span> <span className='text'>driver license</span>
          <div className='id-data'>
            <div style={{
              fontSize: "small",
              marginBottom: "15px"
            }}>Number 01-47-87441</div>
            <div>DOB 06/03/1981 EXP 06/03/2008</div>
            <div>HT WT HAIR EYES SEX CTY</div>
            <div>5-10 130 BRO M O</div>
            <div>ISSUE DATE CLASS RESTR ENDORSE</div>
            <div>06/18/1998 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
