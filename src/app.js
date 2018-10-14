import app from '@ronniefcodes/portfolio-react/build/app';

import './styles/app.scss';
import content from './data/content';
import theme from './data/theme';

(() => {
  app.render({
    content,
    theme,
  });
})();
