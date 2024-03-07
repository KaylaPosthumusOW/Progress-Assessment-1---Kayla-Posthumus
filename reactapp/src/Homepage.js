import React from 'react';
import './homepage.css';
import Stadium from './football stadium.jpg'

function Homepage() {
  return (

    
    <div>
        <h1 className="header">Welcome to the Future of Soccer Stats</h1>

        <div class="yellow-block">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={Stadium} className="stadium-img" alt="logo" />
                </div>
                <div className="col-6">
                <p className="introduction">Welcome to FootStats - Your Ultimate Destination for Comprehensive Football Statistics!Step into the world of football analytics with us, where every match tells a story, and every player's performance is dissected through the lens of insightful statistics.</p>
                <button type="button" class="btn">Learn More</button>
                </div>
            </div>
        </div>    
        </div>

        <div className="container">
          <div className="row">
            <div className="col-7">
              <h2>Top Teams in the Premiere League</h2>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li>Arsenal</li>
                      <li>Aston Villa</li>
                      <li>Brentford</li>
                      <li>Brigthon</li>
                      <li>Burnley</li>
                      <li>Chelsea</li>
                      <li>Crystal Palace</li>
                      <li>Everton</li>
                      <li>Fulham</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                        <li>Liverpool</li>
                        <li>Manchester City</li>
                        <li>Manchester United</li>
                        <li>Newscastle United</li>
                        <li>Nottingham Forest</li>
                        <li>sheffield United</li>
                        <li>Crystal Palace</li>
                        <li>Tottenham Hotspur</li>
                        <li>Wolverhampton Wanderers</li>
                      </ul>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-5">
              <form>
                <h4>Sign up for our Newsletter!</h4>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"></input>
                <button type="submit">Submit</button>
              </form>

            </div>
          </div>
        </div>
    </div>
  );
}

export default Homepage;
