// src/components/MyChart.jsx
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const MyChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{
      label: 'Sales',
      data: [30, 45, 60],
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'blue',
      tension: 0.4
    }]
  };

  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <Line data={data} />
    </div>
  );
};

export default MyChart;
