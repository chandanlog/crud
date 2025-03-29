function Navbar() {
  return (
    <nav className="py-4">
      <div className="mx-auto px-6">
        
        {/* Outer Card */}
        <div className="bg-white rounded-2xl p-4">
          
          {/* Inner Card */}
          <div className="bg-gray-50 shadow-md rounded-xl py-3 px-5 flex items-center">
            
            {/* CRUD Logo */}
            <div className="text-3xl font-extrabold text-blue-600">
              CRUD
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
