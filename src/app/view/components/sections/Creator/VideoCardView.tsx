import { useState } from "react";
import type { CreatorVideo } from "../../../../model/siteModel";
import CardView from "../../ui/Card/CardView";
import { toYouTubeEmbedUrl } from "../../../utils/youtube";

type Props = {
  video: CreatorVideo;
};

export default function VideoCardView({ video }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = () => setIsLoaded(true);

  return (
    <CardView
      title={video.title}
      subtitle={video.desc}
      headerRight={
        <a href={video.url} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${video.title} on YouTube (opens in a new tab)`}>
          Watch
        </a>
      }
    >
      <div className="video-box">
        {!isLoaded ? (
          <button className="video-cover" onClick={onLoad} type="button">
            <span className="video-play" aria-hidden="true">
              ▶
            </span>
            <span className="video-cover-text">Load video</span>
          </button>
        ) : (
          <iframe
            className="video-iframe"
            src={toYouTubeEmbedUrl(video.id)}
            title={video.title}
            loading="lazy"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>
    </CardView>
  );
}
