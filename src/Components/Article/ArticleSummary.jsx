import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ArticleSummary.css'

const ArticleSummary = ({ results }) => {

    const [headlines, setHeadlines] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (!id) return setHeadlines({});
        const selected = results?.find(current => current.id.split("/").pop() === id);
        if (selected) return setHeadlines(selected);
    }, [id, results]);

    return (
        <>
            <div className='container-div'>
                <img src={headlines?.fields?.thumbnail} alt={headlines?.fields?.thumbnail} />
            </div>
            <div>
                <a href={headlines?.webUrl}>
                    <h1>{headlines?.webTitle}</h1>
                </a>
            </div>
            <br />
            <div className='articlesText'>
                {headlines?.fields?.bodyText}
            </div>
        </>
    )

}

export default ArticleSummary;