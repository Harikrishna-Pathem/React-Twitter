function Tweet({setTab}){
    return <>
        <button onClick={()=> setTab("tweet")} className="tweet">Tweet</button>
    </>
}

export default Tweet;