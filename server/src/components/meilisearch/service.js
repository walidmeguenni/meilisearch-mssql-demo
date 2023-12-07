import { Attributes } from "./catogries.js";
import meiliSearchClient from "./meiliSearchClient.js";

export const meilisearch = async (args, categories) => {
  try {
    let selectedAttributes = [];
    let result = [];
    if (categories.length === 0) {
      result = await meiliSearchClient.index("Adhoc").search(args);
    } else {
      categories.forEach((element) => {
        selectedAttributes = [...selectedAttributes, ...Attributes[element]];
      });
      result = await meiliSearchClient.index("Adhoc").search(args, {
        attributesToRetrieve: selectedAttributes,
      });
    }
    // console.log("result", result)
    return result.hits;
  } catch (error) {
    console.log(error);
  }
};
   // const result = await meiliSearchClient.index('Adhoc').search(args,{
    //   attributesToRetrieve: selectedAttributes,
    // attributesToHighlight: ['id', 'SequenceNumber', 'Type', 'Priority'],
    // attributesToCrop: ['title', 'description', 'category', 'price'],
    // cropLength: 30,
    // filters: 'category = ' + args.category,
    // limit: 10,
    // offset: 0,
    // matches: true,
    // facetFilters: ['category'],
    // facetDistribution: true,
    // attributesToRetrieve: ['title', 'description', 'category', 'price'],
    // attributesToSnippet: ['title:10', 'description:10', 'category:10', 'price:10'],
    //})