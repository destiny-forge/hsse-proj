import Context from './Context';
import LayerToggle from './LayerToggle';

const SearchTips = ({ filters, t, onShowMenu, overlayContent }) => {
  const renderFilterCount = () => {
    const count = filters.length || 0;
    return count > 0 ? <span className="filter-count">{count}</span> : null;
  };
  const handleClickFiltersButton = (args) => {
    onShowMenu.apply(...args);
  };

  return (
    <div className="search-tips">
      <div className="layer-toggles clearfix">
        <LayerToggle menu="help" onToggle={onShowMenu}>
          {t('search_page.search_box.tips')}
        </LayerToggle>
        <LayerToggle
          menu="filterGroups"
          context={{
            filters: filters,
            onShowFilterGroup: onShowMenu,
            overlayContent: overlayContent,
          }}
          onToggle={handleClickFiltersButton}
        >
          {t('search_page.search_box.filters')}
          {renderFilterCount()}
        </LayerToggle>
      </div>
    </div>
  );
};

export default Context(SearchTips);
