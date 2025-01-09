import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SummaryPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '100vh',
        backgroundColor: '#fff',
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: 1000, width: '100%', padding: 2, backgroundColor: '#fff', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom sx={{ color: '#0a1d40', textAlign: 'center' }}>
            Summary Page
          </Typography>

          {/* Medical - Flags */}
          <Card sx={{ marginBottom: 2, backgroundColor: '#fff', color: '#0a1d40' }}>
            <CardContent>
              <Typography variant="h6">Medical - Flags</Typography>
              <ul>
                <Typography component="li">Flag 1</Typography>
                <Typography component="li">Flag 2</Typography>
                <Typography component="li">Flag 3</Typography>
              </ul>
            </CardContent>
          </Card>

          {/* Functional - Scores and Flags */}
          <Card sx={{ marginBottom: 2, backgroundColor: '#fff', color: '#0a1d40' }}>
            <CardContent>
              <Typography variant="h6">Functional - Scores and Flags</Typography>

              <Box>
                <Typography>Personal: Score 85, Flags: None</Typography>
                <Typography>Social: Score 78, Flags: 1</Typography>
                <Typography>Hobbies and Interests: Score 90, Flags: None</Typography>
                <Typography>Activities and Engagement: Score 88, Flags: 2</Typography>
              </Box>
            </CardContent>
          </Card>

          {/* Behavioral - Scores and Flags */}
          <Card sx={{ marginBottom: 2, backgroundColor: '#fff', color: '#0a1d40' }}>
            <CardContent>
              <Typography variant="h6">Behavioral - Scores and Flags</Typography>
              <Typography>Score: 70</Typography>
              <Typography>Flags: 3</Typography>
            </CardContent>
          </Card>

          {/* Cognition - Scores */}
          <Card sx={{ marginBottom: 2, backgroundColor: '#fff', color: '#0a1d40' }}>
            <CardContent>
              <Typography variant="h6">Cognition - Scores</Typography>
              <Typography>Score: 95</Typography>
            </CardContent>
          </Card>

          {/* DE Team Markers / Starred Questions / Flags */}
          <Card sx={{ backgroundColor: '#fff', color: '#0a1d40' }}>
            <CardContent>
              <Typography variant="h6">DE Team Markers / Starred Questions / Flags</Typography>
              <ul>
                <Typography component="li">Marker 1: Highlighted</Typography>
                <Typography component="li">Starred Question 1: Response flagged</Typography>
                <Typography component="li">Flag 1: Requires follow-up</Typography>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button variant="contained" sx={{ backgroundColor: '#0a1d40', color: '#ffffff' }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
