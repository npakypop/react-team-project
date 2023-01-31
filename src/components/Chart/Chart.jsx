import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getUserBalance } from 'redux/auth/selectors';
import { Balance, DoughnutWrap, Title } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ chartData }) {
  const userBalance = useSelector(getUserBalance);

  return (
    <div>
      <Title>Statistics</Title>
      <Balance>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(userBalance)}
      </Balance>
      <DoughnutWrap>
        <Doughnut data={chartData} />
      </DoughnutWrap>
    </div>
  );
}