import { Store } from 'context';
// import { datasets } from 'mock/datasets';

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
        return name.toLowerCase().includes(searchTerm.toLowerCase());
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
