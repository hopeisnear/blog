import React from 'react';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon
} from 'react-share';

import './ShareArticle.scss';

export default function ShareArticle() {
  const articleUrl = `${window.location.origin}${window.location.pathname}${window.location.hash}`;

  return (
    <div className="ShareArticle">
      <h2 className="share-article__title">Share</h2>
      <ul className="share-article__list">
        <li className="share-article__item" title="Share on Facebook">
          <FacebookShareButton url={articleUrl}>
            <FacebookIcon size={40} />
          </FacebookShareButton>
        </li>
        <li>
          <div
            className="fb-share-button"
            data-href="https://ec2-18-184-79-160.eu-central-1.compute.amazonaws.com:3000/how-to-approach-machine-learning-problems"
            data-layout="button"
            data-size="small"
            data-mobile-iframe="true"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fec2-18-184-79-160.eu-central-1.compute.amazonaws.com%3A3000%2Fhow-to-approach-machine-learning-problems&amp;src=sdkpreparse"
              className="fb-xfbml-parse-ignore"
            >
              Share
            </a>
          </div>
        </li>
        <li className="share-article__item" title="Share on Google+">
          <GooglePlusShareButton url={articleUrl}>
            <GooglePlusIcon size={40} />
          </GooglePlusShareButton>
        </li>
        <li className="share-article__item" title="Share on LinkedIn">
          <LinkedinShareButton url={articleUrl}>
            <LinkedinIcon size={40} />
          </LinkedinShareButton>
        </li>
        <li className="share-article__item" title="Share on Twitter">
          <TwitterShareButton url={articleUrl}>
            <TwitterIcon size={40} />
          </TwitterShareButton>
        </li>
        <li className="share-article__item" title="Share on Reddit">
          <RedditShareButton url={articleUrl}>
            <RedditIcon size={40} />
          </RedditShareButton>
        </li>
        <li className="share-article__item" title="Share via Email">
          <EmailShareButton url={articleUrl}>
            <EmailIcon size={40} />
          </EmailShareButton>
        </li>
      </ul>
    </div>
  );
}
