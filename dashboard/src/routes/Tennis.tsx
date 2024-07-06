import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';

const contentStyle = {
    backgroundColor: (theme: any) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
};

const Tennis = () => {
    return (
      <Box sx={contentStyle}>
        {/* This Toolbar adds space above the Container to have space with the real navigation top bar */}
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                Tennis
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
  
  export default Tennis;