import React from 'react';
import {
  Grid, TextField, Button, InputLabel, Select, MenuItem, Slider, FormControl, Link,
} from '@mui/material';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined';

const DefaultGenerateValues = {
  templateName: 'default',
  templateEnrichTheme: '',
  templateEnrichClass: -1,
  taskIds: [
    '6255a454772379fe2df545e9',
    '6255a454772379fe2df545ef',
    '6255a454772379fe2df545f9',
    '6255a454772379fe2df545f6',
  ],
};

function FormGenerate() {
  const [generateValues, setGenerateValues] = React.useState(DefaultGenerateValues);
  const [generateResponse, setGenerateResponse] = React.useState({
    fileNamePdf: '',
    fileNameTex: '',
  });

  const testGenerate = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:7784/app/v1/generate/ping', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(generateValues),
    }).then((resp) => resp.json())
      .then((respJSON) => {
        setGenerateResponse({
          fileNamePdf: respJSON.fileNamePdf,
          fileNameTex: respJSON.fileNameTex,
        });
      });
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => {
              setGenerateValues({ ...generateValues, [e.target.id]: e.target.value });
            }}
            variant="outlined"
            fullWidth
            required
            id="templateEnrichTheme"
            label="Тема"
          />
        </Grid>
        <Grid item xs={12}>
          <Slider
            onChange={(e) => {
              setGenerateValues({ ...generateValues, [e.target.name]: e.target.value });
            }}
            value={generateValues.templateEnrichClass}
            variant="outlined"
            name="templateEnrichClass"
            marks={Array(11).fill().map((_, i) => ({
              value: i + 1,
              label: i + 1,
            }))}
            min={1}
            step={1}
            max={11}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth required>
            <InputLabel id="templateNameLable">Шаблон</InputLabel>
            <Select
              variant="outlined"
              id="templateName"
              label="Шаблон *"
              labelId="templateNameLable"
              value={generateValues.templateName}
              disabled
            >
              <MenuItem value="default">
                Стандартный
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Button
            onClick={testGenerate}
            variant="outlined"
            size="large"
            fullWidth
            type="submit"
            sx={{
              height: '100%',
            }}
          >
            Сгенерировать
          </Button>
        </Grid>
      </Grid>
      {generateResponse.fileNamePdf !== '' && (
        <Grid item xs={12} lg={8}>
          <Link
            href={`/api/static/pdf/${generateResponse.fileNamePdf}`}
          >
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                m: 'auto',
                mt: 5,
                width: 200,
              }}
            >
              Скачать PDF
              {' '}
              <PictureAsPdfOutlinedIcon />
            </Button>
          </Link>
        </Grid>
      )}
      {generateResponse.fileNameTex !== '' && (
        <Link
          href={`/api/static/tex/${generateResponse.fileNameTex}`}
        >
          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{
              m: 'auto',
              mt: 5,
              width: 200,
            }}
          >
            Скачать TEX
            {' '}
            <TextFieldsOutlinedIcon />
          </Button>
        </Link>
      )}
    </>
  );
}

export default FormGenerate;
