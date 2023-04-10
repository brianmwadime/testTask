import { makeStyles } from 'tss-react/mui';

const mainBg: string = require('@assets/img/mainBackground.png');

const useStyles = makeStyles()(
  (theme) => ({
    container: {
      minHeight: 'calc(100vh - 90px)',
      backgroundImage: `url(${mainBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  })
);

export default useStyles;
