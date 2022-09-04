import React from "react";

function Header({ count }) {
  return (
    <header className="flex justify-between items-center py-8 px-12 mb-24">
      <div className="person flex items-center text-2xl">
        <img src="/img/avatar.png" alt="avatar" />
        <div className="flex-column pl-2">
          <p className="font-bold leading-7">Hi Shobhit👋🏽</p>
          <p className="text-red-400 leading-7 ">{count} tasks pending</p>
        </div>
      </div>

      <div className="main-title">
        <h1 className="text-6xl font-bold text-gray-500">TaskDO</h1>
      </div>

      <div>
        <button className="text-2xl font-bold text-pink-500 hover:text-pink-400 transition-all">
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
