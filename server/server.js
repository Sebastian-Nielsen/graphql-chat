import { createSchema, } from 'graphql-yoga';
import { createServer, } from 'node:http';
import {createYoga} from 'graphql-yoga';

export {}

const messages = []

const schema = createSchema({
	typeDefs: `
	type Message {
		id: ID!
		user: String!
		content: String!
	}
	
	type Query {
		messages: [Message!]
	}

	type Mutation {
		postMessage(user: String!, content: String!): ID!
	}
	`,
	resolvers: {
		Query: {
			messages: () => messages,
		},
		Mutation: {
			postMessage: (parent, {user, content}) => {
				const id = messages.length;
				messages.push({
					id,
					user,
					content
				});
				return id;
			}
		}
	}
})


const yoga = createYoga({ schema })
const server = createServer(yoga);
server.listen(4000, () => {
	console.info('Server is running on http://localhost:4000/graphql')
})
