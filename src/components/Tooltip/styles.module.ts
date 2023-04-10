import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  () => ({
    wrap: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    tooltip: {

      '& .MuiTooltip-tooltip': {
        backgroundColor: '#21214F',
        borderRadius: '16px',
        padding: '12px 16px',
        fontSize: '14px',
      }
    }
  })
);


export default useStyles;
