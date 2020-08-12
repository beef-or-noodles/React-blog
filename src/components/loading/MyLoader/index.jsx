import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={5}
        width={694}
        height={190}
        viewBox="0 0 694 190"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="1" y="10" rx="4" ry="4" width="694" height="13" />
        <rect x="1" y="29" rx="4" ry="4" width="227" height="13" />
        <rect x="2" y="49" rx="6" ry="6" width="116" height="91" />
        <rect x="133" y="49" rx="4" ry="4" width="488" height="10" />
        <rect x="133" y="69" rx="4" ry="4" width="488" height="11" />
        <rect x="133" y="89" rx="4" ry="4" width="407" height="9" />
        <rect x="133" y="109" rx="4" ry="4" width="407" height="9" />
        <rect x="133" y="129" rx="4" ry="4" width="407" height="9" />
        <rect x="1" y="149" rx="4" ry="4" width="694" height="13" />
    </ContentLoader>
)

export default MyLoader