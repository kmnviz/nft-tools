import formidable from 'formidable';
import IpfsClient from '../../clients/ipfsClient';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req, res) => {
    if (req.method === 'POST') {
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            const ipfsClient = new IpfsClient('http://localhost:5001');
            const response = await ipfsClient.addFile(files.file.filepath);

            res.json({ response });
        });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };
//
// export default async (req, res) => {
//     console.log('req: ', req.method);
//     if (req.method === 'POST') {
//         console.log('enters here');
//         const response = await handleForm(req);
//         console.log('response: ', response);
//     } else {
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// }
//
// const handleForm = (req) => {
//     console.log('enters here too');
//     return new Promise((resolve, reject) => {
//         const form = new formidable.IncomingForm();
//         form.parse(req, async (err, fields, files) => {
//             if (err) {
//                 reject(err);
//             }
//
//             resolve({ fields, files });
//         });
//     });
// }