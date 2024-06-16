import { useEffect, useState } from 'react';

export default function CongratulationsList() {
  const [congratulations, setCongratulations] = useState([]);

  useEffect(() => {
    async function fetchCongratulations() {
      const response = await fetch('/api/congratulations');
      const data = await response.json();
      if (data.success) {
        setCongratulations(data.data);
      }
    }

    fetchCongratulations();
  }, []);

  return (
    <div>
      <h2>Congratulations Messages</h2>
      <ul>
        {congratulations.map((congrats) => (
          <li key={congrats.id}>
            <strong>{congrats.name}:</strong> {congrats.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}
