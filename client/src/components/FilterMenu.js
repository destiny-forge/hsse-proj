import { useState, useEffect, Fragment } from 'react';
import Context from './Context';
import AppliedFilters from './AppliedFilters';
import { hse, sse } from '../data';

const Menus = ({ t, tree, parent, filter }) => {
  if (!tree) return null;
  console.log(tree);
  return Object.keys(tree).map((key) => <Menu menu={tree[key]} t={t} />);
};

const Menu = ({ menu, t }) => {
  return (
    <Fragment>
      <h2>{menu.title}</h2>
      <ul className="menu-list">
        {menu.items.map((item, i) => {
          let className = 'menu-item';
          return (
            <li className={className} key={`filter-group-${i}`}>
              <a className="layer-toggle layer-toggle-filters menu-item-text">
                {t(`filters.${item.legacyKey}`)}
              </a>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
  //return sections.map((section) => <Section section={section} t={t} />);
};

const MenuItems = ({ menu, t }) => {
  return (
    <Fragment>
      <h2>{t(`/filters.${menu.id}`)}</h2>
      <ul className="menu-list">
        <MenuItem menu={menu} />
      </ul>
    </Fragment>
  );
};

const MenuItem = ({ menu }) => {
  const hasApplied = (filter) => {
    return true;
  };
  return menu.filters.map((filter, i) => {
    let className = 'menu-item';
    if (hasApplied(filter)) {
      className += ' filter-applied';
    }
    className += ` filter-group-${filter.type.replace('_', '-')}`;
    return <li className={className} key={`filter-group-${i}`}></li>;
  });
};

const flatten = (tree, t) => {
  let flattened = [];
  tree.forEach((item) => {
    item.title = t(item.legacyKey);
    flattened.push(item);
    if (item.hasOwnProperty('children')) {
      flattened = flattened.concat(flatten(item.children));
    }
  });
  return flattened;
};

const transform = (tree, t) => {
  for (const key of Object.keys(tree)) {
    for (const item of tree[key]) {
    }
  }

  let transformed = flatten(tree, t);
};

const FilterMenu = ({ site, language, t, filters, onRemove, onShow }) => {
  const [applied, setApplied] = useState(filters);
  const [tree, setTree] = useState();
  const [lookup, setLookup] = useState();
  const [parent, setParent] = useState('');

  useEffect(() => {
    initData();
  }, [site]);

  const initData = () => {
    let tree_data = {};
    switch (site) {
      case 'hse':
        tree_data = hse.tree;
        break;
      case 'sse':
        tree_data = sse.tree;
        break;
      case 'cvd':
        tree_data = {};
        break;
    }

    setTree(tree_data);
    //let transformed = transform(tree);
    //setLookup(translated);
  };

  return (
    <div className="filter-groups-menu-wrapper">
      <div className="filter-groups-menu-title">
        <span>{t('menus.filter_groups.title')}</span>
      </div>
      <div className="filter-groups-menu nested-menu">
        <AppliedFilters
          tree={tree}
          filters={applied}
          onRemove={onRemove}
          onShow={onShow}
        />
        <Menus tree={tree} parent={parent} filters={applied} t={t} />
      </div>
    </div>
  );
};

export default Context(FilterMenu);
