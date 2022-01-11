import React from 'react';
import './Skeleton.css';

const TableSkeleton = () => (
	<table width='100%' className='tableSk'>
		<tr>
			<th className='col1'>
				<span></span>
			</th>
			<th className='col4'>
				<span></span>
			</th>
			<th className='col5'>
				<span></span>
			</th>
		</tr>
		<tr>
			<td className='col1'>
				<span></span>
			</td>
			<td className='col4'>
				<span></span>
				<span className='sub-temp'></span>
				<span className='sub-temp sub-temp-three'></span>
			</td>
			<td className='col5'>
				<span></span>
			</td>
		</tr>
		<tr>
			<td className='col1'>
				<span></span>
			</td>
			<td className='col4'>
				<span></span>
				<span className='sub-temp'></span>
				<span className='sub-temp sub-temp-three'></span>
			</td>
			<td className='col5'>
				<span></span>
			</td>
		</tr>
		<tr>
			<td className='col1'>
				<span></span>
			</td>
			<td className='col4'>
				<span></span>
				<span className='sub-temp'></span>
				<span className='sub-temp sub-temp-three'></span>
			</td>
			<td className='col5'>
				<span></span>
			</td>
		</tr>
		<tr>
			<td className='col1'>
				<span></span>
			</td>
			<td className='col4'>
				<span></span>
				<span className='sub-temp'></span>
				<span className='sub-temp sub-temp-three'></span>
			</td>
			<td className='col5'>
				<span></span>
			</td>
		</tr>
	</table>
);

const SelectionSkeleton = () => (
	<div className='selectionSk'>
		{Array(2).fill(
			<div className='selectionSkCard'>
				<div className='selectionSkTitle'>
					<div className='selectionSkImg'></div>
					<span className='sub-temp sub-temp-three'></span>
				</div>
			</div>
		)}
	</div>
);

const Skeleton = ({ type }) => {
	if (type === 'table') return <TableSkeleton />;
	if (type === 'selection') return <SelectionSkeleton />;
};

export default Skeleton;
