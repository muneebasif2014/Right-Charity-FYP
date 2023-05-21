
import Slider from 'react-slick';
import '../cssfiles/responsivefront.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Projectscategory } from '../constants/index';
import '../App.css';
import Web3 from 'web3';
import React, { useEffect, useState } from 'react'
const { ethers } = require('ethers');
const contractAbi = require('./CharityCrowdfunding.json');
const contractAddress = '0x988dcfea132d51cb68b1a73a4772d6ddad768552'; // replace with your contract address

const Exploreprojects = () => {
  const [projectList, setProjectList] = useState([]);

  const handleGetProjects = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const contract = new web3.eth.Contract(contractAbi, contractAddress);

    const numProjects = await contract.methods.numProjects().call();
    const allProjects = await contract.methods.getProjects().call();

    const formattedProjects = allProjects.map((project, index) => {
      return {
        projectId: index,
        name: project.name,
        goalAmount: project.goalAmount,
        raisedAmount: project.raisedAmount,
        isCompleted: project.isCompleted
      };
    });

    setProjectList(formattedProjects);
  };
  
  useEffect(() => {
    handleGetProjects();
  }, []);
  const [inputVal, setInputVal] = useState('');
  console.log('value', inputVal);
  const handleChange = (event) => {
    setInputVal(event.target.value);
  };

  const handleFundProject = async (projectId, amount) => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const contract = new web3.eth.Contract(contractAbi, contractAddress);

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    await contract.methods.fundProject(projectId, amount).send({ from: account, value: amount });

    handleGetProjects(); // Refresh the project list after funding a project
    setInputVal('');
  };
  
  // const value = data.price;
  const confirmDonation = () => {
    console.log('value 1', inputVal);
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };
  return (
    <section id="project">
      <div className="container">
        <div className="text-center">
          <h5 className="common-h5">Featored Projects</h5>
          <h2 className="common-h2">Explore Our Projects</h2>
        </div>
        <div className="">
          <div className="Appp">
            <Slider {...settings}>
              {projectList.map((project) => (
                <div
                  className="card"
                  style={{
                    position: 'relative',
                  }}>
                  <div className="card-top">
                    <p><h3>Project {project.projectId + 1}</h3></p>
                    <h1>{project.name}</h1>
                  </div>
                  <div className="card-bottom">
                  <p>Goal Amount: {project.goalAmount}</p>
                  <p>Raised Amount: {project.raisedAmount}</p>
                  <p>Completed: {project.isCompleted ? 'Yes' : 'No'}</p>
                   
                  </div>
                  <div className="hoverfifthmonth">
                    <p className="hoverfifthmonth2">
                      {' '}
                      Enter your Donation Price
                    </p>
                    <input
                      className="inputinhover"
                      value={inputVal}
                      type="text"
                      placeholder="enter the price"
                      onChange={handleChange}
                    />
                    <button
                      className="common-btn"
                      onClick={() => handleFundProject(project.projectId, inputVal)}>
                      {' '}
                      
                      CONFIRM
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
};

export default Exploreprojects;