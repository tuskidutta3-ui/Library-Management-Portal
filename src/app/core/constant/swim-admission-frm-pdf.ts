import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { inject, Injectable } from '@angular/core';
import { UtilService } from '../services/util.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Injectable({
  providedIn: 'root',
})
export class PdfGenerator {
  private util = inject(UtilService); // Inject UtilService
  constructor() { }
  getBase64ImageFromURL(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.onload = () => {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL('image/png');
        resolve(dataURL);
      };
      img.onerror = (error) => {
        reject(error);
      };
      img.src = url;
    });
  }
  async generatePDFForForm(action: string, ClubResult: any, pdfResult: any) {
    const ClubName = ClubResult.club_Name;
    const ClubAdd1 = ClubResult.club_Add1;
    const ClubAdd2 = ClubResult.club_Add2;
    const phone = ClubResult.phone_No;
    const logoBase64 = await this.getBase64ImageFromURL(
      '../../../assets/images/logo.png'
    );
    const occupation = pdfResult.occupation === null ? '' : pdfResult.occupation
    const institution = pdfResult.institution === null ? '' : pdfResult.institution
    const class_year = pdfResult.class === null ? '' : pdfResult.class
    let dob = this.util.dateDBtoApp(pdfResult.dob as string)
    let finalDob = this.util.dateApptoDB(dob as string)
    let sex = pdfResult.sex === 'F' ? 'Female' : 'Male'
    let slot1 = pdfResult.batch_Frm_Tm === null ? '' : pdfResult.batch_Frm_Tm
    let slot2 = pdfResult.batch_To_Tm === null ? '' : pdfResult.batch_To_Tm
    let finalslot = slot1 + ' - ' + slot2
    let cardno = pdfResult.cardNo
    let date = this.util.dateDBtoApp(pdfResult.receiptDt as string)
    let finalDate = this.util.dateApptoDB(date as string)
    console.log(finalDate);
    const Form_Category =
      (pdfResult.form_Code === 'B' || pdfResult.form_Code === 'R')
        ? [
          [
            {
              text: '',
              bold: false,
              fontSize: 9,
              alignment: 'left',
              color: '#2b1c63',
            },
            {
              text: 'b) ',
              bold: false,
              fontSize: 9,
              alignment: 'left',
              color: '#2b1c63',
            },
            {
              text: 'Timing will be as follows :',
              bold: false,
              fontSize: 9,
              alignment: 'left',
              color: '#2b1c63',
            },
          ],
          [
            {
              text: '',
              bold: false,
              fontSize: 9,
              alignment: 'left',
              color: '#2b1c63',
            },
            {
              text: '',
              bold: false,
              fontSize: 9,
              alignment: 'left',
              color: '#2b1c63',
            },
            {
              text: 'i) On Mon to Fri (Male and Boys) – 6.00 a.m. to 10.00 a.m. & 4.00 p.m. to 6.00 p.m. (male & female - Separated Pool). Each batch of 40 minutes duration.',
              bold: false,
              fontSize: 9,
              alignment: 'left',
              color: '#2b1c63',
            },
          ],
          [
            {
              text: '',
              bold: false,
              fontSize: 9,
              alignment: 'left',
              color: '#2b1c63',
            },
            {
              text: 'c) ',
              bold: false,
              fontSize: 9,
              alignment: 'left',
              color: '#2b1c63',
            },
            {
              text: 'For the seasonal swimmers swimming will remain SUSPENDED on all holidays, during political bandhs and unavoidable circumstances, as will be notified in advance.',
              bold: false,
              fontSize: 9,
              alignment: 'left',
              color: '#2b1c63',
            },
          ],
        ]
        : (pdfResult.form_Code === 'Y' || pdfResult.form_Code === 'G' || pdfResult.form_Code === 'S')
          ? [
            [
              {
                text: '',
                bold: false,
                fontSize: 9,
                alignment: 'left',
                color: '#2b1c63',
              },
              {
                text: 'b) ',
                bold: false,
                fontSize: 9,
                alignment: 'left',
                color: '#2b1c63',
              },
              {
                text: 'For the seasonal swimmers swimming will remain SUSPENDED on all holidays, during political bandhs and unavoidable circumstances, as will be notified in advance.',
                bold: false,
                fontSize: 9,
                alignment: 'left',
                color: '#2b1c63',
              },
            ],
          ]
          : [
            [
              {
                text: '',
                bold: false,
                fontSize: 9,
                alignment: 'left',
                color: '#2b1c63',
              },
              {
                text: '',
                bold: false,
                fontSize: 9,
                alignment: 'left',
                color: '#2b1c63',
              },
              {
                text: '',
                bold: false,
                fontSize: 9,
                alignment: 'left',
                color: '#2b1c63',
              },
            ],
          ];
    // Table configuration with widths and layout applied
    const Form_Category_Main = {
      table: {
        widths: ['3%', '3%', '94%'], // Add the column widths here
        body: [
          ...Form_Category, // Insert dynamically generated content into the table
        ],
      },
      layout: 'noBorders', // Add noBorders layout to avoid table borders
    };
    const GREEN_Form_Category =
      (pdfResult.form_Code === 'G')
        ? [
          [
            {
              text: 'Time : 7 A.M. to 8 A.M. (Ladies & Girls) & 8.15 A.M. to 9.15 A.M. (Boys & Gents) and 9.30 A.M. to 10.30 A.M. (Ladies / Gents)',
              bold: false,
              fontSize: 9,
              alignment: 'left',
              color: '#2b1c63',
            },
          ],
        ]
        : (pdfResult.form_Code === 'S')
          ?
          [
            [
              {
                text: 'Time : 6 A.M. to 12 NOON & 4 P.M. TO 9.30 P.M. (For Swimmers Only)',
                bold: false,
                fontSize: 9,
                alignment: 'left',
                color: '#2b1c63',
              },
            ],
          ]
          : [
            [
              {
                text: '',
                bold: false,
                fontSize: 9,
                alignment: 'left',
                color: '#2b1c63',
              },
            ],
          ];
    const Green_Form_Category_Main = {
      table: {
        widths: ['100%'], // Add the column widths here
        body: [
          ...GREEN_Form_Category, // Insert dynamically generated content into the table
        ],
      },
      layout: 'noBorders', // Add noBorders layout to avoid table borders
    };
    const WithoutImage = {
      table: {
        widths: ['20%', '60%', '20%'], // Column widths: 20%, 60%, 20%
        body: [
          // First row with logo image and empty cells
          [
            {
              image: logoBase64,
              width: 80,
              margin: [0, 5, 0, 0],
              rowSpan: 5,
              alignment: 'left',
              color: '#2b1c63',
            },
            {},
            {
              text: '', // Empty cell for the upload box with a border
              alignment: 'right',
              border: [true, true, true, true], // Adds a border on all sides of the cell
              margin: [20, 5, 0, 5], // Adds some padding inside the border
              height: 100, // Optional: Sets a fixed height for the photo upload box
              width: 90,
              rowSpan: 9, // The photo upload cell spans 9 rows
              fillColor: '#f0f0f0',
            }
          ],
          // Empty row to align cells correctly
          [
            {}, // Empty cells to balance the columns
            {}, {},
          ],
          // Row for Club Name
          [
            {}, // Empty cell to align text
            {
              text: ClubName,
              bold: true,
              fontSize: 12,
              alignment: 'center',
              color: '#2b1c63',
              fontWeight: '1000', // Bold text style
              margin: [0, 0, 0, 0],
            },
            {},
          ],
          // Row for Club Address Line 1
          [
            {},
            {
              text: ClubAdd1,
              fontSize: 12,
              alignment: 'center',
              color: '#2b1c63',
            },
            {},
          ],
          // Row for Club Address Line 2
          [
            {},
            {
              text: ClubAdd2,
              fontSize: 12,
              alignment: 'center',
              color: '#2b1c63',
            },
            {},
          ],
          // Row for Phone Number
          [
            {},
            {
              text: `Phone: ${phone}`,
              fontSize: 12,
              alignment: 'center',
              color: '#2b1c63',
              margin: [0, -25, 0, 0],
            },
            {},
          ],
          // Empty row for underline
          [
            {},
            {
              text: '',
              bold: true,
              fontSize: 9,
              alignment: 'center',
              decoration: 'underline', // Underlines the text
              margin: [0, -10, 0, 0],
            },
            {},
          ],
          // Row with dynamic form code message
          [
            {},
            {
              text: pdfResult.form_Code === 'B'
                ? 'STUDENT UPTO 21 YEARS'
                : pdfResult.form_Code === 'R'
                  ? 'STUDENT / NON STUDENT ABOVE 21 YEARS'
                  : pdfResult.form_Code === 'Y'
                    ? 'LADIES / GENTS / CHILDREN UPTO 8\'O CLOCK'
                    : pdfResult.form_Code === 'G'
                      ? 'VALID FOR ANY AGE'
                      : pdfResult.form_Code === 'S'
                        ? 'SPECIAL-TIME-FLEXIBLE (During Swimming Hours)'
                        : '',
              bold: true,
              fontSize: 12,
              alignment: 'center',
              decoration: 'underline', // Underlines the text
              color: '#2b1c63',
              margin: [0, -15, 0, 0],
            },
            {},
          ],
          // Final empty row for alignment
          [
            {},
            {
              text: '',
              bold: true,
              fontSize: 9,
              alignment: 'center',
              decoration: 'underline', // Underlines the text
            },
            {},
          ],
        ],
      },
      layout: 'noBorders', // Avoid table borders around the cells
    };
    const WithImage = {
      table: {
        widths: ['20%', '60%', '20%'], // Column widths: 20%, 60%, 20%
        body: [
          // First row with logo image and empty cells
          [
            {
              image: logoBase64,
              width: 80,
              margin: [0, 5, 0, 0],
              rowSpan: 5,
              alignment: 'left',
              color: '#2b1c63',
            },
            {},
            {
              image: pdfResult.swim_Pic,  // Empty cell for the upload box with a border
              alignment: 'right',
              border: [true, true, true, true],  // Adds a border on all sides of the cell
              // fillColor: '#f0f0f0',  // Optional: Adds a background color inside the border
              margin: [20, 5, 0, 5],  // Adds some padding inside the border
              height: 100,  // Optional: Sets a fixed height for the photo upload box
              width: 90,
              rowSpan: 9,
            }
          ],
          // Empty row to align cells correctly
          [
            {}, // Empty cells to balance the columns
            {}, {},
          ],
          // Row for Club Name
          [
            {}, // Empty cell to align text
            {
              text: ClubName,
              bold: true,
              fontSize: 12,
              alignment: 'center',
              color: '#2b1c63',
              fontWeight: '1000', // Bold text style
              margin: [0, 0, 0, 0],
            },
            {},
          ],
          // Row for Club Address Line 1
          [
            {},
            {
              text: ClubAdd1,
              fontSize: 12,
              alignment: 'center',
              color: '#2b1c63',
            },
            {},
          ],
          // Row for Club Address Line 2
          [
            {},
            {
              text: ClubAdd2,
              fontSize: 12,
              alignment: 'center',
              color: '#2b1c63',
            },
            {},
          ],
          // Row for Phone Number
          [
            {},
            {
              text: `Phone: ${phone}`,
              fontSize: 12,
              alignment: 'center',
              color: '#2b1c63',
              margin: [0, -25, 0, 0],
            },
            {},
          ],
          // Empty row for underline
          [
            {},
            {
              text: '',
              bold: true,
              fontSize: 9,
              alignment: 'center',
              decoration: 'underline', // Underlines the text
              margin: [0, -10, 0, 0],
            },
            {},
          ],
          // Row with dynamic form code message
          [
            {},
            {
              text: pdfResult.form_Code === 'B'
                ? 'STUDENT UPTO 21 YEARS'
                : pdfResult.form_Code === 'R'
                  ? 'STUDENT / NON STUDENT ABOVE 21 YEARS'
                  : pdfResult.form_Code === 'Y'
                    ? 'LADIES / GENTS / CHILDREN UPTO 8\'O CLOCK'
                    : pdfResult.form_Code === 'G'
                      ? 'VALID FOR ANY AGE'
                      : pdfResult.form_Code === 'S'
                        ? 'SPECIAL-TIME-FLEXIBLE (During Swimming Hours)'
                        : '',
              bold: true,
              fontSize: 12,
              alignment: 'center',
              decoration: 'underline', // Underlines the text
              color: '#2b1c63',
              margin: [0, -15, 0, 0],
            },
            {},
          ],
          // Final empty row for alignment
          [
            {},
            {
              text: '',
              bold: true,
              fontSize: 9,
              alignment: 'center',
              decoration: 'underline', // Underlines the text
            },
            {},
          ],
        ],
      },
      layout: 'noBorders' // Avoid table borders around the cells
    };
    const OriginalImg = pdfResult.swim_Pic === '' ? WithoutImage : WithImage
    // Define document definition
    let docDefinition: any = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      fontFamily: 'Times New Roman',
      pageMargins: [16, 5, 16, 5],
      info: {
        title: 'FORM',
      },
      content: [
        {
          table: {
            widths: ['100%'],
            body: [
              [
                {
                  table: {
                    widths: ['100%'],
                    body: [
                      [
                        {
                          text: 'PLEASE PRODUCE THE REGISTRATION FORM AND MEDICAL CERTIFICATE AT ILSS OFFICE FOR TIME SLOT'.split(' ').join('   '),
                          bold: true,
                          fontSize: 9,
                          color: '#2b1c63',
                          // fillColor: '#2b1c63', // Background color
                          margin: [5, 0, 0, 0] // Padding inside the cell
                        },
                      ],
                      [
                        {
                          text: 'BOOKING FROM 7:30 AM TO 9:30 AM AND 4:00 PM TO 8:00 PM'.split(' ').join('     '), // Adds more space between words
                          bold: true,
                          fontSize: 9,
                          color: '#2b1c63',
                          alignment: 'center',
                          // fillColor: '#2b1c63', // Background color
                          margin: [5, 0, 0, 0], // Padding inside the cell
                        },
                      ]
                    ]
                  },
                  margin: [0, 5, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['100%'],
                    body: [
                      [OriginalImg]
                    ]
                  }, layout: 'noBorders'
                }],
              [
                {
                  table: {
                    widths: ['25%', '30%', '20%', '25%'],
                    body: [
                      [
                        {},
                        {
                          text: pdfResult.finYear.split('-')[0],
                          bold: true,
                          fontSize: 17,
                          alignment: 'center', // Aligns the text in the center
                          color: '#2b1c63', // Text color
                          margin: [80, 0, 0, 0],
                        },
                        {},
                        {
                          text: pdfResult.form_Name,
                          bold: true,
                          fontSize: 13,
                          alignment: 'center', // Aligns the text in the center
                          color: '#2b1c63', // Text color
                        },
                      ],
                      [
                        {},
                        {
                          text: '',
                          bold: true,
                          fontSize: 12,
                          alignment: 'center', // Aligns the text in the center
                          color: '#2b1c63', // White text color
                        },
                        {},
                        {
                          text: '(Cost of Form Rs. 100/-)',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left', // Aligns the text in the center
                          color: '#2b1c63', // White text color
                          margin: [19, 0, 0, 0],
                        },
                      ],
                    ]
                  },
                  margin: [0, 5, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['30%', '40%', '30%'],
                    body: [
                      [
                        {
                          text: 'Form No. ' + pdfResult.formNo,
                          bold: true,
                          fontSize: 9,
                          alignment: 'left', // Aligns the text in the center
                          color: '#2b1c63', // White text color
                        },
                        {
                          text: 'To be produced on' + '  ' + '________________________________',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left', // Aligns the text in the center
                          color: '#2b1c63', // White text color
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left', // Aligns the text in the center
                          color: '#2b1c63', // White text color
                        },
                      ],
                    ]
                  },
                  margin: [0, 5, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['100%'],
                    body: [
                      [Green_Form_Category_Main]
                    ]
                  }, layout: 'noBorders',
                  margin: [0, -5, 0, 0],
                }],
              [{
                table: {
                  widths: ['20%', '60%', '20%'],
                  body: [
                    [
                      {
                        text: 'PLEASE READ CAREFULLY. THE INSTRUCTIONS ON THE REVERSE BEFORE FILLING UP THE FORM IN BLOCK LETTER. ANY MISTAKE MAY',
                        bold: true,
                        fontSize: 9,
                        alignment: 'left',
                        color: '#2b1c63',
                        colSpan: 3
                      }, {},
                      {}
                    ],
                    [
                      {
                        text: 'LEAD TO THE FORM BEING REJECTED. GIVE ALL INFORMATIONS IN DETAIL.',
                        bold: true,
                        fontSize: 9,
                        alignment: 'left',
                        color: '#2b1c63',
                        colSpan: 3
                      }, {},
                      {}
                    ],
                    [
                      {
                        text: '',
                        bold: false,
                        fontSize: 9,
                        alignment: 'left',
                        color: '#2b1c63',
                        colSpan: 3
                      }, {},
                      {}
                    ],
                    [
                      {
                        text: '',
                        bold: false,
                        fontSize: 9,
                        alignment: 'left',
                        color: '#2b1c63',
                        colSpan: 3
                      }, {},
                      {}
                    ],
                    [
                      {
                        text: [
                          {
                            text: 'TWO CURRENT PASSPORT SIZE PHOTOGRAPHS ARE REQUIRED. ',
                            bold: true,  // Makes only this part bold
                            fontSize: 9,
                            color: '#2b1c63',
                            decoration: 'underline',
                          },
                          {
                            text: 'ONE SHOULD BE PASTED ON THE BOX PROVIDED AND THE SECOND SHOULD BE CLIPPED WITH THE FORM WITH NAME WRITTEN ON THE BACKSIDE. MINIMUM HEIGHT REQUIRED IS 3½ FEET. DRESS CODE TO BE FOLLOWED.',
                            fontSize: 9,
                            color: '#2b1c63',
                            decoration: 'underline',  // Underlines the text
                          }
                        ],
                        alignment: 'left',
                        colSpan: 3
                      },
                      {},
                      {}
                    ]
                  ]
                },
                layout: 'noBorders',
                margin: [0, -5, 0, 0]
              }],
              [
                {
                  table: {
                    widths: ['100%'],
                    body: [
                      [
                        {
                          text: 'NAME : ' + pdfResult.name,
                          bold: false,
                          fontSize: 11,
                          alignment: 'left',
                          color: '#2b1c63',
                        }
                      ],
                      [
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 40, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 555, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        }
                      ],
                      [
                        {
                          text: 'FATHER / HUSBAND / GUARDIAN NAME : ' + pdfResult.fathersName,
                          bold: false,
                          fontSize: 11,
                          alignment: 'left',
                          color: '#2b1c63',
                        }
                      ],
                      [
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 205, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 555, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        }
                      ],
                    ]
                  },
                  margin: [0, 5, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['70%', '30%'],
                    body: [
                      [
                        {
                          text: 'DATE OF BIRTH : ' + finalDob,
                          bold: false,
                          fontSize: 11,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'SEX : ' + sex,
                          bold: false,
                          fontSize: 11,
                          alignment: 'left',
                          color: '#2b1c63',
                        }
                      ],
                      [
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 85, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 375, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        },
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 30, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 158, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        },
                      ],
                      [
                        {
                          text: 'ADDRESS : ' + pdfResult.address,
                          bold: false,
                          fontSize: 11,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 55, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 555, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                              colSpan: 2
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        }, {}
                      ],
                    ]
                  },
                  margin: [0, -5, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['20%', '30%', '25%', '25%'],
                    body: [
                      [
                        {
                          text: 'PIN : ' + pdfResult.pin,
                          bold: false,
                          fontSize: 11,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'PHONE : (R) ' + pdfResult.phoneNo,
                          bold: false,
                          fontSize: 11,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'NOVICE / SWIMMER',
                          bold: false,
                          fontSize: 11,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: pdfResult.category === 'S' ? 'Swimmer' : 'Novice',
                          bold: false,
                          fontSize: 11,
                          alignment: 'left',
                          color: '#2b1c63',
                        }
                      ],
                      [
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 25, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 110, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        },
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 63, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 165, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        },
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 115, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 270, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        },
                        {
                        },
                      ],
                    ]
                  },
                  margin: [0, -5, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['40%', '60%'],
                    body: [
                      [
                        {
                          text: 'OCCUPATION : ' + occupation,
                          bold: false,
                          fontSize: 11,
                          alignment: 'left',
                          color: '#2b1c63',
                          margin: [0, 5, 0, 0],
                        },
                        {
                          text: 'INSTITUTION : ' + institution,
                          bold: false,
                          fontSize: 11,
                          alignment: 'left',
                          color: '#2b1c63',
                          margin: [0, 5, 0, 0],
                        }
                      ],
                      [
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 75, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 220, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        },
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 78, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 326, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        },
                      ],
                    ]
                  },
                  margin: [0, -5, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['50%', '50%'],
                    body: [
                      [
                        {
                          text: 'CLASS / YEAR : ' + class_year,
                          bold: false,
                          fontSize: 11,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: [
                            'SWIMMING IN ILSS FOR LAST ',
                            { text: pdfResult.swimSince, decoration: 'underline' },
                            ' YEAR(S)'
                          ],
                          bold: false,
                          fontSize: 11,
                          alignment: 'left',
                          color: '#2b1c63',
                        }
                      ],
                      [
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 80, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 275, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        },
                        {}
                        // {
                        //   canvas: [
                        //     {
                        //       type: 'line', // Defines the shape to draw a line
                        //       x1: 180, // Start of the line (x-coordinate)
                        //       y1: -5, // Start of the line (y-coordinate) moved 5 units up
                        //       x2: 205, // End of the line (x-coordinate)
                        //       y2: -5, // End of the line (y-coordinate) moved 5 units up
                        //       lineWidth: 2, // Line thickness
                        //       color: '#2b1c63', // Line color
                        //     }
                        //   ],
                        //   margin: [0, 0, 0, 0], // Space below the line
                        // },
                      ],
                    ]
                  },
                  margin: [0, -5, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['75%', '25%'],
                    body: [
                      [
                        {
                          text: 'Name of the Nominee (for Insurance purpose)  ' + pdfResult.nomName,
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'Relation ' + pdfResult.nomRel,
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        }
                      ],
                      [
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 210, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 410, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        },
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 40, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 135, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        },
                      ],
                    ]
                  },
                  margin: [0, 0, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['100%'],
                    body: [
                      [
                        {
                          text: 'MEDICAL CERTIFICATE',
                          bold: true,
                          fontSize: 14,
                          alignment: 'center',
                          color: '#2b1c63',
                        },
                      ],
                    ]
                  },
                  margin: [0, -5, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['100%'],
                    body: [
                      [
                        {
                          text: [
                            'I hereby certify that Master / Miss ',
                            { text: pdfResult.name, decoration: 'underline' },
                            ' is medically fit to join the swimming course. He / She is not suffering from any disease including epilepsy which would otherwise make him / her unfit for swimming course.'
                          ],
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                      ],
                    ],
                  },
                  margin: [0, 0, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['50%', '50%'],
                    body: [
                      [
                        {
                          text: 'Doctor\s Name : ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'Signature & Regn. No. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        }
                      ],
                      [
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 87, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 275, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        },
                        {
                          canvas: [
                            {
                              type: 'line', // Defines the shape to draw a line
                              x1: 120, // Start of the line (x-coordinate)
                              y1: -5, // Start of the line (y-coordinate) moved 5 units up
                              x2: 275, // End of the line (x-coordinate)
                              y2: -5, // End of the line (y-coordinate) moved 5 units up
                              lineWidth: 2, // Line thickness
                              color: '#2b1c63', // Line color
                            }
                          ],
                          margin: [0, 0, 0, 0], // Space below the line
                        },
                      ],
                    ]
                  },
                  margin: [0, 5, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['100%'],
                    body: [
                      [
                        {
                          text: 'I HEREBY DECLARE THAT : ',
                          bold: true,
                          fontSize: 12,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                      ],
                      [
                        {
                          text: '1) Having acquainted myself with the Rules and Regulations of the Society as mentioned overleaf, I guarantee that the same will be strictly followed by me / my ward (in case of a minor).',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                      ],
                      [
                        {
                          text: '2) I shall not make Indian Life Saving Society liable or responsible for any loss, damage or accident, if occurs to me / my ward (in case of a minor) during the swimming course and while I remain in ILSS.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                      ],
                      [
                        {
                          text: '3) All the above declarations and informations are true and correct. I shall remain solely responsible for such declarations.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                      ],
                      [{
                        canvas: [
                          {
                            type: 'line', // Defines the shape to draw a line
                            x1: 60, // Start of the line (x-coordinate)
                            y1: -5, // Start of the line (y-coordinate) moved 5 units up
                            x2: 500, // End of the line (x-coordinate)
                            y2: -5, // End of the line (y-coordinate) moved 5 units up
                            color: '#2b1c63', // Line color
                            lineWidth: 2, // Line thickness
                            dash: { length: 1, space: 4 }, // Creates a dotted effect
                          }
                        ],
                        margin: [0, 10, 0, 0], // Space below the line
                      }],
                      [
                        {
                          text: 'Full Signature of the applicant ( above 18 years ) or guardian ( in case of a minor )',
                          bold: false,
                          fontSize: 9,
                          alignment: 'center',
                          color: '#2b1c63',
                        },
                      ],
                      [{
                        canvas: [
                          {
                            type: 'line', // Defines the shape to draw a line
                            x1: 0, // Start of the line (x-coordinate)
                            y1: -5, // Start of the line (y-coordinate) moved 5 units up
                            x2: 555, // End of the line (x-coordinate)
                            y2: -5, // End of the line (y-coordinate) moved 5 units up
                            color: '#2b1c63', // Line color
                            lineWidth: 2, // Line thickness
                            dash: { length: 1, space: 4 }, // Creates a dotted effect
                          }
                        ],
                        margin: [0, 10, 0, 0], // Space below the line
                      }],
                      [
                        {
                          text: 'For Office use only',
                          bold: true,
                          fontSize: 9,
                          alignment: 'center',
                          color: '#2b1c63',
                        },
                      ],
                    ]
                  },
                  margin: [0, 5, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [{
                fontSize: 9,
                table: {
                  widths: ['70%', '30%'],
                  body: [
                    [{ text: `Swimming time : ${finalslot}`, color: '#2b1c63', bold: true, alignment: 'left', margin: [16, 0, 0, 0] },
                    { text: `Date: ${finalDate}`, bold: true, color: '#2b1c63', margin: [0, 0, 0, 0] },
                    ],
                    [{ text: `Card No. : ${cardno}`, alignment: 'left', bold: true, color: '#2b1c63', margin: [16, 0, 0, 0] }, {}
                    ],
                    [{ text: `Receipt No. : ${pdfResult.receiptNo}`, color: '#2b1c63', bold: true, alignment: 'left', margin: [16, 0, 0, 0] },
                    { text: `Scrutinised by ______________________`, bold: true, alignment: 'left', color: '#2b1c63', margin: [0, 0, 0, 0] },
                    ],
                  ]
                },
                layout: 'noBorders'
              }],
              [
                {
                  pageBreak: 'before',
                  table: {
                    widths: ['3%', '3%', '94%'],
                    body: [
                      [
                        {
                          text: 'RULES & REGULATIONS FOR SEASONAL SWIMMERS',
                          bold: true,
                          fontSize: 12,
                          alignment: 'center',
                          color: '#2b1c63',
                          decoration: 'underline',
                          colSpan: 3,
                          margin: [0, 0, 0, 15]
                        },
                        {},
                        {}
                      ],
                      [
                        {
                          text: '1. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'center',
                          color: '#2b1c63',
                        },
                        {
                          text: 'a) ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'Swimming season will remain open from April to September’ ' + pdfResult.finYear.split('-')[0],
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                      ],
                    ]
                  }, layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['100%'],
                    body: [
                      [Form_Category_Main]
                    ]
                  }, layout: 'noBorders',
                  margin: [0, -5, 0, 0],
                }],
              [
                {
                  table: {
                    widths: ['3%', '2%', '95%'],
                    body: [
                      [
                        {
                          text: '2.	',
                          bold: false,
                          fontSize: 9,
                          alignment: 'center',
                          color: '#2b1c63',
                        },
                        {
                          text: 'All persons will have to appear personally in an interview for admission. Seasonal Swimmers must agree to appear before our Medical officer as and when required and if declared to be unfit for Swimming or if found is suffering from any contagious disease his or her permission for Swimming will be withdrawn forthwith.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '3.	',
                          bold: false,
                          fontSize: 9,
                          alignment: 'center',
                          color: '#2b1c63',
                        },
                        {
                          text: 'Seasonal Swimmers under 14 years of age may be escorted by one person only.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '4.	',
                          bold: false,
                          fontSize: 9,
                          alignment: 'center',
                          color: '#2b1c63',
                        },
                        {
                          text: 'In case of any indiscipline in manners or any breach of rules or for irregular attendance or for non-participation in Swimming activities of the Society, the Society may take any such action as may be considered necessary.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        },
                        {}
                      ],
                      [
                        {
                          text: '5. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'center',
                          color: '#2b1c63',
                        },
                        {
                          text: 'While every reasonable precaution is taken for the safety of the swimmers, the Society will not be responsible for any kind of accident.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '6.	',
                          bold: true,
                          fontSize: 9,
                          alignment: 'center',
                          color: '#2b1c63',
                          // decoration: 'underline',
                        },
                        {
                          text: 'SEASONAL SWIMMERS ARE NOT ENTITLED TO USE ANY OTHER AMENITIES EXCEPT SWIMMING AND THEY OR THEIR ESCORTS MUST NOT STAY BEYOND 15 MIN, OF COMPLETION OF THE BATCH WITHIN THE SOCIETY PREMISES AREA AND MUST NOT BRING ANY GUEST, VIOLATION MAY LEAD TO CANCELLATION OF CARD.',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          decoration: 'underline',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '7.	',
                          bold: false,
                          fontSize: 9,
                          alignment: 'center',
                          color: '#2b1c63',
                        },
                        {
                          text: 'SEASONAL SWIMMERS SWIMMING IN I.L.S.S FOR MORE THAN 3 YEARS MUST TAKE LIFE SAVING TRAINING, IF ASKED FOR BY THE AUTHORITY.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '8. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'center',
                          color: '#2b1c63',
                        },
                        {
                          text: 'ALLOTMENT OF BATCH TIMINGS WILL BE AT THE DISCRETION OF THE AUTHORITY.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '9.	',
                          bold: false,
                          fontSize: 9,
                          alignment: 'center',
                          color: '#2b1c63',
                        },
                        {
                          text: 'In case of loss of admission card, duplicate may be issued on application and on payment of appropriate fee.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '10. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'SWIMMERS MUST PRODUCE THE ADMISSION CARD AT THE GATE AT THE TIME OF ENTRY, MUST DEPOSIT THE CARD EVERYDAY BEFORE ENTERING IN WATER, MUST OBTAIN PERMISSION FROM THE POOL IN CHARGE OR TRAINER ON DUTY BEFORE ENTERING INTO THE POOL MUST COLLECT THE CARD IMMEDIATELY AFTER SWIMMING.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '11. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'NO ONE WILL BE ALLOWED TO SWIM WITHOUT APPROVED SWIMMING COSTUME WITH I.L.S.S LOGO EVERY SWIMMER MUST WEAR AN APPROPRIATE CAP AS STIPULATED BY THE AUTHORITIES WHILE SWIMMING DURING TRAINING HOURS SWIMMERS WITH LONG HAIR AND LADIES MUST WEAR HEAD DRESS (CAP) COSTUMES/CAPS WITH I.L.S.S. LOGO ARE ON SALE AT I.L.S.S. COUNTER.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2,
                          decoration: 'underline',
                        }, {}
                      ],
                      [
                        {
                          text: '12. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'EVERY ONE MUST TAKE THOROUGH SHOWER BATH, VISIT THE W.C. WASH THEIR FEET AND BLOW THEIR NOSES THOROUGHLY BEFORE ENTERING THE POOL. USE OF OIL, SOAP OR CREAM ARE STRICTLY PROHIBITED IN THE SWIMMING POOL.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '13. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'Swimmer must not bring any valuables. The Society will not be responsible for any loss of possessions.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '14. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'Ours is “Chemically Treated water” Pool. In isolated cases it may cause irritation of eyes and skin. In such event please consult your Doctor.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '15. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'Avoid swimming when you are not fully fit.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        },
                        {}
                      ],
                      [
                        {
                          text: '16. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          // decoration: 'underline',
                        },
                        {
                          text: 'OCCASIONAL DETERIORATION IN POOL WATER QUALITY / CLARITY DUE TO PLANT BREAK DOWN OR ELECTRICITY FAILURE IS UNAVOIDABLE, IN SUCH CASES THE POOLS WILL BE OUT OF BOUNDS FOR USE BY THE SWIMMERS, SUCH SITUATION HAS TO BE ACCEPTED.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          decoration: 'underline',
                          colSpan: 2
                        },
                        {}
                      ],
                      [
                        {
                          text: '17. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'Any Incentive for personal care is strictly prohibited.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '18. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'All rules & Regulation are subject to amendment whenever necessary.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '19. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'OUTSIDE EATABLES ARE NOT ALLOWED.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '20. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'UNDER NO CIRCUMSTANCES MONEY RECEIVED WILL BE REFUNDED.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '21. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'RIGHTS OF ADMISSION RESERVED.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        },
                        {}
                      ],
                      [
                        {
                          text: '22. ',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                        },
                        {
                          text: 'All disputes subject to Kolkata jurisdiction only.',
                          bold: false,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          colSpan: 2
                        }, {}
                      ],
                      [
                        {
                          text: '~ Charges ~',
                          bold: true,
                          fontSize: 9,
                          alignment: 'center',
                          color: '#2b1c63',
                          colSpan: 3
                        },
                        {}, {}
                      ],
                    ]
                  },
                  margin: [0, -5, 0, 0],
                  layout: 'noBorders'
                }
              ],
              [
                {
                  table: {
                    widths: ['10%', '40%', '40%', '10%'],
                    body: [
                      [
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [true, true, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, true, true, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                      ],
                      [
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [true, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, true, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                      ],
                      [
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [true, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, true, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                      ],
                      [
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [true, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, true, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                      ],
                      [
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                        {
                          text: pdfResult.form_Code === 'B' ? 'Blue Card' : pdfResult.form_Code === 'R' ? 'Red Card' : pdfResult.form_Code === 'Y' ? 'Yellow Card' : '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [true, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, true, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                      ],
                      [
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                        {
                          text: pdfResult.form_Code === 'B' ? '( Students up to 21 years )' : pdfResult.form_Code === 'R' ? '( Students / Non Students above 21 years )' : pdfResult.form_Code === 'Y' ? 'Ladies / Gents / Children upto 8\'O Clock' : pdfResult.form_Code === 'G' ? 'Green Card ( no age bar )' : pdfResult.form_Code === 'S' ? 'FLEXIBLE CARD' : '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [true, false, false, false],
                        },
                        {
                          text: 'Rate Rs. ' + pdfResult.total_Amt + ' (including GST)',
                          bold: true,
                          fontSize: 9,
                          alignment: 'right',
                          color: '#2b1c63',
                          border: [false, false, true, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                      ],
                      [
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [true, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'right',
                          color: '#2b1c63',
                          border: [false, false, true, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                      ],
                      [
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [true, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'right',
                          color: '#2b1c63',
                          border: [false, false, true, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                      ],
                      [
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [true, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'right',
                          color: '#2b1c63',
                          border: [false, false, true, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                      ],
                      [
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [true, false, false, true],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'right',
                          color: '#2b1c63',
                          border: [false, false, true, true],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                      ],
                      [
                        {
                          text: '• Insurance coverage against accident within the Society premises for the above period',
                          bold: true,
                          fontSize: 9,
                          alignment: 'center',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                          colSpan: 4
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'right',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                        {
                          text: '',
                          bold: true,
                          fontSize: 9,
                          alignment: 'left',
                          color: '#2b1c63',
                          border: [false, false, false, false],
                        },
                      ],
                    ]
                  },
                  margin: [0, 0, 0, 0],
                  // layout: 'noBorders'
                }
              ],
            ]
          }, layout: 'noBorders'
        }
      ]
    };
    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download('Form Report.pdf');
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition).print();
    } else {
      pdfMake.createPdf(docDefinition).open();
    }
  }
}
