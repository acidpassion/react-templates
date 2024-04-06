import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Switch } from '@mui/material';

const Form = () => {
  const [apiKey, setApiKey] = useState('');
  const [appService, setAppService] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [option, setOption] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log('Form submitted!');
    }
  };

  const validateForm = () => {
    const errors = {};
    if (option) {
      if (!apiKey.trim()) {
        errors.apiKey = 'API Key is required';
      }
      if (!appService.trim()) {
        errors.appService = 'App Service is required';
      }
      if (!messageBody.trim()) {
        errors.messageBody = 'Message Body is required';
      }
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        error={!!errors.apiKey}
        helperText={errors.apiKey}
        fullWidth
        required={option}
      />
      <TextField
        label="App Service"
        value={appService}
        onChange={(e) => setAppService(e.target.value)}
        error={!!errors.appService}
        helperText={errors.appService}
        fullWidth
        required={option}
      />
      <TextField
        label="Message Body"
        value={messageBody}
        onChange={(e) => setMessageBody(e.target.value)}
        error={!!errors.messageBody}
        helperText={errors.messageBody}
        fullWidth
        required={option}
      />
      <FormControlLabel
        control={<Switch checked={option} onChange={(e) => setOption(e.target.checked)} />}
        label="Toggle"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;
