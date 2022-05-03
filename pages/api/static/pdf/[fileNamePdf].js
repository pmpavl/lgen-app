import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const handler = async (req, res) => {
  const { fileNamePdf } = req.query;

  const pipeline = promisify(stream.pipeline);

  const response = await fetch(`http://localhost:7784/static/pdf/${fileNamePdf}`, {
    method: 'GET',
  });

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${fileNamePdf}`);
  await pipeline(response.body, res);
};

export default handler;
