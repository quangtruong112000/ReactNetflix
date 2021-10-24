import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option>Adventure</option>
                        <option>Comedy</option>
                        <option>Crime</option>
                        <option>Fantasy</option>
                        <option>Historical</option>
                        <option>Horor</option>
                        <option>Romance</option>
                        <option>Sci-fi</option>
                        <option>Thriller</option>
                        <option>Western</option>
                        <option>Animation</option>
                        <option>Drama</option>
                        <option>Documentary</option>
                        
                    </select>
                </div>
            )}
            <img src="https://images.unsplash.com/photo-1634979063892-48d70c885d43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
            <div className="info">
                <img src="https://images.unsplash.com/photo-1619536094780-8ada69185614?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="" />
                <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus iusto sunt vel maxime beatae sit sed eum officia ut ratione, commodi molestiae, aut odit excepturi consectetur veniam dolor qui cum!</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
