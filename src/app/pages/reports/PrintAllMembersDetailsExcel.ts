//////////////////////////////////////////NEW EXCEL//////////////////////////////////////////////
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import * as ExcelJS from 'exceljs';
export class PrintAllMembersDetailsExcel {
    xlRow: number = 0;
    xlCol: number = 0;
    dataforExcel: any
    exportToExcel(
        excelDataSource: any
    ) {
        this.dataforExcel = excelDataSource
        let reportData = {
            title: 'All Member Details',
            // title1: `${this.dataforExcel.subUnitName}`,
            // title2: `SUB-UNIT MASTER`,
            data: this.dataforExcel
        };
        this.exportExcel(reportData);
    }
    exportExcel(excelData: any) {
        const title = excelData.title;
        // const title1 = this.dataforExcel[0].SubUnitName;
        // const title2 = excelData.title2;
        const data = excelData.data;
        let workbook = new Workbook();
        let worksheet = workbook.addWorksheet('Sheet1', { views: [{ state: 'frozen', ySplit: 3 }] });
        worksheet.pageSetup = { orientation: 'landscape', paperSize: 9 };
        const borderStyle = {
            style: 'thin',
            color: { argb: '000000' },
        };
        worksheet.mergeCells('A1', 'I1');
        let titleRow = worksheet.getCell('A1');
        titleRow.value = title;
        titleRow.font = {
            name: 'Calibri',
            size: 15,
            underline: 'single',
            bold: true,
            color: { argb: '000000' },
        };
        titleRow.alignment = {
            vertical: 'middle',
            horizontal: 'left',
            wrapText: true,
        };
        worksheet.mergeCells('A2', 'I2');
        let titleRow1 = worksheet.getCell('A2');
        titleRow1.value = '';
        titleRow1.font = {
            name: 'Calibri',
            size: 13,
            // underline: 'single',
            // bold: true,
            color: { argb: '000000' },
        };
        titleRow1.alignment = {
            vertical: 'middle',
            horizontal: 'left',
            wrapText: true,
        };
        // worksheet.mergeCells('A3', 'N3');
        // let titleRow2 = worksheet.getCell('A3');
        // titleRow2.value = '';
        // titleRow2.font = {
        //     name: 'Calibri',
        //     size: 13,
        //     underline: 'single',
        //     bold: true,
        //     color: { argb: '000000' },
        // };
        // titleRow2.alignment = {
        //     vertical: 'middle',
        //     horizontal: 'left',
        //     wrapText: true,
        // };
        // worksheet.mergeCells('A4', 'N4');
        // let titleRow3 = worksheet.getCell('A4');
        // titleRow3.value = '';
        // titleRow3.font = {
        //     name: 'Calibri',
        //     size: 11,
        //     underline: 'single',
        //     bold: true,
        //     color: { argb: '000000' },
        // };
        // titleRow3.alignment = {
        //     vertical: 'middle',
        //     horizontal: 'left',
        //     wrapText: true,
        // };
        // ////////////////////////////////////////
        // worksheet.getCell('A3').value = 'Sub-Unit Id';
        // worksheet.getCell('A3').font = { bold: true, underline: false };
        // worksheet.getCell('A3').fill = {
        //     type: 'pattern',
        //     pattern: 'solid',
        //     fgColor: { argb: ' FFFFFF' },
        // };
        // worksheet.getCell('A3').font = {
        //     name: 'Calibri',
        //     bold: true,
        //     size: 9
        // };
        // worksheet.getCell('A3').alignment = {
        //     vertical: 'top',
        //     horizontal: 'center',
        //     wrapText: true,
        // };
        // worksheet.getCell('A3').border = {
        //     top: borderStyle as ExcelJS.Border,
        //     left: borderStyle as ExcelJS.Border,
        //     bottom: borderStyle as ExcelJS.Border,
        //     right: borderStyle as ExcelJS.Border,
        // };
        //////////////////////////////////////////////
        worksheet.getCell('A3').value = 'Member Id';
        worksheet.getCell('A3').font = { bold: true, underline: false };
        worksheet.getCell('A3').fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: ' FFFFFF' },
        };
        worksheet.getCell('A3').font = {
            name: 'Calibri',
            bold: true,
            size: 9
        };
        worksheet.getCell('A3').alignment = {
            vertical: 'top',
            horizontal: 'center',
            wrapText: true,
        };
        worksheet.getCell('A3').border = {
            top: borderStyle as ExcelJS.Border,
            left: borderStyle as ExcelJS.Border,
            bottom: borderStyle as ExcelJS.Border,
            right: borderStyle as ExcelJS.Border,
        };
        ///////////////////////////////////////////////////////////////
        worksheet.getCell('B3').value = 'Member Name';
        worksheet.getCell('B3').font = { bold: true, underline: false };
        worksheet.getCell('B3').fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: ' FFFFFF' },
        };
        worksheet.getCell('B3').font = {
            name: 'Calibri',
            bold: true,
            size: 9
        };
        worksheet.getCell('B3').alignment = {
            vertical: 'top',
            horizontal: 'center',
            wrapText: true,
        };
        worksheet.getCell('B3').border = {
            top: borderStyle as ExcelJS.Border,
            left: borderStyle as ExcelJS.Border,
            bottom: borderStyle as ExcelJS.Border,
            right: borderStyle as ExcelJS.Border,
        };
        worksheet.getCell('C3').value = 'Phone No';
        worksheet.getCell('C3').font = { bold: true, underline: false };
        worksheet.getCell('C3').fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: ' FFFFFF' },
        };
        worksheet.getCell('C3').font = {
            name: 'Calibri',
            bold: true,
            size: 9
        };
        worksheet.getCell('C3').alignment = {
            vertical: 'top',
            horizontal: 'center',
            wrapText: true,
        };
        worksheet.getCell('C3').border = {
            top: borderStyle as ExcelJS.Border,
            left: borderStyle as ExcelJS.Border,
            bottom: borderStyle as ExcelJS.Border,
            right: borderStyle as ExcelJS.Border,
        };
        /////////////////////////////////////////////////////////////////////////
        worksheet.getCell('D3').value = 'Email Id';
        worksheet.getCell('D3').font = { bold: true, underline: false };
        worksheet.getCell('D3').fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: ' FFFFFF' },
        };
        worksheet.getCell('D3').font = {
            name: 'Calibri',
            bold: true,
            size: 9
        };
        worksheet.getCell('D3').alignment = {
            vertical: 'top',
            horizontal: 'center',
            wrapText: true,
        };
        worksheet.getCell('D3').border = {
            top: borderStyle as ExcelJS.Border,
            left: borderStyle as ExcelJS.Border,
            bottom: borderStyle as ExcelJS.Border,
            right: borderStyle as ExcelJS.Border,
        };
        this.xlRow = 4;
        const setCellValueAndBorder = (worksheet: any, row: number, col: number, value: any, isAlignment = false, isBold = false) => {
            const cell = worksheet.getCell(row, col);
            cell.value = value;
            cell.font = {
                size: 9,
                bold: isBold // ✅ Move bold here
            };
            // Apply alignment
            cell.alignment = {
                horizontal: isAlignment ? 'left' : 'right', // You can default to 'left' or remove it
                wrapText: true,
            };
            // Optional: Apply borders if needed
            cell.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' },
            };
        };
        data.forEach((data: any) => {
            this.xlCol = 1; 
            setCellValueAndBorder(worksheet, this.xlRow, this.xlCol++, data.userId, false);
            setCellValueAndBorder(worksheet, this.xlRow, this.xlCol++, data.userName, true);
            setCellValueAndBorder(worksheet, this.xlRow, this.xlCol++, data.phoneNo, true);
            setCellValueAndBorder(worksheet, this.xlRow, this.xlCol++, data.userEmail, true);
            this.xlRow++;
        });
        worksheet.getColumn(1).width = 7;
        worksheet.getColumn(2).width = 15;
        worksheet.getColumn(3).width = 10;
        worksheet.getColumn(4).width = 20;
        workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            });
            fs.saveAs(blob, `${title}.xlsx`);
        });
    }
}