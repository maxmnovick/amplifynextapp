// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ProductDetails } = initSchema(schema);

export {
  ProductDetails
};