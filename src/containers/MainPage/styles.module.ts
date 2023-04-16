import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (theme) => ({
    container: {
      padding: '108px 0px'
    },
    logo: {
      width: '248px',
      marginBottom: '30px'
    },
    description: {
      fontSize: '28px',
      lineHeight: '36px'
    },
    buttonWrap: {
      marginTop: '32px',
      display: 'flex',
      gap: '16px',
      flexDirection: 'row',

      '& button': {
        color: '#ffffff'
      }
    },
    block: {
      justifySelf: 'end',

      '@media (max-width: 1160px)': {
        justifySelf: 'center'
      },
    },
    investContainer: {},
    investText: {
      fontSize: '26px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    saleBtnText: {
      fontSize: '26px'
    },
    saleContainer: {
      borderRadius: '10px',
      overflow: 'hidden',
      height: 'fit-content',
      maxWidth: '500px'
    },
    header: {
      background: '#B02F96',
      padding: '14px',
      fontSize: '32px',
      fontWeight: '700',
      textAlign: 'center',
    },
    body: {
      background: 'rgba(2, 1, 41, 0.8)',
      padding: '32px',
      boxSizing: 'border-box',

      '& title': {
        fontSize: '24px',
        marginBottom: '32px'
      },
      '& button': {
        marginTop: '64px'
      }
    },
    title: {
      fontSize: '24px',
      marginBottom: '32px'
    },
    disabledInput: {
      background: '#21214F',
      marginTop: '8px',
      borderRadius: '10px',

      '& input': {
        fontSize: '18px',
        padding: '18px',
        textFillColor: '#44446D !important'
      },
    },
    tokens: {
      marginTop: '32px',
      fontWeight: 400,
      fontSize: '24px'
    },
    totalRaised : {
      fontSize: '28px',
      fontWeight: 500,
      marginTop: '32px',
      textAlign: 'center'
    },
    button: {
      width: '134px',

      '& button': {
        width: '134px',
      }
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',

      '@media (max-width: 1160px)': {
        gridTemplateColumns: '1fr',
        justifyItems: 'center',
        rowGap: '64px'
      },
    },
  })
);

export default useStyles;