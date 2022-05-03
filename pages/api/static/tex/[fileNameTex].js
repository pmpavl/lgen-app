import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const handler = async (req, res) => {
  const { fileNameTex } = req.query;

  const pipeline = promisify(stream.pipeline);

  const response = await fetch(`http://localhost:7784/static/tex/${fileNameTex}`, {
    method: 'GET',
  });

  res.setHeader('Content-Type', 'application/x-tex');
  res.setHeader('Content-Disposition', `attachment; filename=${fileNameTex}`);
  await pipeline(response.body, res);
};

export default handler;
