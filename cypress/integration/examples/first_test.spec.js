describe('Overall Monthly Summary', () => {
    it('Goes to Calc route of site, interacts with the income and expense forms', () => {

        cy.visit('http://localhost:3000/calculator');

        cy.get('#data-income-add')
        .type('5000');

        cy.get('#data-expense-add')
        .type('50');

        cy.get('#calc')
        .click();

    it('Data validation of the overall monthly summaries', () => {

        cy.get('#data-income-summary')
        cy.contains('5000');

        cy.get('#data-balance-summary')
        cy.contains('4950');

        cy.get('#data-expense-summary')
        cy.contains('50');
    });
});

describe('Daily Analysis Tab', () => {
    it('Scrolls up and clicks the Daily tab of the analysis section', () => {

        cy.get('.analysis').scrollIntoView()

        cy.get('#Budget-analysis-tab-daily')
        .click();

    });

    it('Data validation of the daily tab income', () => {

        cy.get('#data-analysis-daily-income')
        cy.contains('166.67')

        cy.get('#daily-income-percentage')
        cy.contains('1.6666999999999998')
    });
    
    it('Data validation of the daily tab expenses', () => {
        cy.get('#data-analysis-daily-expense')
        cy.contains('1.67')

        cy.get('#daily-expense-percentage')
        cy.contains('0.0167')
    });

    it('Data validation of the daily tab balance', () => {
        cy.get('#data-analysis-daily-balance')
        cy.contains('165')

        cy.get('#daily-balance-percentage')
        cy.contains('1.65')

    });
});

describe('Weekly Analysis Tab', () => {
    it('Clicks the Weekly tab of the analysis section', () => {
        cy.get('#Budget-analysis-tab-weekly')
        .click();
    });
    
    it('Data validation of the weekly tab income', () => {

        cy.get('#data-analysis-weekly-income')
        cy.contains('1250')

        cy.get('#weekly-income-percentage')
        cy.contains('12.5')
    });
    
    it('Data validation of the weekly tab expenses', () => {
        cy.get('#data-analysis-weekly-expense')
        cy.contains('12.5')

        cy.get('#weekly-expense-percentage')
        cy.contains('0.125')
    });

    it('Data validation of the weekly tab balance', () => {
        cy.get('#data-analysis-weekly-balance')
        cy.contains('1237.5')

        cy.get('#weekly-balance-percentage')
        cy.contains('12.375')

    });
});

describe('Bi-Weekly Analysis Tab', () => {
    it('Clicks the Bi-Weekly tab of the analysis section', () => {
        cy.get('#Budget-analysis-tab-biweekly')
        .click();
    });

    it('Data validation of the bi-weekly tab income', () => {

        cy.get('#data-analysis-biweekly-income')
        cy.contains('2500')

        cy.get('#biweekly-income-percentage')
        cy.contains('25')
    });
    
    it('Data validation of the bi-weekly tab expenses', () => {
        cy.get('#data-analysis-biweekly-expense')
        cy.contains('25')

        cy.get('#biweekly-expense-percentage')
        cy.contains('.25')
    });

    it('Data validation of the bi-weekly tab balance', () => {
        cy.get('#data-analysis-biweekly-balance')
        cy.contains('2475')

        cy.get('#biweekly-balance-percentage')
        cy.contains('24.75')

    });
});

describe('Annual Analysis Tab', () => {
    it('Clicks the Annual tab of the analysis section', () => {
        cy.get('#Budget-analysis-tab-annual')
        .click();
    });

    it('Data validation of the annual tab income', () => {

        cy.get('#data-analysis-annual-income')
        cy.contains('60000')

        cy.get('#annual-income-percentage')
        cy.contains('600')
    });
    
    it('Data validation of the annual tab expenses', () => {
        cy.get('#data-analysis-annual-expense')
        cy.contains('600')

        cy.get('#annual-expense-percentage')
        cy.contains('6')
    });

    it('Data validation of the annual tab balance', () => {
        cy.get('#data-analysis-annual-balance')
        cy.contains('59400')

        cy.get('#annual-balance-percentage')
        cy.contains('594')

    });
});