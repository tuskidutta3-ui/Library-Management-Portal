import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public dateFormat(dateValue: string | { year: number, month: number, day: number }): string {
    let dateStringAppDate = ''
    if (typeof dateValue === 'string') {
      dateStringAppDate = dateValue;
    } else {
      const { year, month, day } = dateValue;
      dateStringAppDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    }
    return dateStringAppDate;
  }
  public dateDBtoApp(DbDt: string) {
    let Date = DbDt.split("-");
    let AppDt = Date[2].toString().substring(0, 2) + "-" + Date[1] + "-" + Date[0]
    return AppDt
  }
  public dateApptoDB(AppDt: string) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let Date = AppDt.split("-");
    let DbDt = ''
    let day = Date[0];
    let monthIndex = parseInt(Date[1]) - 1; // Adjust month index to match array index
    let month = months[monthIndex]; // Get the abbreviated month name
    let year = Date[2];
    DbDt = `${day}-${month}-${year}`;
    return DbDt
  }
  public dateTimeToString(inputDate: string): string {
    // Extract date part without time
    const datePart = inputDate.split("T")[0];
    // Split the date string
    const dateParts = datePart.split("-");
    // Extract year, month, and day
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    // Convert month number to month name abbreviation
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthAbbreviation = monthNames[parseInt(month, 10) - 1]; // Subtract 1 since months are zero-indexed
    // Return formatted date
    return `${day}-${monthAbbreviation}-${year}`;
  }
}
