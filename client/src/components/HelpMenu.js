import marked from 'marked';
import Context from './Context';

const HelpMenu = ({ t }) => {
  const html = marked(t('menus.help.instructions'));
  return (
    <div className="help-menu" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
};

export default Context(HelpMenu);
