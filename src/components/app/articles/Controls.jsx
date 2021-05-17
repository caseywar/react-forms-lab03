import React from 'react'
import PropTypes from 'prop-types'

const Controls = ({ articleName, onArticleNameChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <label htmlFor="article-name">Article Name</label>
            <input 
                id="article-name"
                type="text"
                value={articleName}
                onChange={onArticleNameChange}
            />
        <button aria-label="find-quotes">Submit</button>
    </form>
)


Controls.propTypes = {
    articleName: PropTypes.string.isRequired,
    onArticleNameChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default Controls

