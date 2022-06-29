import Style from '../../Styles/demos.module.scss';

export default function SpotifyPlayer () {
    return (
        <>
            <iframe className={Style.player} 
                src="https://open.spotify.com/embed/playlist/4P4HlaeexxFDCJtUtZpCmb?utm_source=generator" 
                width="100%" 
                height="550" 
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
        </>
    )
}