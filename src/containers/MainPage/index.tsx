import React, { FC } from 'react';

import Container from '@components/Container';
import { Input } from '@mui/material';
import useStyles from './styles.module';
import Button from '@components/Button';

const headerLogo: string = require('@assets/logos/headerLogo.svg').default;


const MainPage: FC = () => {
  const { classes } = useStyles();

  return (
    <>
    <Container secondaryBg isFullScreen className={classes.container}>
        <div className={classes.grid}>
            <div className={classes.investContainer}>
                <img src={headerLogo} className={classes.logo} alt='logo' />
                <h1>
                Invest in the world's fastest <br/>interoperable blockchain.
                </h1>
                <div className={classes.investText}>
                  <div>Presale price: $0.10</div>
                  <div>Launch price: $0.50</div>
                  <div>Linearly vested over 15 months</div>
                  <div>Soft Cap: $2.5 million (25mil tokens)</div>
                  <div>Hard Cap: $5 million (50mil tokens)</div>
                  <div>Min: $100 per investor</div>
                  <div>Max: Unlimited</div>
                </div>
                <div className={classes.buttonWrap}>
                  <Button className={classes.button} type='secondary' size='medium'>
                    Website
                  </Button>
                  <Button className={classes.button} type='secondary' size='medium'>
                    Deck
                  </Button>
                </div>
            </div>

            <div className={classes.block}>
              <div className={classes.saleContainer}>
                <div className={classes.header}>Private Presale</div>
                  <div className={classes.body}>
                    <div className={classes.title}>Purchase price: $0.10</div>
                    <div>Balance 0.00</div>
                    <Input disabled placeholder='Enter amount in USDC' disableUnderline={true} fullWidth={true} />
                    <div className={classes.tokens}>
                      You will recieve ____ L1X tokens vested over 15 months
                    </div>
                    <Button type='secondary2' fullWidth>
                      <span className={classes.saleBtnText}>INVEST NOW</span>
                    </Button>
                  </div>
              </div>
              <div className={classes.totalRaised}>
                Total Raised: $1,291,990
              </div>
            </div>
        </div>
      </Container>
    </>
  );
};

export default MainPage;
