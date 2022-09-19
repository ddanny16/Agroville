import React from 'react'
import "./AboutUs1.css"
import Coww from "../assets/cow-icon.svg"
import Paw from "../assets/paw.svg"
import Baloon from "../assets/chat-baloon.svg"
import Chart from "../assets/arrow 24.png"

const AboutUs1 = () => {
  return (
    <div>
      <box>
        <section>
          <div className="tinyimg">
            <img src={Coww} alt="Cow" />
          </div>
          <div className="tinytext">
            <p>
              Livestock Sales
            </p>
          </div>
          <div className="tinytext2">
            <p>
              We are a professional multi-species livestock marketing and frozen food company owned by farmers.
            </p>
          </div>

        </section>
        <section>
          <div className="tinyimg">
            <img src={Paw} alt="Cow" />
          </div>
          <div className="tinytext">
            <p>
          Vertinary
            </p>
          </div>
          <div className="tinytext2">
            <p>
              We are a professional multi-species livestock marketing and frozen food company owned by farmers.
            </p>
          </div>

        </section>

        <section>
          <div className="tinyimg">
            <img src={Baloon} alt="Cow" />
          </div>
          <div className="tinytext">
            <p>
              Frozen food sales
            </p>
          </div>
          <div className="tinytext2">
            <p>
              We are a professional multi-species livestock marketing and frozen food company owned by farmers.
            </p>
          </div>

        </section>
        <section>
          <div className="tinyimg">
            <img src={Chart} alt="Cow" />
          </div>
          <div className="tinytext">
            <p>
              Investments
            </p>
          </div>
          <div className="tinytext2">
            <p>
              We are a professional multi-species livestock marketing and frozen food company owned by farmers.
            </p>
          </div>

        </section>
      </box>
    </div>
  )
}

export default AboutUs1
