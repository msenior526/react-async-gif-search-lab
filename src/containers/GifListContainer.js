import React, {Component} from "react";
import GifList from '../components/GifList';
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
    state = {
        gifs: []
    }

    fetchGifs = (query = 'dolphins') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=jo17CPXMJ1GP3o4AyHntnLejsvrA6znL&rating=g`)
        .then(resp => resp.json())
        .then(gifData => {
            let gifURLs = gifData.data.map(gif => {
                return gif.images.original.url;
            })

            this.setState({
                gifs: gifURLs.slice(0, 5)
            }, () => console.log(this.state))
        })
    }

    componentDidMount() {
        this.fetchGifs();
    }

    searchQuery = (a) => {
        this.fetchGifs(a);
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch submitHandler={this.searchQuery}/>
            </div>
        )
    }
}

export default GifListContainer;