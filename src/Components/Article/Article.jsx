import { NavLink } from "react-router-dom"

const Article = ({ _id, title, imgSrc }) => {

    return (
        <>
            <NavLink to={`/${_id}`}>
                <img src={imgSrc} alt="article img" />
                <h1>{title}</h1>
            </NavLink>
        </>
    )
}

export default Article;