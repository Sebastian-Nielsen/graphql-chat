import React from "react";
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	useQuery,
	gql,
} from "@apollo/client";

 const client = new ApolloClient({
	uri: 'http://localhost:4000/',
	cache: new InMemoryCache()
});

 const GET_MESSAGES = gql`
 query {
	 messages {
		 id
		 content
		 user
	 }
}
 `;

const Chat = () => {

	return <div>
		I'm a chat window
	</div>
}

export default () => (
	<ApolloProvider client={client}>
		<Chat/>
	</ApolloProvider>
)