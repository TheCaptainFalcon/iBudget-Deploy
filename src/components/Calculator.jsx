import React, { Component } from 'react';
import './css/Calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Card, CardDeck} from 'react-bootstrap';
import PieChart from 'react-minimal-pie-chart';

class Calculator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        income: [
            {Name: "", Description: "", Amount:""}
        ],
        expense: [
            { Name:"", Description:"", Amount:""}
        ],
        incomeTotal: 0,
        expenseTotal: 0,
        incomeDaily: 0,
        incomeWeekly: 0,
        incomeBiWeekly: 0,
        incomeAnnually: 0,
        expenseDaily: 0,
        expenseWeekly: 0,
        expenseBiWeekly: 0,
        expenseAnnually: 0,
        balanceDaily: 0,
        balanceWeekly: 0,
        balanceBiWeekly: 0,
        balanceAnnually: 0,
        balanceTotal: 0,
        incomeAmount: [{Amount: ""}]
      };
    }
    
    handleAddIncome(){
      this.setState(prevState => (
          { income: [...prevState.income, { Name: "", Description: "", Amount:''}]}
          ))
    }

    handleAddExpense(){
      this.setState(prevState => (
          { expense: [...prevState.expense, { Name: "", Description: "", Amount:''}]}
          ))
    }
    
    incomeForm(){
       return this.state.income.map((element, index) => (
         <div className="Calculator-income" key={index}>
             
            <fieldset className='formFieldset'>
                <input
                className='deleteForm' 
                type='button' 
                value='X' 
                onClick={this.handleRemoveIncome.bind(this, index)}
                />
                <legend className='formLegend'>{index}</legend>
                <label>Name    
                    <input 
                    type="text"
                    name="Name" 
                    placeholder="Name" 
                    value={element.Name ||''} 
                    onChange={this.handleIncomeChange.bind(this, index)} 
                    />
                </label>
                <label>Description
                    <input 
                    type="text"
                    name="Description" 
                    placeholder="Description" 
                    value={element.Description ||''} 
                    onChange={this.handleIncomeChange.bind(this, index)} 
                    />
                </label>
                <label>Amount
                    <input
                    id='data-income-add' 
                    type="number"
                    name="Amount" 
                    placeholder="$" 
                    value={element.Amount ||''} 
                    onChange={this.handleIncomeChange.bind(this, index)} 
                    />
                </label>
                </fieldset>
            </div>          
        ))
    }
    expenseForm(){
       return this.state.expense.map((element, index) => (
         <div key={index}>
            <fieldset className='formFieldset'>
            <input className='deleteForm' type='button' value='X' onClick={this.handleRemoveExpense.bind(this, index)}/>
                <legend className='formLegend'>{index}</legend>
                <label>Name
                <input 
                    type="text"
                    name="Name"
                    placeholder="Name"  
                    value={element.Name ||''} 
                    onChange={this.handleExpenseChange.bind(this, index)} 
                    />
                </label>
                <label>Description
                    <input 
                    type='text'
                    name="Description" 
                    placeholder="Description" 
                    value={element.Description ||''} 
                    onChange={this.handleExpenseChange.bind(this, index)} 
                    />
                </label>
                <label>Amount
                    <input 
                    id='data-expense-add'
                    type="number"
                    name="Amount" 
                    placeholder="$" 
                    value={element.Amount ||''} 
                    onChange={this.handleExpenseChange.bind(this, index)} 
                    />
                </label>
            </fieldset>
         </div>          
       ))
    }
    
    handleIncomeChange(i, e) {
        const { name, value } = e.target;
        let income = [...this.state.income];
        income[i] = {...income[i], [name]: value};
        this.setState({ income });
    }
    handleExpenseChange(i, e) {
        const { name, value } = e.target;
        let expense = [...this.state.expense];
        expense[i] = {...expense[i], [name]: value};
        this.setState({ expense });
    }
    
    handleRemoveIncome(i){
        let income = [...this.state.income];
        income.splice(i, 1);
        this.setState({ income });
    }
    handleRemoveExpense(i){
        let expense = [...this.state.expense];
        expense.splice(i, 1);
        this.setState({ expense });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const addIncomeTotal = this.state.income.reduce((totalAmount, incomeAmount) => 
        totalAmount + parseFloat(incomeAmount.Amount, 10), 0);

        const addExpenseTotal = this.state.expense.reduce((totalAmount, expenseAmount) =>
        totalAmount + parseFloat(expenseAmount.Amount, 10), 0);             

        const roundedIncomeTotal = Math.round((addIncomeTotal + Number.EPSILON) * 100) / 100
        const roundedIncomeDaily = Math.round(((addIncomeTotal/30) + Number.EPSILON) * 100) / 100
        const roundedIncomeWeekly = Math.round(((addIncomeTotal/4) + Number.EPSILON) * 100) / 100
        const roundedIncomeBiWeekly = Math.round(((addIncomeTotal/2) + Number.EPSILON) * 100) / 100
        const roundedIncomeAnnually = Math.round(((addIncomeTotal*12) + Number.EPSILON) * 100) / 100
        const roundedExpenseTotal = Math.round((addExpenseTotal + Number.EPSILON) * 100) / 100
        const roundedExpenseDaily = Math.round(((addExpenseTotal/30) + Number.EPSILON) * 100) / 100
        const roundedExpenseWeekly = Math.round(((addExpenseTotal/4) + Number.EPSILON) * 100) / 100
        const roundedExpenseBiWeekly = Math.round(((addExpenseTotal/2) + Number.EPSILON) * 100) / 100
        const roundedExpenseAnnually = Math.round(((addExpenseTotal*12) + Number.EPSILON) * 100) / 100
        const roundedBalanceDaily = Math.round((((addIncomeTotal - addExpenseTotal)/30) + Number.EPSILON) * 100) /100
        const roundedBalanceWeekly = Math.round((((addIncomeTotal - addExpenseTotal)/4) + Number.EPSILON) * 100) /100
        const roundedBalanceBiWeekly = Math.round((((addIncomeTotal - addExpenseTotal)/2) + Number.EPSILON) * 100) /100
        const roundedBalanceAnnually = Math.round((((addIncomeTotal - addExpenseTotal)*12) + Number.EPSILON) * 100) /100
        const roundedBalanceTotal = Math.round(((addIncomeTotal - addExpenseTotal) + Number.EPSILON) * 100) / 100
        
        this.setState({
            incomeTotal : roundedIncomeTotal,
            expenseTotal: roundedExpenseTotal,
            incomeDaily : roundedIncomeDaily,
            incomeWeekly : roundedIncomeWeekly,
            incomeBiWeekly : roundedIncomeBiWeekly,
            incomeAnnually : roundedIncomeAnnually,
            expenseDaily : roundedExpenseDaily,
            expenseWeekly : roundedExpenseWeekly,
            expenseBiWeekly : roundedExpenseBiWeekly,
            expenseAnnually : roundedExpenseAnnually,
            balanceDaily : roundedBalanceDaily,
            balanceWeekly : roundedBalanceWeekly,
            balanceBiWeekly : roundedBalanceBiWeekly,
            balanceAnnually : roundedBalanceAnnually,
            balanceTotal : roundedBalanceTotal
        })
    };

    handleReset(event) {
        event.preventDefault();
        this.setState({
            income: [
                {Name: "", Description: "", Amount:''}
            ],
            expense: [
                { Name:'', Description:'', Amount:''}
            ],
            incomeTotal: 0,
            expenseTotal: 0,
            incomeDaily: 0,
            incomeWeekly: 0,
            incomeBiWeekly: 0,
            incomeAnnually: 0,
            expenseDaily: 0,
            expenseWeekly: 0,
            expenseBiWeekly: 0,
            expenseAnnually: 0,
            balanceDaily: 0,
            balanceWeekly: 0,
            balanceBiWeekly: 0,
            balanceAnnually: 0,
            balanceTotal: 0,
            });
    };
  
    render() {
      return (
        <div className='Calculator-bg'>
            <div className='Calculator'>
                <div className='Calculator-summary'>
                    <h1>Monthly Summary</h1>
                    <CardDeck>
                        <Card className='Card-summary'>
                            <Card.Body>
                            <Card.Title>Income</Card.Title>
                            <Card.Text id='data-income-summary'>
                                ${this.state.incomeTotal}
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card className='Card-summary'>
                            <Card.Body>
                            <Card.Title>Balance</Card.Title>
                            <Card.Text id='data-balance-summary'>
                                ${this.state.balanceTotal}
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card className='Card-summary'>
                            <Card.Body>
                            <Card.Title>Expense</Card.Title>
                            <Card.Text id='data-expense-summary'>
                                $({this.state.expenseTotal})
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
                <div className='analysis'>
                    <h1>Budget Analysis</h1>
                    <Tabs defaultActiveKey="start" id="Budget-analysis">
                        <Tab eventKey="start" title="Start">
                            <br/>
                        <p>To get started, enter your monthly income and/or expense data and press the "Calculate" button.</p>
                        <p>You can then view the in-depth data breakdown based on the various tabs.</p>
                        <p>If you need to start over, there are X's to remove the unneeded fields and a "Reset" button to start over.</p>
                        </Tab>
                        <Tab id='data-daily-tab' eventKey="daily" title="Daily">
                            <br/>
                            <CardDeck>
                                <Card className='Card-analysis'>
                                    <Card>
                                    <Card.Body>
                                        <Card.Title>Daily Income</Card.Title>
                                            <Card.Text id='data-analysis-daily-income'>
                                                ${this.state.incomeDaily}
                                            </Card.Text>
                                        <Card.Title>Daily Income (%)</Card.Title>
                                            <Card.Text id='daily-income-percentage'>
                                                {this.state.incomeDaily/100}%
                                            </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    <Card>
                                    <Card.Body>
                                        <Card.Title>Daily Expense</Card.Title>
                                            <Card.Text id='data-analysis-daily-expense'>
                                                ${this.state.expenseDaily}
                                            </Card.Text>
                                        <Card.Title>Daily Expense (%)</Card.Title>
                                            <Card.Text id='daily-expense-percentage'>
                                                {this.state.expenseDaily/100}%
                                            </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    <Card>
                                    <Card.Body>
                                        <Card.Title>Daily Balance</Card.Title>
                                            <Card.Text id='data-analysis-daily-balance'>
                                                ${this.state.balanceDaily}
                                            </Card.Text>
                                        <Card.Title>Daily Balance (%)</Card.Title>
                                            <Card.Text id='daily-balance-percentage'>
                                                {this.state.balanceDaily/100}%
                                            </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Card>
                                <Card className='Card-analysis'>
                                    <Card.Body>
                                    <PieChart
                                        radius={50}
                                        cx={50}
                                        cy={50}
                                        data={[
                                            { title: 'Balance', value: (this.state.incomeTotal/30), color: '#00C851' },
                                            { title: 'Expense', value: (this.state.expenseTotal/30), color: '#ff4444' }
                                        ]}
                                        label={({data, dataIndex}) => 
                                        Math.round(data[dataIndex].percentage) +'%'} 
                                        labelStyle={{fontSize: '5px', fontFamily: 'sans-serif', fill: '#121212'}}
                                    />
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                            <CardDeck id='history-cardDeck'>
                            <Card className='Card-analysis-history'>
                                    <Card.Body>
                                    <Card.Title>Income History</Card.Title>
                                        <Card.Text>
                                            {JSON.stringify(this.state.income, null, "\t").replace(/[\[\]\{\}/\"/\,/]+/g, '') }
                                        </Card.Text>
                                    </Card.Body>
                                
                                </Card>
                            <Card className='Card-analysis-history'>
                                    <Card.Body>
                                    <Card.Title>Expense History</Card.Title>
                                        <Card.Text>
                                            {JSON.stringify(this.state.expense, null, "\t").replace(/[\[\]\{\}/\"/\,/]+/g, '') }
                                        </Card.Text>
                                    </Card.Body>
                                
                                </Card>
                            </CardDeck>
                        </Tab>
                        <Tab eventKey="weekly" title="Weekly">
                            <br/>
                            <CardDeck>
                                <Card className='Card-analysis'>
                                    <Card>
                                    <Card.Body>
                                        <Card.Title>Weekly Income</Card.Title>
                                            <Card.Text id='data-analysis-weekly-income'>
                                                ${this.state.incomeWeekly}
                                            </Card.Text>
                                        <Card.Title>Weekly Income (%)</Card.Title>
                                            <Card.Text id='weekly-income-percentage'>
                                                {this.state.incomeWeekly/100}%
                                            </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    <Card>
                                    <Card.Body>
                                        <Card.Title>Weekly Expense</Card.Title>
                                            <Card.Text id='data-analysis-weekly-expense'>
                                                ${this.state.expenseWeekly}
                                            </Card.Text>
                                        <Card.Title>Weekly Expense (%)</Card.Title>
                                            <Card.Text id='weekly-expense-percentage'>
                                                {this.state.expenseWeekly/100}%
                                            </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    <Card>
                                    <Card.Body>
                                        <Card.Title>Weekly Balance</Card.Title>
                                            <Card.Text id='data-analysis-weekly-balance'>
                                                ${this.state.balanceWeekly}
                                            </Card.Text>
                                        <Card.Title>Weekly Balance (%)</Card.Title>
                                            <Card.Text id='weekly-balance-percentage'>
                                                {this.state.balanceWeekly/100}%
                                            </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Card>
                                <Card className='Card-analysis'>
                                    <Card.Body>
                                    <PieChart
                                        radius={50}
                                        cx={50}
                                        cy={50}
                                        data={[
                                            { title: 'Balance', value: (this.state.incomeTotal/30), color: '#00C851' },
                                            { title: 'Expense', value: (this.state.expenseTotal/30), color: '#ff4444' }
                                        ]}
                                        label={({data, dataIndex}) => 
                                        Math.round(data[dataIndex].percentage) +'%'} 
                                        labelStyle={{fontSize: '5px', fontFamily: 'sans-serif', fill: '#121212'}}
                                    />
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                            <CardDeck id='history-cardDeck'>
                            <Card className='Card-analysis-history'>
                                    <Card.Body>
                                    <Card.Title>Income History</Card.Title>
                                        <Card.Text>
                                            {JSON.stringify(this.state.income, null, "\t").replace(/[\[\]\{\}/\"/\,/]+/g, '') }
                                        </Card.Text>
                                    </Card.Body>
                                
                                </Card>
                            <Card className='Card-analysis-history'>
                                    <Card.Body>
                                    <Card.Title>Expense History</Card.Title>
                                        <Card.Text>
                                            {JSON.stringify(this.state.expense, null, "\t").replace(/[\[\]\{\}/\"/\,/]+/g, '') }
                                        </Card.Text>
                                    </Card.Body>
                                
                                </Card>
                            </CardDeck>
                        </Tab>
                        <Tab eventKey="biweekly" title="Bi-Weekly">
                            <br/>
                            <CardDeck>
                                <Card className='Card-analysis'>
                                    <Card>
                                    <Card.Body>
                                        <Card.Title>Bi-Weekly Income</Card.Title>
                                            <Card.Text id='data-analysis-biweekly-income'>
                                                ${this.state.incomeBiWeekly}
                                            </Card.Text>
                                        <Card.Title>Bi-Weekly Income (%)</Card.Title>
                                            <Card.Text id='biweekly-income-percentage'>
                                                {this.state.incomeBiWeekly/100}%
                                            </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    <Card>
                                    <Card.Body>
                                        <Card.Title>Bi-Weekly Expense</Card.Title>
                                            <Card.Text id='data-analysis-biweekly-expense'>
                                                ${this.state.expenseBiWeekly}
                                            </Card.Text>
                                        <Card.Title>Bi-Weekly Expense (%)</Card.Title>
                                            <Card.Text id='biweekly-expense-percentage'>
                                                {this.state.expenseBiWeekly/100}%
                                            </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    <Card>
                                    <Card.Body>
                                        <Card.Title>Bi-Weekly Balance</Card.Title>
                                            <Card.Text id='data-analysis-biweekly-balance'>
                                                ${this.state.balanceBiWeekly}
                                            </Card.Text>
                                        <Card.Title>Bi-Weekly Balance (%)</Card.Title>
                                            <Card.Text id='biweekly-balance-percentage'>
                                                {this.state.balanceBiWeekly/100}%
                                            </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Card>
                                <Card className='Card-analysis'>
                                    <Card.Body>
                                    <PieChart
                                        radius={50}
                                        cx={50}
                                        cy={50}
                                        data={[
                                            { title: 'Balance', value: (this.state.incomeTotal/30), color: '#00C851' },
                                            { title: 'Expense', value: (this.state.expenseTotal/30), color: '#ff4444' }
                                        ]}
                                        label={({data, dataIndex}) => 
                                        Math.round(data[dataIndex].percentage) +'%'} 
                                        labelStyle={{fontSize: '5px', fontFamily: 'sans-serif', fill: '#121212'}}
                                    />
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                            <CardDeck id='history-cardDeck'>
                            <Card className='Card-analysis-history'>
                                    <Card.Body>
                                    <Card.Title>Income History</Card.Title>
                                        <Card.Text>
                                            {JSON.stringify(this.state.income, null, "\t").replace(/[\[\]\{\}/\"/\,/]+/g, '') }
                                        </Card.Text>
                                    </Card.Body>
                                
                                </Card>
                            <Card className='Card-analysis-history'>
                                    <Card.Body>
                                    <Card.Title>Expense History</Card.Title>
                                        <Card.Text>
                                            {JSON.stringify(this.state.expense, null, "\t").replace(/[\[\]\{\}/\"/\,/]+/g, '') }
                                        </Card.Text>
                                    </Card.Body>
                                
                                </Card>
                            </CardDeck>
                        </Tab>
                        <Tab eventKey="annual" title="Annual">
                            <br/>
                            <CardDeck>
                                <Card className='Card-analysis'>
                                    <Card>
                                    <Card.Body>
                                        <Card.Title>Annual Income</Card.Title>
                                            <Card.Text id='data-analysis-annual-income'>
                                                ${this.state.incomeAnnually}
                                            </Card.Text>
                                        <Card.Title>Annual Income (%)</Card.Title>
                                            <Card.Text id='annual-income-percentage'>
                                                {this.state.incomeAnnually/100}%
                                            </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    <Card>
                                    <Card.Body>
                                        <Card.Title>Annual Expense</Card.Title>
                                            <Card.Text id='data-analysis-annual-expense'>
                                                ${this.state.expenseAnnually}
                                            </Card.Text>
                                        <Card.Title>Annual Expense (%)</Card.Title>
                                            <Card.Text id='annual-expense-percentage'>
                                                {this.state.expenseAnnually/100}%
                                            </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    <Card>
                                    <Card.Body>
                                        <Card.Title>Annual Balance</Card.Title>
                                            <Card.Text id='data-analysis-annual-balance'>
                                                ${this.state.balanceAnnually}
                                            </Card.Text>
                                        <Card.Title>Annual Balance (%)</Card.Title>
                                            <Card.Text id='annual-balance-percentage'>
                                                {this.state.balanceAnnually/100}%
                                            </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Card>
                                <Card className='Card-analysis'>
                                    <Card.Body>
                                    <PieChart
                                        radius={50}
                                        cx={50}
                                        cy={50}
                                        data={[
                                            { title: 'Balance', value: (this.state.incomeTotal/30), color: '#00C851' },
                                            { title: 'Expense', value: (this.state.expenseTotal/30), color: '#ff4444' }
                                        ]}
                                        label={({data, dataIndex}) => 
                                        Math.round(data[dataIndex].percentage) +'%'} 
                                        labelStyle={{fontSize: '5px', fontFamily: 'sans-serif', fill: '#121212'}}
                                    />
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                            <CardDeck id='history-cardDeck'>
                            <Card className='Card-analysis-history'>
                                    <Card.Body>
                                    <Card.Title>Income History</Card.Title>
                                        <Card.Text>
                                            {JSON.stringify(this.state.income, null, "\t").replace(/[\[\]\{\}/\"/\,/]+/g, '') }
                                        </Card.Text>
                                    </Card.Body>
                                
                                </Card>
                            <Card className='Card-analysis-history'>
                                    <Card.Body>
                                    <Card.Title>Expense History</Card.Title>
                                        <Card.Text>
                                            {JSON.stringify(this.state.expense, null, "\t").replace(/[\[\]\{\}/\"/\,/]+/g, '') }
                                        </Card.Text>
                                    </Card.Body>
                                
                                </Card>
                            </CardDeck>
                        </Tab>
                    </Tabs>
                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='Calculator-income'>
                        <h2>Income</h2>
                        <input className='income-add' type='button' value='+' onClick={this.handleAddIncome.bind(this)}/>
                        <div className='income-content'>
                        {this.incomeForm()}
                        </div>
                        
                    </div>
                    <div className='Calculator-expense'>   
                        <h2>Expense</h2>
                        <input className='expense-add' type='button' value='+' onClick={this.handleAddExpense.bind(this)}/>
                        <div className='expense-content'>
                        {this.expenseForm()}
                        </div>
                    </div>
                </form>
                
                <form onSubmit={this.handleSubmit.bind(this)}>
                <div id='calc' className='calcReset'>
                        <button>Calculate</button>
                    </div>
            </form>
                <form onSubmit={this.handleReset.bind(this)}>
                <div id='reset' className='calcReset'>
                    <button>Reset</button>
                </div>
                </form> 
            </div>
        </div>
      );
    }
  }
  
export default Calculator;