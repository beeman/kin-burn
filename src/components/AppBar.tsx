import { FC } from 'react';

import Logo from '../assets/svg/kin.svg';

export const AppBar: FC = (props) => {
  return (
    <div className={'my-12'}>
      <div className={'flex justify-center'}>
        <Logo className="h-12 block" />
      </div>
      {props.children}
    </div>
  );
};
