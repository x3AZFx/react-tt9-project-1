import React from 'react';
import Img from '../img';
import "./style.css";
export default function Index() {
  return (
    <div className="ffrow">
      <section className="cards-two-container">
        <div className="cards card-0">
          <h2 style={{ textAlign: 'left' }}>last played</h2>
          <div className="innerRow">
            <div className="innerInner">
              <Img className="innerRowImage" width="70px" src="../../../assets/images/DYING LIGHT MINI.png" alt="" />
              <h6 className="innerRowText">Hogwarts Legacy 50%</h6>
            </div>
          </div>

          <div className="innerRow">
            <div className="innerInner">
              <Img className="innerRowImage" width="70px" src="../../../assets/images/f2b14737-116f-4416-b250-093597981967.png" alt="" />
              <h6 className="innerRowText">God Of War: Ragnarök 72.5%</h6>
            </div>
          </div>
          <div className="innerRow">
            <div className="innerInner">
              <Img className="innerRowImage" width="70px" src="../../../assets/images/MINI CRASH.png" alt="" />
              <h6 className="innerRowText">Crash Bandicoot N. Sane Trilogy 34%</h6>
            </div>
          </div>
          <div className="innerRow">
            <div className="innerInner">
              <Img className="innerRowImage" width="70px" src="../../../assets/images/DYING LIGHT MINI.png" alt="" />
              <h6 className="innerRowText">Dying Light 2 Stay Human 100%</h6>
            </div>
          </div>
        </div>

        <div className="cards card-01">
          <Img src="../../../assets/images/uncharted/png-clipart-disgaea-3-playstation-3-playstation-4-xbox-360-trophy-golden-cup-game-medal 1.png" alt="" />
          <Img src="../../../assets/images/uncharted/Ellipse 1.png" alt="" />
        </div>

        <div className="cards card-02"></div>
      </section>
    </div>
  );
}