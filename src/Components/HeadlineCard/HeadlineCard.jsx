import { NavLink } from "react-router-dom"
import './HeadlineCard.css'

const HeadlineCard = ({ _id, title, imgSrc, alt }) => {
    return (
        <div className="box">
            <NavLink to={`/${_id}`}>
                <br />
                <img src={imgSrc} alt={alt} />
                <h1>{title}</h1>
            </NavLink>
        </div>
    )
}

export default HeadlineCard;