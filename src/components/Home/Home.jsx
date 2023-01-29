import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleModalAddTransaction } from 'redux/global/slice';
import { selectModalAddTransactionOpen } from 'redux/global/selectors';
import useMediaQuery from 'hooks/useMediaQuery/useMediaQuery';
import Balance from 'components/Balance/Balance';
import { HomeWrapper } from './Home.styled';
import { ButtonAddTransaction } from 'components/ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import { Table } from '../../components/Table/Table.jsx';

export default function Home() {
  const dispatch = useDispatch();
  const isModalTransactionOpen = useSelector(selectModalAddTransactionOpen);

  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <HomeWrapper>
      {isMobile && <Balance />}
      <Table />
      <ButtonAddTransaction
        onClick={() => dispatch(toggleModalAddTransaction())}
      />
      {isModalTransactionOpen && <ModalAddTransaction />}
    </HomeWrapper>
  );
}
