import React, { Component } from 'react';
import './css/Home.css';
import stocks from './image/stocks.png'

class Home extends Component {
    state = {

    }

    render() {
        return(
                <>
                <div className='Home-bg'>
                <div className='Home'>
                    <h1>iBudget</h1>
                <h2>A Simple Solution to Calculating your Budget </h2>
                
                <img src={stocks} alt='stocks.png'/>
                <p></p>
                    <h2>Description:</h2>
                        <p>iBudget is capable of utilizing user-inputted data on monthly income and expenses to calculate the monthly balance.</p>
                            <p>This core information is important to feed the calculation data for other time intervals that are of interest.</p>
                        
                    <h2>Features:</h2>
                        <p>• Add and remove multiple instances of Income and Expense forms based on specific indexes.</p>
                        <p>• Showcase additional (daily, weekly, bi-weekly, annual) data based on different time intervals.</p>
                        <p>• Visual representation via pie chart to emphasize conclusive data.</p>
                        <p>• Data history of inputted data (in progress).</p>
                    
                
                        <h2>Demo:</h2>
                        <p>To get started, click on the "Calculator" tab on the above navbar.</p>
                        <h2>See the code:</h2>
                        <a href='https://github.com/TheCaptainFalcon/DC_Week14'>https://github.com/TheCaptainFalcon/DC_Week14</a>
                    </div>
                    </div>
                    
            </>  
        )
    }
}

export default Home;