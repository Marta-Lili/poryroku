import "./SeasonDisplay.css";
const seasonConfig ={
    lato: {
        text: "Lecimy na plażę",
        icon: "sun"
    },
    zima: {
        text: "Brr ale zimno",
        icon: "snowflake"
    }
}

const getSeason = (lat, month) => {
if(month>2 && month<9) {
    return lat > 0 ? "lato" : "zima";
}else {
    return lat > 0 ? "zima" : "lato";
}
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, icon} = seasonConfig[season];

    return (
    <div className={`season ${season}`}>
        <i className={`massive ${icon} icon icon-left`}></i>
        <h1>
        {text}
        </h1>
        <i className={`massive ${icon} icon icon-right`}></i>

    </div>
    );
}

export default SeasonDisplay;
