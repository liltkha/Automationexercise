// class SignUp {

//     visit() {
//         return  cy.visit("https://automationexercise.com/login");
//        }
//      getUsername() {
//         return cy.get('[data-qa="signup-name"]');
//       }
    
//       getPassword() {
//         return cy.get('[data-qa="signup-email"]');
//       }
    
//       submit() {
//         return cy.get('[data-qa="signup-button"]');
//       }
      
//       generateRandomName(length,email=''){
//         let result = '';
//         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         const charactersLength = characters.length;
//         let counter = 0;
//         while (counter < length) {
//           result += characters.charAt(Math.floor(Math.random() * charactersLength));
//           counter += 1;
//         }
//         return `test${result}${email}`;
  
//       }
//   }

//   export const registration = new SignUp();