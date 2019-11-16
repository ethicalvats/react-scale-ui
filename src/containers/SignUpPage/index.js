import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Helmet } from "react-helmet";
import H1 from "../../components/H1";
import DetailsPage from '../DetailsPage';
import FormsPage from '../FormsPage';

export default function SignUpPage() {
  const [nextStep, setNextStep] = useState(false)
  const [formData, setFormData] = useState({})
  const handleNext = (formData) => {
    setFormData(formData)
    setNextStep(true)
  }
  return (
    <article>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      {nextStep ? <DetailsPage data={{ ...formData }} /> : <FormsPage onNext={(values) => handleNext(values)} />}
      <div className="pair_programming">
        <img src="pair_programming.svg" />
      </div>
    </article>
  );
}
