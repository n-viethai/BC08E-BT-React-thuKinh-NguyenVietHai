import React, { Component, Fragment } from "react";

export default class BTThuKinh extends Component {
  arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  renderButtonGlasses = () => {
    return this.arrGlasses.map((object, index) => {
      return (
        <div key={index}>
          <button
            className="border border-gray-500 flex justify-center p-4 h-20  rounded-xl shadow-md"
            onClick={() => {
                this.setState({
                    glassesUrl : `${object.url}`,
                    glassesName :`${object.name}`,
                    glassesDesc: `${object.desc}`,
                    glassesPrice : `- ${object.price}$`
                })
            }}
          >
            <img src={object.url} alt="..." className="w-full" />
          </button>
        </div>
      );
    });
  };

  state = {
    glassesUrl: `${this.arrGlasses[0].url}`,
    glassesName: `${this.arrGlasses[0].name}`,
    glassesPrice: `${this.arrGlasses[0].price}`,
    glassesDesc: `${this.arrGlasses[0].desc}`,
  };

  render() {
    return (
      <Fragment>
        <div className="wrapper w-full h-screen">
          <div
            className="text-center p-10 text-white text-2xl font-bold"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <p>TRY GLASSES APP ONLINE</p>
          </div>
          <div className="max-w-screen-lg mx-auto mt-10">
            <div className="flex items-center justify-between">
              <div className="w-1/3 relative flex items-center flex-col">
                <img
                  src="./img/model.jpg"
                  className="w-4/5 shadow-xl rounded"
                  alt="..."
                />
                <img
                  src="./img/v1.png"
                  className="w-1/2 absolute opacity-80"
                  style={{ top: "80px", left: "86px" }}
                  alt="..."
                />
                <div
                  className="absolute w-4/5 bg-yellow-200 p-2 rounded"
                  style={{ bottom: "0px" }}
                >
                  <p className="font-bold text-blue-500">FENDI F8750</p>
                  <p>
                    Light pink square lenses define these sunglasses, ending
                    with amother of pearl effect tip.
                  </p>
                </div>
              </div>
              <div className="w-1/3 flex items-center flex-col relative">
                <img
                  src="./img/model.jpg"
                  className="w-4/5 shadow-xl rounded"
                  alt="..."
                />
                <img
                  src={this.state.glassesUrl}
                  className="w-1/2 absolute opacity-80"
                  style={{ top: "80px", left: "86px" }}
                  alt="..."
                />
                <div
                  className="absolute w-4/5 bg-yellow-200 p-2 rounded"
                  style={{ bottom: "0px" }}
                >
                  <p className="font-bold text-blue-500">{this.state.glassesName} {this.state.glassesPrice}</p>
                  <p>
                    {this.state.glassesDesc}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-blue-300 shadow-xl mt-10 grid grid-cols-5 gap-5 rounded-2xl">
              {this.renderButtonGlasses()}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
