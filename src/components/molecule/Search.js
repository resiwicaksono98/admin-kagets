import React from 'react'

const Search = () => {
	return (
		<div className='pb-6'>
			<div className="field has-addons">
				<div className="control">
					<input className="input" type="text" placeholder="Search Here...." />
				</div>
				<div className="control">
					<a href='#' className="button is-info">
						Search
					</a>
				</div>
			</div>
		</div>
	)
}

export default Search