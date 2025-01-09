import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function SummaryCardPage() {
  const [patientId, setPatientId] = useState('');
  const [patient, setPatient] = useState<{
    id: string;
    name: string;
    followUpDate: string;
    summary: string;
  } | null>(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/patients/${patientId}`);
      const data = await response.json();
      setPatient(data);
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '100vh',
        backgroundColor: '#fff',
        padding: 2,
        marginTop: '80px',
      }}
    >
      <Card sx={{ maxWidth: 600, width: '100%', padding: 2, backgroundColor: '#fff', boxShadow: 8 }}>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom sx={{ color: '#0a1d40', textAlign: 'center' }}>
            Search Patient
          </Typography>

          {/* Search Section */}
          <Box sx={{ marginBottom: 3 }}>
            <TextField
              fullWidth
              label="Enter Patient ID"
              variant="outlined"
              sx={{ backgroundColor: '#fff', borderRadius: 1, marginBottom: 1 }}
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: '#0a1d40', color: '#ffffff' }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>

          {/* Display Result */}
          {patient && (
            <Card sx={{ marginTop: 2, backgroundColor: '#f5f5f5', color: '#0a1d40' }}>
              <CardContent>
                <Typography>Patient ID: {patient.id}</Typography>
                <Typography>Name: {patient.name}</Typography>
                <Typography>Follow Up Date: {patient.followUpDate}</Typography>
                <Typography>Summary for CE Reviewers: {patient.summary}</Typography>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
