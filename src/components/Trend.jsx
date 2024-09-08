function Trend({pre, head, post}){
    return<>
        <div className="trend">
            <p className="pre">{pre}</p>
            <h6 className="head">{head}</h6>
            <p className="re-tweets">{post}</p>
        </div>
    </>
}

export default Trend;