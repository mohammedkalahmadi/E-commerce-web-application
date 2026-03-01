import { createBrowserRouter, Outlet } from "react-router";
import { StoreProvider } from "./context/StoreContext";
import Splash1 from "./pages/Splash1";
import Splash2 from "./pages/Splash2";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";
import Search from "./pages/Search";
import Filter from "./pages/Filter";
import AddCard from "./pages/AddCard";
import PersonalInfo from "./pages/PersonalInfo";
import Orders from "./pages/Orders";
import PaymentMethods from "./pages/PaymentMethods";

// Root component that wraps everything with providers
function RootLayout() {
  return (
    <StoreProvider>
      <Outlet />
    </StoreProvider>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        Component: Splash1,
      },
      {
        path: "/splash2",
        Component: Splash2,
      },
      {
        path: "/onboarding1",
        Component: Onboarding1,
      },
      {
        path: "/onboarding2",
        Component: Onboarding2,
      },
      {
        path: "/onboarding3",
        Component: Onboarding3,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/product/:id",
        Component: Product,
      },
      {
        path: "/favorites",
        Component: Favorites,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/payment",
        Component: Payment,
      },
      {
        path: "/search",
        Component: Search,
      },
      {
        path: "/filter",
        Component: Filter,
      },
      {
        path: "/addcard",
        Component: AddCard,
      },
      {
        path: "/personalinfo",
        Component: PersonalInfo,
      },
      {
        path: "/orders",
        Component: Orders,
      },
      {
        path: "/paymentmethods",
        Component: PaymentMethods,
      },
    ],
  },
]);