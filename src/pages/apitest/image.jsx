import React from 'react'
import PropTypes from 'prop-types'

function ImageComponent({ src, className }) {
    return (
        <React.Fragment>
            <div>
                <img className={`h-auto max-w-full rounded-lg ${className}`} src={src} alt="" />
            </div>
        </React.Fragment>
    )
}

// props validation
ImageComponent.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default ImageComponent;