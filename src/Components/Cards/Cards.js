/** @format */

import React from "react";
import text from "./text";
import { CARD_WRAPPER_DIV } from "./classes";
const Card = () => {
	console.log(text, "i m text");

	return (
		<div className={CARD_WRAPPER_DIV}>
			{text?.map((item, index) => {
				return (
					<div
						className='m-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-white dark:border-gray'
						key={item?.id}>
						<img className='object-center' src={item?.image} alt='' />

						<p className='mt-3 font-normal text-gray-500 dark:text-gray-400'>
							{item?.paragraph}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
