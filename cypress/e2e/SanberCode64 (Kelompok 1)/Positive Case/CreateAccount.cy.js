describe('User Registration', () => {
    it('Should register a new user successfully', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');

        cy.get('#firstname').type('Rizky');
        cy.get('#lastname').type('Yulian');
        cy.get('#email_address').type('rizkyyulian@example.com');
        cy.get('#password').type('Rizky@1234');
        cy.get('#password-confirmation').type('Rizky@1234');

        cy.get('button[title="Create an Account"]').click();

    });
});

describe('Negative Test Case - Register Account', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    });

    it('Should show an error when using an already registered email', () => {
        cy.get('#firstname').type('Rizky');
        cy.get('#lastname').type('Yulian');
        cy.get('#email_address').type('example@mail.com'); 
        cy.get('#password').type('Password123!');
        cy.get('#password-confirmation').type('Password123!');
        cy.get('.submit').click(); 
        
        cy.get('.message-error').should('contain', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.'); 
    });

    it('Should show an error for weak password', () => {
        cy.get('#firstname').type('Rizky');
        cy.get('#lastname').type('Yulian');
        cy.get('#email_address').type('newuser@mail.com');
        cy.get('#password').type('123'); 
        cy.get('#password-confirmation').type('123');
        cy.get('.submit').click();
        
    });

    it('Should show an error for invalid email format', () => {
        cy.get('#firstname').type('Rizky');
        cy.get('#lastname').type('Yulian');
        cy.get('#email_address').type('invalid-email');
        cy.get('#password').type('Password123!');
        cy.get('#password-confirmation').type('Password123!');
        cy.get('.submit').click();
        
    });

    it('Should show an error when required fields are empty', () => {
        cy.get('.submit').click();
        
    });

    it('Should show an error when password and confirmation password do not match', () => {
        cy.get('#firstname').type('Rizky');
        cy.get('#lastname').type('Yulian');
        cy.get('#email_address').type('testuser@mail.com');
        cy.get('#password').type('Password123!');
        cy.get('#password-confirmation').type('DifferentPass123!');
        cy.get('.submit').click();
        
    });
});
