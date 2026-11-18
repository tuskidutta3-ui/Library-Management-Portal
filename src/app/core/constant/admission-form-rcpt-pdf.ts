import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { ToWords } from 'to-words';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Injectable({
    providedIn: 'root',
})
export class AdmissionFormRcptPdfPdf {
    toWords = new ToWords(); //pdf.
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
    async generatePDF(action: string, ClubResult: any, pdfResult: any, type: boolean) {
        const ClubName = ClubResult.club_Name;
        const ClubAdd1 = ClubResult.club_Add1;
        const ClubAdd2 = ClubResult.club_Add2;
        const phone = ClubResult.phone_No;
        const dobAndTransactionRow = type
            ? [
                {
                    text: ``,
                    alignment: 'left',
                    border: [false, false, false, false],
                },
                {
                    text: `Transaction ID: ${pdfResult.transactionId}`,
                    alignment: 'left', colSpan: 2,
                    border: [false, false, false, false],
                },
                {
                    text: ``,
                    alignment: 'left',
                    border: [false, false, false, false],
                },
            ]
            : [
                {
                    text: '',
                    alignment: 'center',
                    border: [false, false, false, false],
                },
                {
                    text: `Date Of Birth: ${moment(pdfResult.dob).format('DD/MMM/YYYY')}`,
                    alignment: 'left',
                    border: [false, false, false, false],
                },
                {
                    text: ``,
                    alignment: 'center',
                    border: [false, false, false, false],
                },
            ];
        // Table definition
        const table = [
            {
                table: {
                    widths: ['5%', '50%', '45%'],
                    body: [
                        // Include dobAndTransactionRow as a part of the body
                        dobAndTransactionRow
                    ],
                },
                fontSize: 9,
                margin: [0, -5, 0, 0],
                layout: {
                    defaultBorder: true,
                },
            },
        ];
        const logoBase64 = await this.getBase64ImageFromURL('../../../assets/images/logo.png');
        // Define document definition
        let docDefinition: any = {
            pageSize: 'A4',
            pageOrientation: 'portrait',
            fontFamily: 'Times New Roman',
            pageMargins: [12, 15, 12, 30],
            info: {
                title: 'Seasonal Swimmer',
            },
            footer: function (currentPage: any, pageCount: any) {
                const now = new Date();
                const currentDate = now.toLocaleDateString(); // Format the date as per locale
                const currentTime = now.toLocaleTimeString(); // Format the time as per locale
                return {
                    columns: [
                        {
                            text: `${currentDate} ${currentTime}`,
                            alignment: 'left',
                            fontSize: 8,
                            margin: [10, 0, 15, 0], // Add space to the left (10) and right (20) of the date
                        },
                        {
                            text: '*Computer Generated Receipt, No need of Signature',
                            alignment: 'center',
                            fontSize: 8,
                            margin: [0, 0], // Center-aligned text with no margin,
                            bold: true
                        },
                        {
                            text: `Page ${currentPage} of ${pageCount}`,
                            alignment: 'right',
                            fontSize: 8,
                            margin: [10, 0], // Margin for spacing
                        },
                    ],
                    margin: [0, 10], // Margin for the footer to avoid overlapping content
                };
            },
            content: [
                {
                    table: {
                        widths: ['100%'],
                        body: [
                            [{
                                table: {
                                    widths: ['25%', '60%', '15%'],
                                    body: [
                                        [
                                            {
                                                image: logoBase64,
                                                width: 65,
                                                margin: [8, 5, 0, 0],
                                                rowSpan: 4,
                                                alignment: 'left',
                                                color: 'blue'
                                            },
                                            {}, {}, // Empty cells for alignment
                                        ],
                                        [
                                            {}, // Empty cell to align text
                                            {
                                                text: ClubName,
                                                bold: true,
                                                fontSize: 12,
                                                alignment: 'center',
                                                color: 'blue'
                                            },
                                            {}
                                        ],
                                        [
                                            {}, // Empty cell to align text
                                            {
                                                text: ClubAdd1 + ' ' + ClubAdd2,
                                                bold: false,
                                                fontSize: 10,
                                                alignment: 'center',
                                                color: 'blue'
                                            },
                                            {}
                                        ],
                                        [
                                            {}, // Empty cell to align text
                                            {
                                                text: 'Phone No : ' + phone,
                                                bold: false,
                                                fontSize: 10,
                                                alignment: 'center',
                                                color: 'blue',
                                            },
                                            {}
                                        ],
                                        [
                                            {}, // Empty cell to align text
                                            {
                                                text: 'Money Receipt',
                                                bold: true,
                                                fontSize: 11,
                                                alignment: 'center',
                                                color: 'blue'
                                            },
                                            {}
                                        ],
                                        [
                                            {}, // Empty cell to align text
                                            {
                                                text: 'For Seasonal Swimming Admission Receipt',
                                                bold: true,
                                                fontSize: 11,
                                                alignment: 'center',
                                                decoration: 'underline'
                                            },
                                            {}
                                        ],
                                        [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}],
                                    ]
                                },
                                layout: 'noBorders'
                            }],
                            [
                                {
                                    table: {
                                        widths: ['5%', '50%', '45%'],
                                        body: [
                                            [
                                                { text: '', alignment: 'center', border: [false, false, false, false] },
                                                { text: `Form No: ${pdfResult.formNo}`, alignment: 'left', border: [false, false, false, false] },
                                                { text: `Receipt No: ${pdfResult.receiptNo}`, alignment: 'left', border: [false, false, false, false] },
                                            ],
                                            [
                                                { text: '', alignment: 'center', border: [false, false, false, false] },
                                                { text: `Card No: ${pdfResult.cardNo}`, alignment: 'left', border: [false, false, false, false] },
                                                { text: `Receipt Date:  ${moment(pdfResult.receiptDt).format('DD/MMM/YYYY')}`, alignment: 'left', border: [false, false, false, false] },
                                            ],
                                            [
                                                { text: '', alignment: 'center', border: [false, false, false, false] },
                                                { text: `Receipt Time: ${pdfResult.receiptTm}`, alignment: 'left', border: [false, false, false, false] },
                                                { text: '', alignment: 'left', border: [false, false, false, false] },
                                            ],
                                            [
                                                { text: '', alignment: 'center', border: [false, false, false, false] },
                                                { text: `Name: ${pdfResult.name} `, alignment: 'left', border: [false, false, false, false] },
                                                { text: `Guardia's Name: ${pdfResult.fathersName}`, alignment: 'left', border: [false, false, false, false] },
                                            ],
                                            [
                                                { text: '', alignment: 'center', border: [false, false, false, false] },
                                                { text: `Date Of Birth: ${moment(pdfResult.dob).format('DD/MMM/YYYY')}`, alignment: 'left', border: [false, false, false, false] },
                                                {
                                                    text: `[${pdfResult.sex === 'F' ? 'Female' : pdfResult.sex === 'M' ? 'Male' : 'Other'}]`,
                                                    alignment: 'center',
                                                    border: [false, false, false, false]
                                                },
                                            ],
                                        ]
                                    },
                                    layout: {
                                        defaultBorder: true,
                                    },
                                    fontSize: 9,
                                    margin: [0, -5, 0, 0],
                                }],
                            [table],
                            [
                                {
                                    table: {
                                        widths: ['5%', '50%', '45%'],
                                        body: [
                                            [{ text: '', alignment: 'center', border: [false, false, false, false] },
                                            { text: `Recieved Rs. ${pdfResult.total_Amt} (Rs. ${this.toWords.convert(pdfResult.total_Amt, { currency: true })})`, alignment: 'left', border: [false, false, false, false], colSpan: 2 },
                                            { text: '', alignment: 'center', border: [false, false, false, false] },
                                            ],
                                        ]
                                    },
                                    layout: {
                                        defaultBorder: true,
                                    },
                                    fontSize: 9,
                                    margin: [0, -5, 0, 0],
                                }
                            ],
                        ],
                    },
                    layout: 'noBorders',
                },
            ],
        };
        if (action === 'download') {
            pdfMake.createPdf(docDefinition).download('AdmissionReceipt.pdf');
        } else if (action === 'print') {
            pdfMake.createPdf(docDefinition).print();
        } else {
            pdfMake.createPdf(docDefinition).open();
        }
    }
}
