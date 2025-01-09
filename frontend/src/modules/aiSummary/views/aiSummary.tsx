import React, { useEffect, useState } from 'react';

export default function AiSummary() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [patientId, setPatientId] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3003/api/summary?patientId=${patientId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err:any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-24">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mr-2"
        />
        <button
          onClick={fetchData}
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Fetch Summary
        </button>
      </div>
      <div className="max-w-sm border border-gray-300 rounded-lg shadow-lg p-4 m-4">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && data.summary && (
          <div>
            <h2 className="text-lg font-bold mb-2">Patient Summary</h2>
            <p className="text-left">
              {data.summary.replace(/<span style="color: red; font-weight: bold;">(.*?)<\/span>/g, (match:any, p1:any) => (
                <span key={p1} className="text-red-500 font-bold">{p1}</span>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
