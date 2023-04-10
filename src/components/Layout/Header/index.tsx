import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import classNames from 'classnames';

import Container from '@components/Container';
import Button from '@components/Button';
import AccountModal from '@components/modals/AccountModal';
import ChainButton from '@components/ChainButton';
import ConnectWalletButton from '@components/ConnectWalletButton';

import { useModal } from '@hooks/useModal';
import useWeb3 from '@hooks/useWeb3';

import { BUTTON_SIZES, BUTTON_TYPES } from '@constants/style.constants';
import { PATH_INDEX } from '@constants/routes.constants';
import { MenuBurger } from '@constants/icons.constants';
import { CloseMenuIcon } from '@constants/icons.constants';

const headerLogo: string = require('@assets/logos/headerLogo.svg').default;

import useStyles from './styles.module';

interface Props {
  handleCloseDrawer?: () => void
}

const Header: FC<Props> = ({ handleCloseDrawer }) => {
  const { classes } = useStyles();
  const { account } = useWeb3();

  const [onPresentAccountModal] = useModal(
    <AccountModal />
  );

  const handleMyWallet = () => {
    onPresentAccountModal();
    handleCloseDrawer && handleCloseDrawer();
  };

  return (
    <div className={classes.header}>
      <Container className={classNames(classes.row, classes.sideBar)}>
        Header
      </Container>
    </div>
  );
};


const HeaderWrapper: FC = () => {
  const { classes } = useStyles();
  const matches = useMediaQuery('(max-width:1160px)');
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleCloseDrawer = () => {
    setIsSideBarOpen(false);
  };

  return (
    <div className={classes.headerMobileWrap}>
      {matches
        ? (
          <>
            <div className={classes.headerMobile}>
              <Link to={PATH_INDEX} className={classes.link}><img src={headerLogo} className={classes.logo} alt="" /></Link>
              <div className={classes.menuBurger}>
                <button onClick={() => setIsSideBarOpen(true)}>
                  {MenuBurger}
                </button>
              </div>
            </div>
            {
              isSideBarOpen &&
              <Drawer
                className={classes.wrapSideBar}
                anchor='right'
                open={isSideBarOpen}
                onClose={() => setIsSideBarOpen(false)}>
                <div className={classes.closeIcon}>
                  <button onClick={() => setIsSideBarOpen(false)}>
                    {CloseMenuIcon}
                  </button>
                </div>
                <Header handleCloseDrawer={handleCloseDrawer} />
              </Drawer>
            }
          </>
        ) : <Header />
      }
    </div>
  );
};

export default HeaderWrapper;
