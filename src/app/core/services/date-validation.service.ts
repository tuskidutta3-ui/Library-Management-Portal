import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DateValidationService {
  constructor() { }
  // Function to normalize the date format: DD/MM/YYYY -> DD/Mon/YYYY
  normalizeDateInput(date: string): string {
    // Split the date into day, month, and year
    const dateParts = date.split('/');
    // Ensure we have exactly 3 parts: day, month, and year
    if (dateParts.length !== 3) {
      return ''; // Invalid format if it doesn't split into 3 parts
    }
    const [day, month, year] = dateParts;
    // List of month abbreviations
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // Check if the month is a valid number (1-12)
    if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
      return ''; // Invalid month
    }
    // Get the corresponding month abbreviation
    const normalizedMonth = months[parseInt(month, 10) - 1];
    // Return the normalized date in the format 'DD/Mon/YYYY'
    return `${day}/${normalizedMonth}/${year}`;
  }
  // Function to validate the date format: DD/MM/YYYY
  validateDateFormat(date: string): boolean {
    // Check if date is in the format DD/MM/YYYY
    const dateParts = date.split('/');
    if (dateParts.length !== 3) {
      return false; // Invalid format
    }
    const [day, month, year] = dateParts;
    // Check if month is valid (between 01 and 12)
    if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
      return false;
    }
    // Validate the year (it must be a 4-digit number)
    if (year.length !== 4 || isNaN(Number(year))) {
      return false;
    }
    // Validate if the day is valid for the given month and year
    const parsedDate = new Date(`${year}-${month}-${day}`);
    if (parsedDate.getDate() !== parseInt(day, 10)) {
      return false; // Invalid day for the given month/year
    }
    return true;
  }
  // Function to get the error message (optional)
  getErrorMessage(date: string): string | null {
    if (!this.validateDateFormat(date)) {
      return 'Date must be in the format DD/MM/YYYY (e.g., 10/01/2024)';
    }
    return null;
  }
}
