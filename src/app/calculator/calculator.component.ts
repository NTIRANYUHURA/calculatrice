// src/app/calculator/calculator.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result = 0;
  input = '';
  memory = 0;
  isMemorySet = false;

  buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+',
    '√', 'x²','%', '.',
    'MC', 'MR', 'M+', 'M-',
    
  ];

  onButtonClicked(value: string) {
    if (value === '=') {
      try {
        this.result = eval(this.input);
        this.input = '';
      } catch (error) {
        this.result = NaN;
      }
    } else if (value === 'C') {
      this.input = '';
      this.result = 0;
    } else if (value === '√') {
      try {
        this.result = Math.sqrt(eval(this.input));
        this.input = '';
      } catch (error) {
        this.result = NaN;
      }
    } else if (value === 'x²') {
      try {
        this.result = eval(this.input) ** 2;
        this.input = '';
      } catch (error) {
        this.result = NaN;
      }
    } else if (value === '%') {
      try {
        this.result = eval(this.input) / 100;
        this.input = '';
      } catch (error) {
        this.result = NaN;
      }
    } else if (value === 'MC') {
      // Clear memory
      this.memory = 0;
      this.isMemorySet = false;
    } else if (value === 'MR') {
      // Recall memory
      if (this.isMemorySet) {
        this.input += this.memory;
      }
    } else if (value === 'M+') {
      // Add to memory
      try {
        this.memory += eval(this.input);
        this.isMemorySet = true;
      } catch (error) {
        this.result = NaN;
      }
    } else if (value === 'M-') {
      // Subtract from memory
      try {
        this.memory -= eval(this.input);
        this.isMemorySet = true;
      } catch (error) {
        this.result = NaN;
      }
    } else if (value === '.') {
      // Check if there is already a decimal point in the input
      if (!this.input.includes('.')) {
        this.input += value;
      }
    } else {
      this.input += value;
    }
  }
}
