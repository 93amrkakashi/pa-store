import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";
import StoreSearch from "./pages/StoreSearch";
import Product from "./pages/Product";
import StartWrok from "./pages/StartWrok";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import BrowseJobs from "./pages/browsejobs/BrowseJobs";
import JobDetails from "./pages/jobDetails/JobDetails";
import Consultations from "./components/Consultations/Consultations";
import Booking from "./components/Booking/Booking";
import { HelmetProviderSeo } from "./components/HelmetContext";

function App() {
  return (
      <HelmetProviderSeo>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/store" element={<StoreSearch />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/start-work" element={<StartWrok />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/jobs" element={<BrowseJobs />} />
            <Route path="/jobs/:jobId" element={<JobDetails />} />
            <Route path="/consultations" element={<Consultations />} />
            <Route path="/booking" element={<Booking />} />
          </Route>
        
          {/* صفحة 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HelmetProviderSeo>
  );
}

export default App;
