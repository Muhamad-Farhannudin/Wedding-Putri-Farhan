import React, { useState, useEffect } from 'react';
import Button from '../Button';

export default function Form() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [attendance, setAttendance] = useState('');
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSubmissions = async () => {
    const response = await fetch('/api/form');
    if (response.ok) {
      const data = await response.json();
      setSubmissions(data.data);
    } else {
      console.error('Failed to fetch submissions');
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading ke true saat tombol diklik

    setTimeout(async () => {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, comment, attendance }),
      });

      if (response.ok) {
        const newSubmission = await response.json();
        setSubmissions([...submissions, newSubmission.data]);
        setName('');
        setComment('');
        setAttendance('');
      } else {
        console.error('Failed to submit form');
      }

      setLoading(false); // Set loading ke false setelah proses selesai
    }, 2000); // Durasi loading 2 detik
  };

  const enabled = name.length > 0 && comment.length > 0 && attendance.length > 0;

  return (
    <div className="w-full px-10">
      <form onSubmit={handleSubmit}>
        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4" htmlFor="name">
          Nama
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan nama Anda"
        />
        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4" htmlFor="comment">
          Ucapan & Doa
        </label>
        <textarea
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="comment"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Berikan Ucapan dan Doa Restu"
        />
        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4" htmlFor="attendance">
          Konfirmasi Kehadiran
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="attendance"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          >
            <option value="">Pilih Kehadiran</option>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
        <Button
          className="w-full mt-4 bg-blue-denim text-white font-bold py-2 px-4 rounded"
          type="submit" // Ensure the type is submit
          onClick={handleSubmit}
          disabled={!enabled || loading} // Disable the button based on the conditions
        >
          {loading ? 'Mengirim...' : 'Kirim Ucapan'}
        </Button>
      </form>
      <div className="mt-10 max-h-64 overflow-y-auto">
        {submissions.map((submission) => (
          <div key={submission.id} className="mb-4 p-4 border rounded">
            <div className="flex items-center gap-2 my-2">
              <h2 className="font-poppins text-lg font-bold">{submission.name}</h2>
              <p className="text-sm text-white bg-blue-denim px-2 py-1 rounded">{submission.attendance}</p>
            </div>
            <p className="text-base text-slate-600">{submission.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
