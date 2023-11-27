import React, { useState } from "react";
import Kleiderbuegel from "./images/Kleiderbuegel.png"
import CloseX from "./images/closeX.webp"
import Breit from "./images/shoulder_chest_broad.png"
import Average from "./images/chest_shoulder_average.png"
import Schmal from "./images/shoulder_chest_slim.png"
import './style.css'
import SliderKG from "./components/SliderKG.js"
import RangeSlider from "./components/SliderPF.js";
import VerticalRangeSlider from "./components/SliderPF.js";

const App = () => {

  const [quizAngezeigt, setQuizAngezeigt] = useState(false)

  const [frageIndex, setFrageIndex] = useState(0)

  const handleQuiz = () => {
    setQuizAngezeigt(true)
  }

  const handleNextQuestion = () => {
    setFrageIndex(frageIndex + 1);
  }

  const closeQuiz = () => {
    setQuizAngezeigt(false);
    setFrageIndex(0);
  }

  const anzahlFragen = 6; // Hier die Gesamtanzahl der Fragen eintragen

  // Berechne den Fortschritt in Prozent
  const progress = (frageIndex / anzahlFragen) * 100; // +1, da frageIndex bei 0 beginnt

  // Setze den Fortschrittsbalken entsprechend dem berechneten Fortschritt
  const progressBarStyle = {
  width: `${progress}%`
  }  


  return (
    <div className="font-nunito-sans">
    <div className= {quizAngezeigt ? 'with-background' : ''}>
      {!quizAngezeigt && (
        <button className="sm:font-nunito-sans border border-[#202020] w-[300px] h-[30px] rounded-lg px-1 pl-10 m-10 align-middle" onClick={handleQuiz}>FINDE DEINE PASSENDE GRÖßE
          <img className="w-7 ml-[-35px] mt-[-28px]" src={Kleiderbuegel} alt="Kleiderbuegel"></img>
        </button>
      )}
      {quizAngezeigt && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
            <div className="bottom-0">
              <div className="relative rounded-br-sm rounded-bl-sm rounded-t-lg w-[375px] flex flex-col mx-auto shadow-xl sm:w-[350px] sm:h-[400px] sm:mr-[0px] sm:rounded-lg sm:mb-0 bg-white sm:mt-10 mt-[230px] h-[400px] z-20">
                <img className="w-7 absolute sm:mt-[-0px] mt-1 ml-1 cursor-pointer bg-gray-300 rounded-full p-1" src={CloseX} alt="Schliessen" onClick={closeQuiz}></img>
                
                  {frageIndex === 0 && (
                    <>
                      <div className="border border-b-gray-800 w-full h-[60px] mx-auto flex flex-col rounded-t-lg">
                        <h1 className="sm:font-nunito-sans text-[18px] sm:text-[15px] font-semibold text-center sm:pl-3 sm:pr-3 pl-4 sm:ml-5 mt-2 cursor-default">WIR HELFEN DIR DEINE PASSENDE GRÖßE ZU FINDEN</h1>
                        <h2 className="sm:font-nunito-sans text-center text-[18px] font-semibold mt-10 font-body cursor-default">DEIN BIOLOGISCHES GESCHLECHT</h2>
                      </div>
                      <div className="text-center mt-[90px]">
                        <button className="sm:font-nunito-sans border border-slate-300 mr-10 w-[120px] rounded-lg p-1 text-center sm:w-[100px] h-[50px] focus:outline-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={handleNextQuestion}>MÄNNLICH</button>
                        <button className="sm:font-nunito-sans border border-slate-300 w-[120px] rounded-lg p-1 sm:w-[100px] h-[50px] focus:outline-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={handleNextQuestion}>WEIBLICH</button>
                      </div>
                      <p className="text-center sm:font-nunito-sans mt-[20px] sm:mt-[178px] cursor-default">Powered by <span className="font-bold cursor-pointer">boehm</span></p>
                    </>
                  )}
                  {frageIndex === 1 && (
                    <div>
                      <h1 className="sm:font-nunito-sans text-center text-[18px] font-semibold mt-10 font-body cursor-default">DEINE KÖRPERGRÖßE</h1>
                      <SliderKG />
                      <button className="border rounded-lg mt-14 p-2 sm:p-1 sm:ml-59 ml-[68%] " onClick={handleNextQuestion}>WEITER</button>
                      <p className="text-center sm:font-nunito-sans mt-[1px] sm:mt-[54px] cursor-default">Powered by <span className="font-bold cursor-pointer">boehm</span></p>
                    </div>
                  )}
                  {frageIndex === 2 && (
                    <div>
                      <h1 className="sm:font-nunito-sans text-center text-[18px] font-semibold mt-10 font-body cursor-default">DEINE SCHULTERN</h1>
                      <div className="mt-4 mx-auto flex justify-center space-x-0">
                        <img className="cursor-pointer sm:h-[120px] h-[145px] border rounded-tl-lg rounded-bl-lg focus:outline-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2" src={Schmal} alt="schmal" onClick={handleNextQuestion}></img>
                        <img className="cursor-pointer sm:h-[120px] h-[145px] border" src={Average} alt="durchschnitt" onClick={handleNextQuestion}></img>
                        <img className="cursor-pointer sm:h-[120px] h-[145px] border rounded-tr-lg rounded-br-lg" src={Breit} alt="breit" onClick={handleNextQuestion}></img>
                      </div>
                      <div className="mt-4 mx-auto flex justify-center space-x-16 mr-4 sm:space-x-10 sm:mr-4">
                        <button className="" onClick={handleNextQuestion}>schmal</button>
                        <button className="" onClick={handleNextQuestion}>durchschnitt</button>
                        <button className="" onClick={handleNextQuestion}>breit</button>
                      </div>
                      <p className="text-center sm:font-nunito-sans mt-[1px] sm:mt-[135px] cursor-default">Powered by <span className="font-bold cursor-pointer">boehm</span></p>
                    </div>
                  )}
                  {frageIndex === 3 && (
                    <div>
                      <h1 className="sm:font-nunito-sans text-center text-[18px] font-semibold mt-10 font-body cursor-default">DIESE GRÖßE TRÄGST DU NORMALERWEISE </h1>
                      <div className="flex mx-auto justify-center mt-7 space-x-4 mr-1">
                        <button className="ml-1 border flex rounded-lg w-20 h-10 justify-center items-center focus:outline-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={handleNextQuestion}>XS</button>
                        <button className="border flex rounded-lg w-20 h-10 justify-center items-center focus:outline-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={handleNextQuestion}>S</button>
                        <button className="border flex rounded-lg w-20 h-10 justify-center items-center focus:outline-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={handleNextQuestion}>M</button>
                        <button className="border flex rounded-lg w-20 h-10 justify-center items-center focus:outline-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={handleNextQuestion}>L</button>
                        <button className="border flex rounded-lg w-20 h-10 justify-center items-center focus:outline-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={handleNextQuestion}>XL</button>
                      </div>
                      <p className="text-center sm:font-nunito-sans mt-[1px] sm:mt-[216px] cursor-default">Powered by <span className="font-bold cursor-pointer">boehm</span></p>
                    </div>
                  )}
                  {frageIndex === 4 && (
                    <div>
                      <h1 className="sm:font-nunito-sans text-center text-[18px] font-semibold mt-10 font-body cursor-default">DU TRÄGST IMMER DIE GRÖßE ..</h1>
                      <div className="flex mt-6 flex-col items-center">
                        <button className="flex border rounded-lg w-80 h-10 justify-center items-center focus:outline-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={handleNextQuestion}>Nein, manchmal eine größere Größe</button>
                        <button className="flex border rounded-lg mt-4 w-80 h-10 justify-center items-center focus:outline-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={handleNextQuestion}>Ja</button>
                        <button className="flex border rounded-lg mt-4 w-80 h-10 justify-center items-center focus:outline-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={handleNextQuestion}>Nein, manchmal eine kleinere Größe</button>
                      </div>
                      <p className="text-center sm:font-nunito-sans mt-[1px] sm:mt-[135px] cursor-default">Powered by <span className="font-bold cursor-pointer">boehm</span></p>
                    </div>
                  )}
                  {frageIndex === 5 && (
                    <div>
                      <h1 className="sm:font-nunito-sans text-center text-[18px] font-semibold mt-10 font-body cursor-default">DIESE PASSFORM BEVORZUGST DU</h1>
                      <VerticalRangeSlider />
                      <button className="border rounded-lg mt-14 p-2 sm:p-1 sm:ml-59 ml-[68%] " onClick={handleNextQuestion}>WEITER</button>
                      <p className="text-center sm:font-nunito-sans mt-[-30px] sm:mt-[57px] cursor-default">Powered by <span className="font-bold cursor-pointer">boehm</span></p>
                    </div>
                  )}
                  {frageIndex < 6 && (
                    <div class=" absolute block p-2 bg-white rounded-lg shadow w-24 mt-80">
                            <div class="w-20 h-2 bg-gray-400 rounded-full mt-1">
                              <div style={progressBarStyle} class="w-1/6 h-full text-center text-xs text-white bg-indigo-500 rounded-full"></div>
                            </div>
                    </div>
                  )}
              </div>
            </div>
        </>
      )}
    </div>
  </div>
);    
                  };
export default App;