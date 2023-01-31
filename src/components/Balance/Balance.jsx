import { useSelector } from 'react-redux';
import { getBalance } from 'redux/auth/selectors';
import { BalanceWrapper, Desc, BalanceStatus } from './Balance.styled';

export default function Balance() {
  const balance = useSelector(getBalance);
  return (
    <BalanceWrapper>
      <Desc>Your balance</Desc>
      <BalanceStatus>₴ {balance}</BalanceStatus>
    </BalanceWrapper>
  );
}