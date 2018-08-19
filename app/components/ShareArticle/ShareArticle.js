import React from 'react';
import {
  EmailShareButton,
  EmailIcon
} from 'react-share';

import './ShareArticle.scss';

export default function ShareArticle() {
  return (
    <div>
      QWERT
      <EmailShareButton>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
}
