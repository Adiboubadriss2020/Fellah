import './chart.scss'
import { AreaChart,Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  {mois:"Janvier",moment:1200},
  {mois:"Fevrier", moment:1777},
  {mois:"Mars",moment:2000},
  {mois:"Avril", moment:1500},
  {mois:"Mai",moment:700},
  {mois:"Juin", moment:857},
];

const Chart = ({aspect, title}) => {
  
  return (
    <div className='chart'>
<div className="title">{title}</div>
<ResponsiveContainer width="100%" aspect={aspect}>
<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="green" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="green" stopOpacity={0}/>
    </linearGradient>
 
  </defs>
  <XAxis dataKey="mois" color='gray'/>
  <CartesianGrid strokeDasharray="3 3" className='chartgrid'/>
  <Tooltip />
  <Area type="monotone" dataKey="moment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
</AreaChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Chart