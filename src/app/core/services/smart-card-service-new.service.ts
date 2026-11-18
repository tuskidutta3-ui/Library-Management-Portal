import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SmartCardServiceNewService {
  /**
  * Send a message to the Chrome extension and receive a response.
  * @param message The message object to send.
  * @returns A Promise that resolves with the response from the extension or rejects with an error.
  */
  sendMessageToExtension(message: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const listener = (event: MessageEvent) => {
        if (event.source !== window) return; // Ignore messages not from the webpage
        const data = event.data;
        if (data.type === 'FROM_EXTENSION') {
          window.removeEventListener('message', listener);
          // Check if there's an error in the payload
          if (data.payload && data.payload.error) {
            reject(data.payload.error); // Reject if there's an error in the response
          } else {
            resolve(data.payload); // Resolve with the response payload
          }
        }
      };
      window.addEventListener('message', listener);
      // Send the message to the extension through postMessage
      window.postMessage(
        { type: 'FROM_WEBPAGE', payload: message },
        '*'
      );
    });
  }
  /**
   * Call the Chrome extension to get the computer name.
   * @returns A Promise that resolves with the computer name.
   */
  // Updated getComputerName method using message passing to extension
  getComputerName(): Promise<any> {
    const message = {
      type: 'GET_COMPUTER_NAME',
      url: `${environment.smartCardEndpoint}/api/smartcard/GetComputerName`, // API URL from environment
    };
    return this.sendMessageToExtension(message);
  }
  /**
   * Call the Chrome extension to read the card data.
   * @returns A Promise that resolves with the card data.
   */
  readCard(): Promise<any> {
    const message = {
      type: 'READ_CARD',
      // url: 'http://localhost:5000/api/smartcard/ReadSmartCard',  // The API URL
      url: `${environment.smartCardEndpoint}/api/smartcard/ReadSmartCard`, // API URL from environment
    };
    return this.sendMessageToExtension(message);
  }
  /**
   * Call the Chrome extension to write a card number.
   * @param cardNumber The card number to write to the smart card.
   * @returns A Promise that resolves with the response from the extension.
   */
  writeCard(cardNumber: string): Promise<any> {
    const message = {
      type: 'WRITE_CARD',
      // url: 'http://localhost:5000/api/smartcard/WriteSmartCard',  // The API URL
      url: `${environment.smartCardEndpoint}/api/smartcard/WriteSmartCard`, // API URL from environment
      payload: { CardNumber: cardNumber },  // The data to send in the POST request
    };
    return this.sendMessageToExtension(message);
  }
}
