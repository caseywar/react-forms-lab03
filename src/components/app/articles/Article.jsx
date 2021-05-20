import React from 'react'
import PropTypes from 'prop-types'
import style from '../App.css'

const Article = ({ title, author, url, urlToImage }) => (
   <>
        <h1>{title}</h1>
        <p>{author}</p>
        <a href="{url}">{url}</a>
        <br></br>
        <img src={urlToImage} alt={title} />
   </>
)

Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
}

export default Article

