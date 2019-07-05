import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Button } from '@material-ui/core';
import { convert as jsonSchemaConverter } from 'json-to-json-schema';
import notify from '../utils/notifier';

const JsonSchemaConverter = () => {
  const [jsonData, setJsonData] = useState('');
  const [jsonSchemaData, setJsonSchemaData] = useState('');

  const jsonToJsonSchema = () => {
    if (jsonData) {
      try {
        let parseJsonData = JSON.parse(jsonData);
        let schema = jsonSchemaConverter(parseJsonData);
        setJsonSchemaData(JSON.stringify(schema, null, 4));
      } catch (e) {
        setJsonSchemaData('');
        notify('Invalid Json Data');
      }
    } else {
      setJsonSchemaData('');
    }
  }

  return (
    <Container>
      <div>
        <TextField
          fullWidth
          multiline
          label="Json Data"
          rows="12"
          value={jsonData}
          onChange={(e) => { setJsonData(e.target.value); }}
          margin="normal"
        />
      </div>

      <div>
        <Button variant="contained" color="primary" onClick={(e) => jsonToJsonSchema()}>
          Convert to Json Schema
        </Button>
      </div>
      
      <div>
        <TextField
          fullWidth
          multiline
          rows="12"
          value={jsonSchemaData}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
        />
      </div>
    </Container>
  )
}

export default JsonSchemaConverter;
