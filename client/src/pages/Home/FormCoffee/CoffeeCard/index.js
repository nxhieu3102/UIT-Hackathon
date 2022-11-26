const CoffeeCard = ({ coffeeInfor }) => {
    const name = coffeeInfor["name"]
    const address = coffeeInfor["address"]
    return (
        <div className="container">
            <div className="info">
                <h1>Article News Card</h1><span>Made with <i className="fa fa-heart animated infinite pulse" /> by <a href="http://andy.design">Andy Tran</a> | Designed by <a href="http://justinkwak.com">JustinKwak</a></span>
            </div>
            {/* Normal Demo*/}
            <div className="column">
                <div className="demo-title">Normal</div>
                {/* Post*/}
                <div className="post-module">
                    {/* Thumbnail*/}
                    <div className="thumbnail">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" alt="none"/>
                    </div>
                    {/* Post Content*/}
                    <div className="post-content">
                        <h1 className="title">{address}</h1>
                        <h2 className="sub_title">The city that never sleeps.</h2>
                        <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                        <div className="post-meta"><span className="timestamp"><i className="fa fa-clock-">o</i>
                            6 mins ago</span><span className="comments"><i className="fa fa-comments" /><a href="#">39 comments</a></span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoffeeCard;