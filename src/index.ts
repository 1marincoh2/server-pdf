import express, { Request, Response } from "express";
// @ts-ignore
import A122 from './pdf-view';
import { PDF} from './pdf-core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


const app: express.Application = express();

app.get('/', async (req:Request, res:Response) => {
    const a122 = new A122()
    const pdf = new PDF<A122>(a122);
    // await pdf.save('/home/misael/Documents/proyectos/amir')
    const download = Buffer.from(await pdf.getBase64(), 'base64');
    res.contentType('application/pdf');
    res.send(download);

    // res.send(XmlToJson(xml))
    // res.send(data);
});
app.listen(3001, () => {
    console.log('App is listening on port 3001!');
});
