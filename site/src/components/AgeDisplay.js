import React, { useState, useEffect } from 'react';
import { calculateAge } from './CalculateAge'; 

const AgeDisplay = ({ birthDate }) => {
  const [age, setAge] = useState(calculateAge(birthDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge(birthDate));
    }, 1000);

    return () => clearInterval(interval); 
  }, [birthDate]);

  return <p>Idade: {age}</p>;
};

export default AgeDisplay;
