import marked from 'marked';
import Context from './Context';

const HelpMenu = ({ t }) => {
  let instructions = `<p>${t('menus.help.instructions[0]')}</p>
    <p>${t('menus.help.instructions[2]')}</p>
    <p>${t('menus.help.instructions[4]')}</p>`;
  return (
    <div
      className="help-menu"
      dangerouslySetInnerHTML={{ __html: marked(instructions) }}
    ></div>
  );
};

export default Context(HelpMenu);
