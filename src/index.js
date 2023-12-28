// import React from "react";
// import ReactDOM from "react-dom";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import App from "./App"; // Your main application component
// import "./index.css";
// import rootReducer from "./store/reducers/meal";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: false,
//     },
//   },
// });
// const store = createStore(rootReducer);

// ReactDOM.render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </QueryClientProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import rootReducer from "./store/reducers/meal";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Create store with Redux Thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
