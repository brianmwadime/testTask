import React, { FC, useMemo } from 'react';
import { Avatar, AvatarGroup } from '@mui/material';
import classNames from 'classnames';

import { getTokenForSymbol } from '@utils/logo.utils';

import { TOKEN_TYPE } from '@constants/tokens.constants';

import useStyles from './styles.module';

interface Props {
  className?: string,
  token: string
  tokenType: TOKEN_TYPE
}

const TokenAvatar: FC<Props> = ({ token, tokenType, className }) => {
  const { classes } = useStyles();

  const tokenSymbol = useMemo(() => {

    if (tokenType === TOKEN_TYPE.LP || tokenType === TOKEN_TYPE.STABLE_LP) {
      if (!token) return ['', ''];
      try {
        token.split('/');

      } catch (error) {
        console.error(token, tokenType);
      }
      return token.split('/');
    }
    return [token];
  }, [token, tokenType]);


  return (
    <>
      {
        (tokenType === TOKEN_TYPE.LP || tokenType === TOKEN_TYPE.STABLE_LP)
          ? (
            <AvatarGroup max={2}>
              <Avatar src={getTokenForSymbol(tokenSymbol[0])} className={classNames({ [classes.avatar]: !className }, className)} />
              <Avatar src={getTokenForSymbol(tokenSymbol[1])} className={classNames({ [classes.avatar]: !className }, className)} />
            </AvatarGroup>
          )
          : (
            <Avatar src={getTokenForSymbol(tokenSymbol[0])} className={classNames({ [classes.avatar]: !className }, className)} />
          )
      }
    </>
  );
};

export default TokenAvatar;
