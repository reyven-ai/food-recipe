import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App"; // Your main application component
import "./index.css";
import rootReducer from "./store/reducers/meal";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const store = createStore(rootReducer);

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
// import React from "react";
// import ReactDOM from "react-dom";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

// import "./index.css";
// import App from "./App";
// import rootReducer from "./store/reducers/movie"; // Import your Redux root reducer

// // Create a Redux store
// const store = createStore(rootReducer);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     {/* Wrap your App component with Provider to provide access to the Redux store */}
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
// import React from "react";
// import ReactDOM from "react-dom/client";

// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
