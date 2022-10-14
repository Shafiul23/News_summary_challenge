import HeadlineCard from "./HeadlineCard";

const Headlines = ({ results }) => {

    const getResults = () => {
        const headlineCards = results.map(headline => {
            const { id, webTitle, fields } = headline;
            const _id = id.split("/").pop();
            return <HeadlineCard key={id} _id={_id} title={webTitle} imgSrc={fields.thumbnail} />
        })
        return headlineCards;
    }

    return (
        <>
            <main className="flex-shrink-0">
                <div className="container">
                    <section className="row">
                        {getResults()}
                    </section>
                </div>
            </main>
        </>
    );
}

export default Headlines;
