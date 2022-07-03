import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const NewTask = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <form>
          <Card>
            <Typography>Create task</Typography>
            
          </Card>
        </form>
      </Grid>
    </Grid>
  );
};

export default NewTask;
