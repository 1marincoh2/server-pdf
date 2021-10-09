import { ContentText, TDocumentDefinitions } from 'pdfmake/interfaces';
import { createPdf, TCreatedPdf } from 'pdfmake/build/pdfmake';

export default class A122 {


    private docDefinition: TDocumentDefinitions | any = {
        pageSize: 'A4',
        pageMargins: [20, 25, 20, 25],
        content: [
            {
                layout: 'lightHorizontalLines', // optional
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    widths: [ '*', 'auto', 100, '*' ],

                    body: [
                        [ 'First', 'Second', 'Third', 'The last one' ],
                        [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
                        [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
                    ]
                }
            }
        ],
          };

    constructor() {

    };
    public async getDocument(): Promise<TCreatedPdf> {

        return createPdf(this.docDefinition);
    }

}
