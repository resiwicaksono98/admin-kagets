import { Accoordion, NavBrand } from "./components/molecule";
import Routing from "./Config/Routing";

function App() {
  return (
    <div className="grid grid-cols-5 gap-3">
      <div className=" col-span-1 bg-blue-50">
        <div>
          {/* Nav Brand */}
          <NavBrand />
        </div>
        <div>
          {/* Accordion */}
          <Accoordion mainTitle={'Dashboad'} to={'/'} />
          <Accoordion mainTitle={'News'} to={'/news'} subTitle={[
            { name: 'Manage', to: '/news/manage' },
            { name: 'History', to: '/news/history' },
          ]} />
          <Accoordion mainTitle={'Complaint'} to={'/Complaint'} subTitle={[
            { name: 'Manage', to: '/news/manage' },
            { name: 'History', to: '/news/history' },
          ]} />
        </div>

      </div>
      <div className=" col-span-4 bg-blue-50 h-screen overflow-auto p-6">
        {/* Routes */}
        <Routing />
      </div>
    </div>
  );
}

export default App;