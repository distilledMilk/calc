# Calculator

A simple, iOS-inspired calculator built with HTML, CSS, and JavaScript. Features a clean, dark interface with basic arithmetic operations.

## Features

- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷), Modulo (%)
- **Clean Interface**: iOS-style design with rounded buttons and dark theme
- **Visual Feedback**: Display shows both current input and calculation history
- **Error Handling**: Prevents division by zero with user alerts
- **Responsive Design**: Works on various screen sizes

## How to Use

1. **Numbers**: Click number buttons (0-9) to input values
2. **Decimal**: Click the decimal point (.) button for decimal numbers
3. **Operations**: Choose from +, -, ×, ÷, or % operators
4. **Calculate**: Press = to execute the calculation
5. **Clear**: Use AC (All Clear) to reset everything
6. **Delete**: Use DEL to remove the last entered digit or operator

## Technical Details

### Key Functions

- `appendNumber(num)`: Adds digits to the current number
- `appendOperator(operator)`: Sets the mathematical operator
- `operate()`: Performs the calculation based on stored values
- `clearScreen()`: Resets all values and display
- `deleteNumber()`: Removes last input or cancels current operation

### Display Features

- **Main Screen**: Shows current input/result (max 8 characters)
- **Calculation Display**: Shows the full equation being calculated
- **Scientific Notation**: Large numbers automatically convert to exponential format
- **Input Validation**: Prevents invalid operations and handles edge cases

## Styling

The calculator mimics iOS design with:

- Dark gray background (#1C1C1C)
- Orange operator buttons (#FF9500)
- Light gray function buttons (#D4D4D2)
- Dark gray number buttons (#505050)
- Rounded corners and hover effects

## Browser Compatibility

Works in all modern browsers that support:

- ES6 JavaScript features
- CSS Grid and Flexbox
- DOM manipulation methods

## Author

**GitHub**: distilledMilk © 2025

## License

This project is open source and available under standard web development practices.
