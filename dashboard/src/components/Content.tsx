import Box from '@mui/material/Box';

const contentStyle = {
    backgroundColor: (theme: any) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
};

const Content = () => {
  return (
    <Box sx={contentStyle}>
      Content
    </Box>
  );
};

export default Content;