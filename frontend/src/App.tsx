import { Refine } from "@refinedev/core"
import { RefineKbarProvider } from "@refinedev/kbar"
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
} from "react-router-dom"
import { ConfigProvider } from "antd"
import { CustomLayout } from "./components/CustomLayout"
import { CheckoutList } from "./pages/checkout/CheckoutList"
import { CheckoutCreate } from "./pages/checkout/CheckoutCreate"
import { CheckoutEdit } from "./pages/checkout/CheckoutEdit"
import { CheckoutShow } from "./pages/checkout/CheckoutShow"

import dataProvider from "@refinedev/simple-rest"
import axios from "axios"
import { DemoFormServerSideValidation } from "./pages/demo-form-server-side-validation"

const httpClient = axios.create()

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ConfigProvider>
          <Refine
            dataProvider={dataProvider(
              "http://localhost:3000",
              httpClient,
            )}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
            resources={[
              {
                name: "checkout",
                list: "/checkout",
                create: "/checkout/create",
                edit: "/checkout/edit/:id",
                show: "/checkout/show/:id",
              },
            ]}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <CustomLayout>
                    <Outlet />
                  </CustomLayout>
                }
              >
                <Route
                  index
                  element={
                    <DemoFormServerSideValidation />
                  }
                />
                <Route
                  path="/checkout"
                  element={<CheckoutList />}
                />
                <Route
                  path="/checkout/create"
                  element={<CheckoutCreate />}
                />
                <Route
                  path="/checkout/edit/:id"
                  element={<CheckoutEdit />}
                />
                <Route
                  path="/checkout/show/:id"
                  element={<CheckoutShow />}
                />
              </Route>
            </Routes>
          </Refine>
        </ConfigProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  )
}

export default App
