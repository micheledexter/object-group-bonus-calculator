const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

// Create the 'Employee' class
class Employee {
    // The constructor needs to be able to provide the following properties:
    // * name
    // * bonusPercentage (ADDED)
    // * totalCompensation (ADDED)
    // * totalBonus (ADDED)
    constructor(employee) {
        // These 4 properties are taken directly from the literal objects
        this.name = employee.name;
        this.employeeNumber = employee.employeeNumber;
        this.annualSalary = employee.annualSalary;
        this.reviewRating = employee.reviewRating;
        // The bonusPercentage property is calculated based on the following
        // parameters:
        // * employeeNumber
        // * annualSalary
        // * reviewRating
        this.bonusPercentage = calculateBonusPercentage(this.employeeNumber, this.annualSalary, this.reviewRating);
        // Convert the annualSalary to an integer from a string, then multiply it against the bonus percentage
        // property to get the total bonus
        this.totalBonus = Math.round(this.bonusPercentage * parseInt(this.annualSalary));
        // Convert the annualSalary to an integer from a string and add the totalBonus
        this.totalCompensation = parseInt(this.annualSalary) + this.totalBonus;

        function calculateBonusPercentage(employeeNumber, annualSalary, reviewRating) {
            // First we want to create a bonus variable to store the total bonus modifier
            let bonus = 0;
            // Next we'll look at what the reviewRating is and change the modifier, or in
            // case of a 2 or less, just return 0 because they don't deserve a bonus.
            if (reviewRating <= 2) {
                return 0;
            } else if (reviewRating == 3) {
                bonus += 0.04;
            } else if (reviewRating == 4) {
                bonus += 0.06;
            } else if (reviewRating == 5) {
                bonus += 0.1;
            }
            // After that, we'll look at the employee number, and if it's 4 digits,
            // we'll give an extra 5% increase to their bonus
            if (employeeNumber.length == 4) {
                bonus += 0.05;
            }
            // If the employee has an annualSalary of $65,000 or more, then subtract 1% of the bonus
            if (annualSalary >= 65000) {
                bonus -= 0.01;
            }
            // Set a maximum bonus amount of 13% for any employee
            if (bonus > 0.13) {
                bonus = 0.13;
            }
            // Do not allow a bonus to be a negative percent
            if (bonus < 0) {
                bonus = 0;
            }
            // Finally, return the calculated bonus
            return bonus;
        }
    }
}

// Go through the array of employees and for each one, create a new Employee object and just
// log it directly to the console
for (let i of employees) {
    console.log(new Employee(i));
}