import Context from './Context';

const AppliedFilters = ({ filters, tree, t }) => {
  // we need to group any filters that
  // are part of the same parent

  return (
    <ul className="applied-filters">
      {filters.map((filter) => {
        return (
          <li className="applied-filter-item">
            <a className="applied-filter-item-content">
              <span className="applied-filter-item-filters">
                {t(filter.legacyKey)}
              </span>
            </a>
            <a className="applied-filter-item-remove"></a>
          </li>
        );
      })}
    </ul>
  );
};

export default Context(AppliedFilters);
