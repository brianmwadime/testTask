import React, { useMemo } from 'react';

import { getTokenForSymbol } from '@utils/logo.utils';

type LogoProps = {
  symbol: string;
  size?: number;
  className?: string
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, className, size = 100 }) => {
  const logo = useMemo(() => getTokenForSymbol(symbol), [symbol]);
  return <img src={logo} alt={`${symbol} Logo`} height={size} className={className} />;
};

export default React.memo(TokenSymbol);
