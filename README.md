# Interactive Calculator

A modern, responsive web-based calculator built with HTML, CSS, and JavaScript. Features a clean interface with support for basic arithmetic operations, decimal calculations, and keyboard input.

## 🚀 Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Decimal Support**: Perform calculations with decimal numbers
- **Keyboard Support**: Use your keyboard for faster input
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Graceful handling of division by zero and invalid operations
- **Clear Functions**: Clear current entry (CE) or all entries (C)
- **Memory Display**: Shows calculation history and current operation

## 🎯 Demo

[Live Demo](https://github.com/Bharaths93/Interactive-Calculator) 

## 🛠️ Installation

### Prerequisites
- A modern web browser
- No additional dependencies required

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bharaths93/interactive-calculator.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd interactive-calculator
   ```

3. **Open the calculator**
   ```bash
   # Option 1: Open directly in browser
   open calculator.html
   
   # Option 2: Use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 🎮 Usage

### Mouse Input
- Click number buttons (0-9) to input numbers
- Click operation buttons (+, -, ×, ÷) to perform calculations
- Click "=" to execute the calculation
- Click "C" to clear all input
- Click "CE" to clear current entry
- Click "." for decimal point

### Keyboard Shortcuts
- **Numbers**: 0-9
- **Operations**: +, -, *, /
- **Execute**: Enter or =
- **Clear All**: Escape or Delete
- **Clear Entry**: Backspace
- **Decimal**: . (period)

### Example Calculations
```
25 + 15 = 40
100 ÷ 4 = 25
3.14 × 2 = 6.28
50 - 25.5 = 24.5
```

## 📁 Project Structure

```
interactive-calculator/
├── calculator.html          # Main HTML file
├── css/
│   └── calculator.css      # Stylesheet
├── js/
│   └── calculator.js   # JavaScript logic
├── screenshots/        # Screenshot images
├── README.md          # This file
└── LICENSE            # License file
```

## 🔧 Technical Details

### Built With
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox/Grid
- **Vanilla JavaScript**: No external libraries or frameworks

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Key Functions
- `calculate()`: Main calculation engine
- `display()`: Updates the calculator display
- `clearAll()`: Resets calculator state
- `handleKeyboard()`: Processes keyboard input

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and formatting
- Add comments for complex logic
- Test all new features across different browsers
- Update documentation as needed

## 🐛 Known Issues

- Very large numbers may lose precision due to JavaScript floating-point limitations
- Scientific notation is not currently supported

## 📋 Roadmap

- [ ] Add scientific calculator functions (sin, cos, tan, etc.)
- [ ] Implement calculation history
- [ ] Add themes/dark mode
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Unit conversion features
- [ ] Percentage calculations

## 👨‍💻 Author

**Your Name**
- GitHub: [https://github.com/Bharaths93](https://github.com/Bharaths93/Interactive-Calculator)
- Email: bharathkannan1106@gmail.com
- LinkedIn: [https://www.linkedin.com/in/bharath-kannan-a3b016328](https://www.linkedin.com/in/bharath-kannan-a3b016328/)

## 🙏 Acknowledgments

- Design inspiration from modern calculator apps
- Icons from [Font Awesome](https://fontawesome.com/)
- Testing assistance from the developer community
---

⭐ **Star this repository if you found it helpful!**
