import Trend from "./Trend";

function Trends() {
  const trends = [
    {
      prehead: "trending in India",
      head: "#IPLShedule",
      posthead: "10k tweets",
    },
    {
      prehead: "trending worldwide",
      head: "#IndianElections",
      posthead: "100M tweets",
    },
    {
      prehead: "trending in AP",
      head: "#APElections",
      posthead: "1045 tweets",
    },
    {
      prehead: "trending in India",
      head: "#ShamiGotIngured",
      posthead: "12k tweets",
    },
  ];

  return (
    <>
      <div className="trendbox">
        <div className="trend-head">
          <h5>Trending for you</h5>
          <hr />
          <div className="trends">
            {trends.map((tweet) => (
              <Trend
                pre={tweet.prehead}
                head={tweet.head}
                post={tweet.posthead}
              ></Trend>
            ))}
          </div>
          <a href="#">Show More</a>
        </div>
      </div>
    </>
  );
}

export default Trends;
