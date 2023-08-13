import { DashHeader } from '../../Components/Common/DashHeader';
import { ChangesBox } from '../../Components/Common/ChangesBox';
import { Grid } from '@mui/material';

export const BulkChanges = () => {
  return (
    <>
      <DashHeader title="Bulk Changes" subtitle="" />
      <Grid container>
        <Grid container item xs={12} spacing={5} sx={{ marginTop: '80px' }}>
          <Grid item xs={5}>
            <Grid item xs={12}>
              <ChangesBox label="Relationships" link="/relationships" />
              <ChangesBox label="Designations" link="/designations" />
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid item xs={12}>
              <ChangesBox label="Designations" link="/designations" />
              <ChangesBox label="References" link="/references" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
