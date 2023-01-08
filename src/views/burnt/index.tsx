import { BurnSummary, getSummary } from '@kin-tools/kin-burn';
import { Connection } from '@solana/web3.js';
import { FC, useEffect, useState } from 'react';

const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_HOST);
const mint = process.env.NEXT_PUBLIC_MINT_ADDRESS;

export const BurntView: FC = () => {
  const [summary, setSummary] = useState<BurnSummary | null>(null);

  useEffect(() => {
    if (summary) return;
    getSummary({ connection, mint }).then((res) => setSummary(res));
  }, [summary, setSummary]);

  return (
    <div className="h-full flex flex-col justify-center ">
      <div className="md:hero mx-auto p-4">
        <div className="md:hero-content flex flex-col space-y-12">
          {summary ? (
            <>
              <h1 className="text-center text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
                Max Supply
              </h1>
              <h2 className="text-center text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
                {summary.max} KIN
              </h2>
              <h1 className="text-center text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
                Total Supply
              </h1>
              <h2 className="text-center text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
                {summary.total} KIN
              </h2>
              <h1 className="text-center text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
                🔥 Burnt 🔥
              </h1>
              <h2 className="text-center text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
                {summary?.burnt ? `${summary.burnt} KIN` : ''}
              </h2>
              <h2 className="text-center text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
                {summary?.percentage ? `${summary.percentage}%` : ''}
              </h2>
            </>
          ) : (
            <h1 className="text-center text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-[#4C1D95] to-[#E879F9]">
              🔥 Loading... 🔥
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};
