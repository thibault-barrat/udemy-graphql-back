import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLFloat,
} from 'graphql';
import { Product } from '../models/product';

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    filter: { type: GraphQLString },
    price: { type: GraphQLFloat },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return 'Hello GraphQL!';
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find();
      }
    },
    productsByCategory: {
      type: new GraphQLList(ProductType),
      args: {
        category: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Product.find({ category: args.category });
      }
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});