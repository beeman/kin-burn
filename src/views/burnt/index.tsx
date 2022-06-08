import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { FC, useEffect, useState } from 'react';
import { KIN_MINT_MAINNET } from '../../constants';

export const BurntView: FC = () => {
  const connection = new Connection(clusterApiUrl('mainnet-beta'));
  const max = 10_000_000_000_000;
  const [total, setTotal] = useState<any>();
  const burnt = max - total;
  const burntPercentage = ((burnt * 100) / max).toFixed(8);

  useEffect(() => {
    if (total) return;
    connection
      .getTokenSupply(new PublicKey(KIN_MINT_MAINNET))
      .then((res) => setTotal(res.value.uiAmount));
  }, [total, setTotal, connection]);

  return (
    <div className="h-full flex flex-col justify-center ">
      <div className="md:hero mx-auto p-4">
        <div className="md:hero-content flex flex-col space-y-12">
          <h1 className="text-center text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
            Max Supply
          </h1>
          <h2 className="text-center text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
            {max} KIN
          </h2>
          <h1 className="text-center text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
            Total Supply
          </h1>
          <h2 className="text-center text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
            {total} KIN
          </h2>
          <h1 className="text-center text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
            🔥 Burnt 🔥
          </h1>
          <h2 className="text-center text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
            {burnt ? `${burnt} KIN` : ''}
          </h2>
          <h2 className="text-center text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
            {burnt ? `${burntPercentage}%` : ''}
          </h2>
        </div>
      </div>
    </div>
  );
};
