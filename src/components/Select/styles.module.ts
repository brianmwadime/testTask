import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (theme) => ({
    wrap: {
      width: '100%',

      '& .MuiInputBase-root': {
        borderRadius: '10px !important',
      },
    },
    select: {
      width: '100%',
      background: '#21214F',

      '&:hover': {
        '&& fieldset': {
          border: 'none'
        }
      },

      '& .MuiSelect-select': {
        padding: '16px',
        boxSizing: 'border-box',
        height: '56px !important',
        display: 'flex',
        alignItems: 'center',
      },

      '&:before': {
        content: 'none',
      },

      '&:after': {
        content: 'none',
      },

      '& .MuiSelect-icon': {
        color: '#B02F96',
      },

      '& .MuiSelect-icon.Mui-disabled': {
        color: 'rgba(255, 255, 255, 0.16)'
      },

      '& .MuiInput-input.Mui-disabled': {
        '-webkit-text-fill-color': 'rgba(255, 255, 255, 0.16)',
      }
    },
    label: {
      fontSize: '18px !important',
      fontWeight: '600 !important',
      marginBottom: '8px !important',
      color: '#ffffff !important'
    }
  })
);

export default useStyles;
