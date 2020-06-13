/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { useStore } from '../lib/redux';
import { useApollo } from '../lib/apollo';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}
