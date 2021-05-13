import React from 'react'
import PropTypes from 'prop-types'

const Article = ({ title, author, url, urlToImage }) => (
   <>
        <h1>{title}</h1>
        <p>{author}</p>
        <a href="{url}">{url}</a>
        <p>{urlToImage}</p>
   </>
)

Controls.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
}

export default Article

