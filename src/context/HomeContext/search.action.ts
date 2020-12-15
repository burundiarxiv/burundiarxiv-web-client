import { Store } from './HomeContext';

export const searchActionHandler = ({
  searchTerm,
  datasets,
}: {
  searchTerm: string;
  datasets;
}): Store => {
  let relatedDatasets = datasets
    .map((dataset) => {
      const filteredData = dataset.data.filter(({ name }) => {
        return name
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(
            searchTerm
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
          );
      });

      return { category: dataset.category, data: filteredData };
    })
    // filter out datasets which has empty data
    .filter((dataset) => dataset.data.length);

  return {
    datasets: datasets,
    relatedDatasets: [...relatedDatasets],
    searchTerm,
  };
};
