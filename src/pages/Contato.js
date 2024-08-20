import '../App.css';
import '../styles/Contato.css';
import React from 'react';
import { useState } from 'react';
import EmailButton from '../components/EmailButton.js'
import emailjs from '@emailjs/browser'

export const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Por favor, preencha o seu nome.';
    }
    if (!formData.email) {
      validationErrors.email = 'Por favor, preencha o seu email.';
    }
    if (!formData.message) {
      validationErrors.message = 'Por favor, preencha a sua mensagem.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setErrors({});
    }

    const templateParams = {
      from_name: formData.name,
      message: formData.message,
      email: formData.email
    }

    emailjs.send(
      'service_k7i11p3',
      'template_tjl9zii',
      templateParams,
      'Aj6r553aDRSOBjQ5W'
    )
      .then((response) => {
        console.log('EMAIL ENVIADO', response.status, response.text);
        setSubmissionStatus('Email enviado com sucesso!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log('ERRO: ', error);
        setSubmissionStatus(`Falha ao enviar o email. Erro: ${error.text}`);
      });
  };

  return (
    <div className="contato-box">
      <div className='contato'>
        <h1>Contato</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Digite seu nome'
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Digite seu email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="form-group-message">
            <textarea
              id="message"
              name="message"
              placeholder='Digite sua mensagem'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="form-group-button">
            <EmailButton type="submit" className='btn-send' buttonStyle={'btn--outline'}>Enviar</EmailButton>
          </div>
          {submissionStatus && <p>{submissionStatus}</p>}
        </form>
      </div>
    </div>
  );
};