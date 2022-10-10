import Button from 'react-bootstrap/Button';
import { createTheme, ThemeProvider  } from '@mui/material/styles';

const theme = createTheme({

    // secondary: {
       
    //     main: '#616161',
        
    //   },
});

function Book(props) {
  return (
    <>
    <ThemeProvider theme={theme}>
      
      <Button className="bttn" variant="dark">{props.title}</Button> 
      </ThemeProvider>
    </>
  );
}

export default Book;