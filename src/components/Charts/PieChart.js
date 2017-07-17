import React from 'react';
import {scaleOrdinal} from 'd3-scale';
import {arc, pie} from 'd3-shape';


const width = 900;
const height = 900;
const radius = Math.min(width, height - 50) / 2;

const dataArc = arc() 
	.outerRadius(radius)
	.innerRadius(radius-100)

const labelArc = arc()
	.outerRadius(radius-120)
	.innerRadius(radius-140)

const pieChart = pie()
	.sort(null)
	.value(d=>d.arrest_count)

let color = null;
const colorFn = (currentTeam) => {
	color = scaleOrdinal()
		.range(currentTeam.colorScheme)
}

const PieChart = ({data, currentTeam}) => {

	colorFn(currentTeam);
	return (
		<svg
			id="crimeChart"
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
		>
			<g transform={`translate(${width / 2}, ${height/2})`}>
				{pieChart(data).map((d,i)=> {
					const midAngle = d.endAngle < Math.PI ? d.startAngle/2 + d.endAngle/2 : d.startAngle/2 + d.endAngle/2 + Math.PI;
					return (
						<g key={i} className='arc'>
							<path d={dataArc(d)} fill={color(d.data.Category)} />
							<text 
								dy=".35em" 
								dx="-.9em" 
								transform={
									`translate(
										${labelArc.centroid(d)[0]}, 
										${labelArc.centroid(d)[1]}
									)
									rotate(-90)
									rotate(${midAngle * 60})`
								}>
								{d.data.Category}
							</text>
						</g>
					)}
				)}
			</g>
		</svg>
	)
}

export default PieChart


///////////////////////////////////////////
