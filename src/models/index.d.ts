import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ProductDetailsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ProductDetails {
  readonly id: string;
  readonly CollectionName?: string | null;
  readonly Type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProductDetails, ProductDetailsMetaData>);
  static copyOf(source: ProductDetails, mutator: (draft: MutableModel<ProductDetails, ProductDetailsMetaData>) => MutableModel<ProductDetails, ProductDetailsMetaData> | void): ProductDetails;
}