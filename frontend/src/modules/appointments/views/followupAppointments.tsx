import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function FollowUpAppointments() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#fff',
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: 1280, width: '100%', padding: 2, backgroundColor: '#fff', boxShadow: 3, maxHeight: '100vh', overflowY: 'auto' }}>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom sx={{ color: '#0a1d40', textAlign: 'center' }}>
            Follow-Up Appointments
          </Typography>

          {/* Search Section */}
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="h6" sx={{ color: '#0a1d40', marginBottom: 1 }}>
              Search Patient
            </Typography>
            <TextField
              fullWidth
              label="Enter Patient ID"
              variant="outlined"
              sx={{ backgroundColor: '#fff', borderRadius: 1 }}
            />
          </Box>

          {/* Results Section */}
          <Card sx={{ marginBottom: 3, backgroundColor: '#fff', color: '#0a1d40' }}>
            <CardContent>
              <Typography variant="h6">Search Results</Typography>
              <Typography>Patient ID: 12345</Typography>
              <Typography>Name: John Doe</Typography>
              <Typography>Follow Up Date: 2025-01-15</Typography>
              <Typography>Summary for CE Reviewers: Follow-up for recent symptoms and test results.</Typography>
            </CardContent>
          </Card>

          {/* Appointment Details Section */}
          <Card sx={{ marginBottom: 3, backgroundColor: '#fff', color: '#0a1d40' }}>
            <CardContent>
              <Typography variant="h6">Appointment Details</Typography>
              <Typography>Recent Symptoms: Mild fever, headache.</Typography>
              <Typography>Medication Refill: Ibuprofen 200mg.</Typography>
              <Typography>New Medication: Paracetamol 500mg.</Typography>
              <Typography>Career Note: Patient reports stress from work.</Typography>
              <Typography>Test Results: Pending.</Typography>
              <Typography>CE Reviewer Remarks: Monitor symptoms and follow-up in 2 weeks.</Typography>
            </CardContent>
          </Card>

          {/* Booking Management System Section */}
          <Card sx={{ backgroundColor: '#fff', color: '#0a1d40' }}>
            <CardContent>
              {/* <Typography variant="h6">Booking Management System</Typography> */}
              <Typography>Patient ID: 12345</Typography>
              <Typography>Type of Encounter: Follow-Up</Typography>
              <Typography>Assessment Score: 85</Typography>
              <Typography>Medication / Dosage: Ibuprofen 200mg twice daily</Typography>
            </CardContent>
          </Card>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button variant="contained" sx={{ backgroundColor: '#0a1d40', color: '#ffffff' }}>
            Manage Appointments
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}